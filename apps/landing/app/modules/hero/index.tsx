'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { toast } from 'react-toastify';

import { erc20Abi, parseEther, parseUnits } from 'viem';
import { useAccount } from 'wagmi';
import { waitForTransactionReceipt, writeContract, simulateContract } from '@wagmi/core';

import { wagmiConfig, web3Modal } from '@/app/providers';
import { PresaleConfig } from '@/config/presaleConfig';
import { ImageBorder } from '@/components/image-border';
import { Lashiba } from '@/components/lashiba';
import { StrokeText } from '@/components/stroke-text';
import { fetchAllowance, fetchEthToToken, fetchPresale, fetchPresaleId, fetchRaisedAmount, fetchUsdToToken } from '@/hooks/useContractData';
import { calculateTokenPrice, convertBiginttoNumber } from '@/utils';

import { CoinMarketCap } from '../about/coin-market-cap';
import { BallsCount } from './balls-count';
import { HeroImages } from './images';
import Progress from './progress';
import Timer from './timer';
import EthIcon from './EthIcon';
import UsdtIcon from './UsdtIcon';
import { presaleContractABI } from '@/config/abi/presaleContractABI';

const Hero = () => {
  const { address, isConnected } = useAccount()

  const options = ['eth', 'usdt'];
  const [progress, setProgress] = useState(0);
  const [price, setPrice] = useState(0);
  const [nextPrice, setNextPrice] = useState(0);

  const [selectToken, setSelectToken] = useState('eth');
  const [fromAmount, setFromAmount] = useState('');
  const [toAmount, setToAmount] = useState('0');
  const [delay, setDelay] = useState(0);

  const [isDepositloading, setDepositLoading] = useState(false);
  const [isApproveloading, setApproveLoading] = useState(false);
  const [isStakeDepositloading, setStakeDepositLoading] = useState(false);
  const [isStakeApproveloading, setStakeApproveLoading] = useState(false);

  const [open, setOpen] = useState(false);

  const { allowance, onAllowance } = fetchAllowance();
  const { raisedAmount, onRaisedAmount } = fetchRaisedAmount();
  const { presaleId, currentPresale, onPresaleId } = fetchPresaleId();
  const { presale, onPresale } = fetchPresale();
  const { onEthToToken } = fetchEthToToken();
  const { onUsdToToken } = fetchUsdToToken();

  useEffect(() => {
    getContractData()
    // const endTime = Math.floor(
    //   new Date(PresaleConfig.presaleEnd).getTime() / 1000
    // );
    // const currentTime = Math.floor(Date.now() / 1000);
    // setTimeCount(Math.max(endTime - currentTime, 0));

    // const timerId = setInterval(() => {
    //   setTimeCount((prev) => prev - 1);
    // }, 1000);

    // return () => clearInterval(timerId);
  }, []);

  useEffect(() => {
    if (currentPresale > 0) {
      onPresale(currentPresale)
    }
  }, [currentPresale]);

  useEffect(() => {
    if (presale) {
      setPrice(calculateTokenPrice(presale.price));
      setNextPrice(calculateTokenPrice(presale.nextStagePrice));

      const soldAmount = convertBiginttoNumber(presale.tokensSold);
      const toSellAmount = convertBiginttoNumber(presale.tokensToSell);
      setProgress(soldAmount / toSellAmount * 100);
    }
  }, [presale])

  useEffect(() => {
    setDelay(3);
  }, [fromAmount]);

  useEffect(() => {
    if (!fromAmount) {
      setToAmount("");
    }

    if (delay > 0) {
      setTimeout(() => {
        setDelay((prev) => prev - 1);
      }, 300);

      if (delay === 1) {
        fetchToAmount();
      }
    }
  }, [delay]);

  const fetchToAmount = () => {
    if (!fromAmount) {
      setToAmount('');
    } else {
      try {
        if (selectToken === 'eth') {
          onEthToToken(currentPresale, Number(fromAmount)).then((data) => {
            if (data) setToAmount(data.toFixed(2));
            else setToAmount('');
          });
        } else {
          onUsdToToken(currentPresale, Number(fromAmount)).then((data) => {
            if (data) setToAmount(data.toFixed(2));
            else setToAmount('');
          });
        }
      } catch (error) { }
    }
  };

  const getContractData = async () => {
    onRaisedAmount();
    onPresaleId();

    if (address) {
      onAllowance(address);
    }
  };

  const handleChange = async (e: any) => {
    const RE = /^\d*\.?\d{0,18}$/;
    if (e.target.value === ".") setFromAmount("0");
    if (RE.test(e.currentTarget.value)) {
      setFromAmount(e.target.value as any);
    }
  };

  const handleConnectWallet = async () => {
    if (address && isConnected) {
      handleBuy()
    } else {
      web3Modal.open();
    }
  };

  const handleBuy = async (bStake: boolean = false) => {
    if (!address || !isConnected) {
      return;
    }

    if (!fromAmount || !Number(fromAmount)) {
      toast.error('Invalid Amount');
      return;
    }

    if (selectToken === 'eth') {
      if (bStake) setStakeDepositLoading(true);
      else setDepositLoading(true);
      try {
        const hash = await writeContract(wagmiConfig, {
          address: PresaleConfig.presaleAddress as `0x${string}`,
          abi: presaleContractABI,
          functionName: 'buyWithEth',
          args: [bStake],
          value: parseEther(String(fromAmount)),
        });
        const res = await waitForTransactionReceipt(wagmiConfig, {
          hash,
        });

        console.log('data ==> ', res, hash);

        if (res?.blockHash) {
          console.log(res?.blockHash);

          toast.success('Transaction is completed!');

          getContractData();

          onPresale(currentPresale);
          setFromAmount('');
        }
      } catch (err: any) {
        console.log('err ==> ', err);
        if (!String(err).includes('User rejected the request.')) {
          toast.error('Transaction is failed!');
        }
      }
      if (bStake) setStakeDepositLoading(false);
      else setDepositLoading(false);
    } else if (allowance < Number(fromAmount)) {
      if (bStake) setStakeApproveLoading(true);
      else setApproveLoading(true);
      try {
        const hash = await writeContract(wagmiConfig, {
          address: PresaleConfig.usdtAddress as `0x${string}`,
          abi: erc20Abi,
          functionName: 'approve',
          args: [PresaleConfig.presaleAddress as `0x${string}`, parseUnits(String(fromAmount), 6)],
        });
        const res = await waitForTransactionReceipt(wagmiConfig, {
          hash,
        });

        console.log('data ==> ', res, hash);

        if (res?.blockHash) {
          console.log(res?.blockHash);

          toast.success('Transaction is completed!');

          getContractData();
        }
      } catch (err: any) {
        console.log('err ==> ', err);
        if (!String(err).includes('User rejected the request.')) {
          toast.error('Transaction is failed!');
        }
      }
      if (bStake) setStakeApproveLoading(false);
      else setApproveLoading(false);
    } else {
      if (bStake) setStakeDepositLoading(true);
      else setDepositLoading(true);
      try {
        const simulation = await simulateContract(wagmiConfig, {
          address: PresaleConfig.presaleAddress as `0x${string}`,
          abi: presaleContractABI,
          functionName: 'buyWithUSDT',
          args: [parseUnits(String(fromAmount), 6), bStake],
          account: address,
        })

        console.log('Buy Simulation succeeded:', simulation.result)

        const hash = await writeContract(wagmiConfig, simulation.request)

        const res = await waitForTransactionReceipt(wagmiConfig, {
          hash,
        });

        // const hash = await writeContract(wagmiConfig, {
        //   address: PresaleConfig.presaleAddress as `0x${string}`,
        //   abi: presaleContractABI,
        //   functionName: 'buyWithUSDT',
        //   args: [parseUnits(String(fromAmount), 6), bStake],
        // });
        // const res = await waitForTransactionReceipt(wagmiConfig, {
        //   hash,
        // });

        console.log('data ==> ', res, hash);

        if (res?.blockHash) {
          console.log(res?.blockHash);

          toast.success('Transaction is completed!');

          getContractData();

          onPresale(currentPresale);
          setFromAmount('');
        }
      } catch (err: any) {
        console.log('err ==> ', err);
        if (!String(err).includes('User rejected the request.')) {
          toast.error('Transaction is failed!');
        }
      }
      if (bStake) setStakeDepositLoading(false);
      else setDepositLoading(false);
    }


  }

  return (
    <div className='w-full flex flex-col items-center relative z-10 h-full'>
      <div className='w-full max-w-[1920px] h-full relative pb-[280px] lg:pb-[240px] xl:pb-[170px]'>
        <HeroImages />
        <div className='w-full h-full relative z-20 flex flex-col pt-5 lg:pt-[154px] px-4 lg:pl-10 xl:pl-20 3xl:pl-[351px] lg:pr-6'>
          <div className='flex flex-col lg:flex-row gap-[30px] lg:gap-[70px] justify-between 2xl:justify-end 2xl:pr-[170px] items-center lg:items-start lg:w-full'>
            <div className='flex flex-col lg:items-center xl:mt-[50px]'>
              <div className='flex flex-col'>
                <div className='flex lg:hidden flex-row items-end justify-between w-full pr-6 -mb-4'>
                  <div className='relative w-[65px] h-[83px] ml-10 '>
                    <Image
                      src='/images/lashiba-face.webp'
                      alt='animated shiba'
                      fill
                      loading='lazy'
                    />
                  </div>
                  <StrokeText
                    className='text-[40px] font-nerko text-black leading-[72%] font-normal text-stroke-[0.125em] '
                    text='Inu'
                  />
                </div>
                <div>
                  <div className='hidden lg:block text-right lg:-mb-7 lg:mr-5 xl:-mb-12 2xl:-mb-12 xl:mr-8 2xl:mr-20'>
                    <StrokeText
                      className='text-[60px] xl:text-[75px] text-stroke-[0.125em] font-nerko text-black leading-[72%] font-normal'
                      text='Inu'
                    />
                  </div>
                  <Lashiba className='relative w-[322px] h-[86px] lg:w-[400px] lg:h-[120px] xl:w-[500px] xl:h-[180px] 2xl:w-[809px] 2xl:h-[216px]' />
                </div>
              </div>
              <CoinMarketCap />
            </div>
            <div className='flex flex-row flex-1 2xl:max-w-[515px] w-full'>
              <ImageBorder
                borderImage="url('/hero-border-card.svg')"
                border='45px solid transparent'
                borderImageSlice={45}
                wrapperClassName='w-fit lg:w-full hidden lg:block '
              >
                <div className='bg-[#78A16D] border-[3.5px] lg:border-[5.5px] border-[#000000] flex flex-col rounded-[26px] lg:rounded-[40px] h-full px-5 lg:px-[30px] pt-6 lg:pt-4 pb-6 lg:pb-9'>
                  {/*TODO -  CHANGED FONT !! */}
                  <StrokeText
                    className='text-[32px] leading-[72%] lg:text-[42px] font-nerko text-black text-center mb-[10px] lg:mb-4 content-center font-normal text-stroke-[0.125em] lg:text-stroke-[0.1875em]'
                    text='Presale ending in'
                  />

                  <Timer />
                  <p className='text-center font-patrick text-[16px] lg:text-[24px] leading-[88%] content-center mt-1 lg:mt-[5px]'>
                    Last chance to buy before
                    <br /> Major Exchange Listings
                  </p>
                  <div className='flex flex-row items-center justify-between gap-[22px] lg:gap-[34px] mb-[10px] lg:mb-4'>
                    <StrokeText
                      className='text-[22px] lg:text-[32px] font-nerko text-black leading-[72px] content-center font-normal text-stroke-[0.125em] lg:text-stroke-[0.1875em] '
                      text='Raised:'
                    />
                    <p
                      className='text-[32px] lg:text-[48px] font-nerko  leading-[32px] lg:leading-[48px] text-stroke-[0.125em] before:content-[attr(data-content)] before:gradient-text before:text-stroke-[0em] before:absolute'
                      data-content={`$${Math.floor(Number(raisedAmount.toFixed(2))).toLocaleString()}`}
                    >
                      ${Math.floor(Number(raisedAmount.toFixed(2))).toLocaleString()}
                    </p>
                  </div>
                  <div className='flex flex-row items-center justify-between font-patrick text-[12px] lg:text-[18px] leading-[88%] mb-3 lg:mb-[18px] -mt-6'>
                    <p>Stage {currentPresale}/{presaleId}</p>
                    <p>{progress.toFixed(2)}% of the target raised</p>
                  </div>
                  <Progress progress={progress} />
                  {
                    address && isConnected ? (
                      <>
                        <div className='flex flex-col my-[17px] lg:my-[21px] gap-y-[8px]'>
                          <div className='flex flex-row items-center justify-between px-[10px] lg:px-[21px] bg-black rounded-[40px] text-center'>
                            <div className='flex flex-row items-center gap-10 font-patrick py-2 lg:py-[13px]'>
                              <span className='text-[14px] lg:text-[20px] leading-[88%] text-[#FFFFFF73] text-nowrap'>
                                You Pay
                              </span>
                              <input
                                type="text"
                                value={fromAmount}
                                onChange={handleChange}
                                placeholder="0"
                                className="outline-none leading-[80%] text-[16px] lg:text-[20px] text-white bg-transparent placeholder:text-white w-full"
                              />
                            </div>
                            <div className="relative flex items-center h-full max-w-[62.37px] lg:max-w-[106px] w-full z-10">
                              <button
                                onClick={() => setOpen(!open)}
                                className={`relative flex w-full items-center gap-x-6 justify-between lg:justify-center text-[14px] lg:text-[24px] font-patrick uppercase text-white transition-all duration-300`}
                              >
                                <div className='flex flex-row gap-2 items-center'>
                                  {selectToken}
                                  <div>
                                    {selectToken == 'eth' && <EthIcon size={17} />}
                                    {selectToken == 'usdt' && <UsdtIcon size={19} />}
                                  </div>
                                </div>
                                <img
                                  src="/images/DownArrow.png"
                                  className={`w-2 h-1 lg:w-[15px] lg:h-[7.5px] transition-transform duration-300 ${open ? 'rotate-180' : ''
                                    }`}
                                  alt=""
                                />
                              </button>

                              {/* Dropdown Menu OVERLAYING below the button, same style */}
                              <div
                                className={`px-2 absolute mt-[-2px] top-full left-0 w-full rounded-x-[5px] rounded-b-[5px] bg-[#000000B3] shadow-md transition-all duration-300 z-50 origin-top transform ${open ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'}`}
                              >
                                {options.map((option) => (
                                  <div
                                    key={option}
                                    onClick={() => {
                                      setSelectToken(option);
                                      setFromAmount('');
                                      setOpen(false);
                                    }}
                                    className={`flex ${option == 'eth' ? 'gap-2.5' : 'gap-1.5'
                                      }  h-[29px] text-white transition-all items-center text-[14px] md:text-sm uppercase cursor-pointer text-center font-obriton font-[900]`}
                                  >
                                    <div className="hidden lg:block">
                                      {option == 'eth' && <EthIcon size={17} />}
                                      {option == 'usdt' && <UsdtIcon size={15} />}
                                    </div>
                                    {option}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className='flex flex-row items-center justify-between font-patrick text-[16px] lg:text-[20px] leading-[88%] text-white px-[10px] lg:px-[21px] py-2 lg:py-[13px] bg-black rounded-[40px] text-center'>
                            <div className='flex flex-row gap-3 font-patrick'>
                              <span className='text-[14px] lg:text-[20px] leading-[88%] text-[#FFFFFF73]'>
                                You Receive
                              </span>
                              <span className='text-[14px] lg:text-[20px] leading-[88%] text-white'>
                                {Number(toAmount).toFixed(2).toLocaleString()}
                              </span>
                            </div>
                            <div className='flex flex-row gap-5 items-center'>
                              <span className='font-patrick text-[14px] lg:text-[24px] leading-[88%] text-white'>Lashiba</span>
                              <img
                                src="/images/lashiba-face.webp"
                                className={`w-2 h-1 lg:w-[25px] lg:h-[25px] transition-transform duration-300 ${open ? 'rotate-180' : ''
                                  }`}
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className='grid grid-cols-2 gap-4 lg:gap-6 mt-[17px] lg:mt-[26px]'>
                          <div className='font-patrick text-[12px] lg:text-[18px] leading-[88%] text-white px-[10px] lg:px-2 pt-2 lg:pt-[11px] pb-[10px] lg:pb-[17px] bg-[#4D7443] rounded-[40px] text-center'>
                            Current Price: ${price}
                          </div>
                          <div className='font-patrick text-[12px] lg:text-[18px] leading-[88%] text-white px-[10px] lg:px-2 pt-2 lg:pt-[11px] pb-[10px] lg:pb-[17px] bg-[#4D7443] rounded-[40px] text-center'>
                            Next Price: ${nextPrice}
                          </div>
                        </div>
                        <div className='flex flex-row items-center justify-center gap-5'>
                          <StrokeText
                            className='text-[22px] lg:text-[32px] font-nerko text-black leading-[72%] content-center font-normal text-stroke-[0.125em] lg:text-stroke-[0.1875em] '
                            text='Listing Price:'
                          />
                          <p
                            className='text-[32px] lg:text-[48px] font-nerko  leading-[32px] lg:leading-[48px] text-stroke-[0.125em] before:content-[attr(data-content)] before:gradient-text before:text-stroke-[0em] before:absolute'
                            data-content='$0.12'
                          >
                            ${PresaleConfig.launchPrice}
                          </p>
                        </div>
                      </>
                    )
                  }

                  <div className='grid grid-cols-2 gap-4 w-full'>
                    <button className='w-[121px] lg:w-[183px] h-[56px] xl:h-[78px] relative hover:opacity-50' onClick={() => handleConnectWallet()}>
                      <Image
                        src='/images/green-button.webp'
                        alt={`Background `}
                        fill
                        priority={true}
                        sizes='100vw'
                      />
                      <StrokeText
                        className='text-[14px] lg:text-[21px] font-nerko text-black leading-[72%] content-center font-normal text-stroke-[0.125em] lg:text-stroke-[0.1875em] relative z-10 '
                        text={`${address && isConnected ? selectToken === 'usdt' && allowance < Number(fromAmount)
                          ? isApproveloading
                            ? ('Approving')
                            : ('Approve')
                          : isDepositloading
                            ? ('Depositing')
                            : ('Buy Now') : 'Buy with Crypto'}`}
                      />
                    </button>

                    <button className='w-[121px] lg:w-[183px] h-[56px] xl:h-[78px] relative hover:opacity-50' onClick={() => handleBuy(true)}>
                      <Image
                        src='/images/pink-button.webp'
                        alt={`Background `}
                        fill
                        priority={true}
                        sizes='100vw'
                      />
                      <StrokeText
                        className='text-[14px] lg:text-[21px] font-nerko text-black leading-[72%] content-center font-normal text-stroke-[0.125em] lg:text-stroke-[0.1875em] relative z-10 '
                        text={`${address && isConnected ? (selectToken === 'usdt' && allowance < Number(fromAmount)
                          ? isStakeApproveloading
                            ? 'Approving'
                            : 'Approve'
                          : isStakeDepositloading
                            ? 'Depositing'
                            : 'Buy & Stake') : 'Buy with card'}`}
                      />
                    </button>
                  </div>
                </div>
              </ImageBorder>
              <ImageBorder
                borderImage="url('/images/mobileBorder.png')"
                border='45px solid transparent'
                borderImageSlice={25}
                wrapperClassName='w-fit lg:w-full  lg:hidden '
              >
                <div className='bg-[#78A16D] border-[3.5px] lg:border-[5.5px] border-[#000000] flex flex-col rounded-[26px] lg:rounded-[40px] h-full px-5 lg:px-[30px] pt-6 lg:pt-4 pb-6 lg:pb-9'>
                  {/*TODO -  CHANGED FONT !! */}
                  <StrokeText
                    className='text-[32px] leading-[72%] lg:text-[42px] font-nerko text-black text-center mb-[10px] lg:mb-4 content-center font-normal text-stroke-[0.125em] lg:text-stroke-[0.1875em]'
                    text='Presale ending in'
                  />

                  <Timer />
                  <p className='text-center font-patrick text-[16px] lg:text-[24px] leading-[88%] content-center mt-1 lg:mt-[5px]'>
                    Last chance to buy before
                    <br /> Major Exchange Listings
                  </p>
                  <div className='flex flex-row items-center justify-between gap-[22px] lg:gap-[34px] mb-[10px] lg:mb-4'>
                    <StrokeText
                      className='text-[22px] lg:text-[32px] font-nerko text-black leading-[72px] content-center font-normal text-stroke-[0.125em] lg:text-stroke-[0.1875em] '
                      text='Raised:'
                    />
                    <p
                      className='text-[32px] lg:text-[48px] font-nerko  leading-[32px] lg:leading-[48px] text-stroke-[0.125em] before:content-[attr(data-content)] before:gradient-text before:text-stroke-[0em] before:absolute'
                      data-content={`$${Math.floor(Number(raisedAmount.toFixed(2))).toLocaleString()}`}
                    >
                      ${Math.floor(Number(raisedAmount.toFixed(2))).toLocaleString()}
                    </p>
                  </div>
                  <div className='flex flex-row items-center justify-between font-patrick text-[12px] lg:text-[18px] leading-[88%] mb-6 lg:mb-[18px] -mt-6'>
                    <p>Stage {currentPresale}/{presaleId}</p>
                    <p>{progress.toFixed(2)}% of the target raised</p>
                  </div>
                  <Progress progress={progress} />
                  {
                    address && isConnected ? (
                      <>
                        <div className='flex flex-col my-[17px] lg:my-[21px] gap-y-[8px]'>
                          <div className='flex flex-row items-center justify-between px-[10px] lg:px-[21px] bg-black rounded-[40px] text-center'>
                            <div className='flex flex-row items-center gap-8 font-patrick py-2 lg:py-[13px]'>
                              <span className='text-[16px] lg:text-[20px] leading-[88%] text-[#FFFFFF73] text-nowrap'>
                                You Pay
                              </span>
                              <input
                                type="text"
                                value={fromAmount}
                                onChange={handleChange}
                                placeholder="0"
                                className="outline-none leading-[80%] text-[16px] lg:text-[20px] text-white bg-transparent placeholder:text-white w-full"
                              />
                            </div>
                            <div className="relative flex items-center h-full max-w-[62.37px] lg:max-w-[106px] w-full z-10">
                              <button
                                onClick={() => setOpen(!open)}
                                className={`relative flex w-full items-center gap-x-2 justify-between lg:justify-center text-[14px] lg:text-[24px] font-patrick uppercase text-white transition-all duration-300`}
                              >
                                <div className='flex flex-row gap-2 items-center'>
                                  {selectToken}
                                  <div>
                                    {selectToken == 'eth' && <EthIcon size={15} />}
                                    {selectToken == 'usdt' && <UsdtIcon size={17} />}
                                  </div>
                                </div>
                                <img
                                  src="/images/DownArrow.png"
                                  className={`w-2 h-1 lg:w-[15px] lg:h-[7.5px] transition-transform duration-300 ${open ? 'rotate-180' : ''
                                    }`}
                                  alt=""
                                />
                              </button>

                              {/* Dropdown Menu OVERLAYING below the button, same style */}
                              <div
                                className={`px-2 absolute mt-[-2px] top-full left-0 w-full rounded-x-[5px] rounded-b-[5px] bg-[#000000B3] shadow-md transition-all duration-300 z-50 origin-top transform ${open ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'}`}
                              >
                                {options.map((option) => (
                                  <div
                                    key={option}
                                    onClick={() => {
                                      setSelectToken(option);
                                      setFromAmount('');
                                      setOpen(false);
                                    }}
                                    className={`flex ${option == 'eth' ? 'gap-2.5' : 'gap-1.5'
                                      }  h-[29px] text-white transition-all items-center text-[14px] md:text-sm uppercase cursor-pointer text-center font-obriton font-[900]`}
                                  >
                                    <div className="hidden lg:block">
                                      {option == 'eth' && <EthIcon size={17} />}
                                      {option == 'usdt' && <UsdtIcon size={15} />}
                                    </div>
                                    {option}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className='flex flex-row items-center justify-between px-[10px] py-2 bg-black rounded-[40px] text-center'>
                            <div className='flex flex-row gap-3 font-patrick'>
                              <span className='text-[16px] leading-[88%] text-[#FFFFFF73]'>
                                You Receive
                              </span>
                              <span className='text-[16px] leading-[88%] text-white'>
                                {Number(toAmount).toFixed(2).toLocaleString()}
                              </span>
                            </div>
                            <div className='flex flex-row gap-2 items-center'>
                              <span className='font-patrick text-[16px] leading-[88%] text-white'>Lashiba</span>
                              <img
                                src="/images/lashiba-face.webp"
                                className={`w-[15px]  transition-transform duration-300 ${open ? 'rotate-180' : ''
                                  }`}
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className='grid grid-cols-2 gap-4 lg:gap-6 mt-[17px] lg:mt-[26px]'>
                          <div className="font-patrick text-[12px] lg:text-[18px] leading-[120%] text-white px-[10px] lg:px-2 pt-2 lg:pt-[11px] pb-[10px] lg:pb-[17px] bg-[#4D7443] rounded-[40px] text-center whitespace-normal">
                            <span className="block lg:inline">
                              Current Price:
                            </span>{" "}
                            <span className="block lg:inline">
                              ${price}
                            </span>
                          </div>

                          <div className="font-patrick text-[12px] lg:text-[18px] leading-[120%] text-white px-[10px] lg:px-2 pt-2 lg:pt-[11px] pb-[10px] lg:pb-[17px] bg-[#4D7443] rounded-[40px] text-center whitespace-normal">
                            <span className="block lg:inline">Next Price:</span>{" "}
                            <span className="block lg:inline">${nextPrice}</span>
                          </div>
                        </div>
                        <div className='flex flex-row items-center justify-center gap-5'>
                          <StrokeText
                            className='text-[22px] lg:text-[32px] font-nerko text-black leading-[72%] content-center font-normal text-stroke-[0.125em] lg:text-stroke-[0.1875em] '
                            text='Listing Price:'
                          />
                          <p
                            className='text-[32px] lg:text-[48px] font-nerko  leading-[32px] lg:leading-[48px] text-stroke-[0.125em] before:content-[attr(data-content)] before:gradient-text before:text-stroke-[0em] before:absolute'
                            data-content='$0.12'
                          >
                            ${PresaleConfig.launchPrice}
                          </p>
                        </div>
                      </>
                    )
                  }
                  <div className='grid grid-cols-2 gap-4 w-full'>
                    <button className='w-[121px] lg:w-[183px] h-[56px] xl:h-[78px] relative' onClick={() => handleConnectWallet()}>
                      <Image
                        src='/images/green-button.webp'
                        alt={`Background `}
                        fill
                        priority={true}
                        sizes='100vw'
                      />
                      <StrokeText
                        className='text-[14px] lg:text-[21px] font-nerko text-black leading-[72%] content-center font-normal text-stroke-[0.125em] lg:text-stroke-[0.1875em] relative z-10 '
                        text={`${address && isConnected ? selectToken === 'usdt' && allowance < Number(fromAmount)
                          ? isApproveloading
                            ? ('Approving')
                            : ('Approve')
                          : isDepositloading
                            ? ('Depositing')
                            : ('Buy Now') : 'Buy with Crypto'}`}
                      />
                    </button>

                    <button className='w-[121px] lg:w-[183px] h-[56px] xl:h-[78px] relative' onClick={() => handleBuy(true)}>
                      <Image
                        src='/images/pink-button.webp'
                        alt={`Background `}
                        fill
                        priority={true}
                        sizes='100vw'
                      />
                      <StrokeText
                        className='text-[14px] lg:text-[21px] font-nerko text-black leading-[72%] content-center font-normal text-stroke-[0.125em] lg:text-stroke-[0.1875em] relative z-10 '
                        text={`${address && isConnected ? (selectToken === 'usdt' && allowance < Number(fromAmount)
                          ? isStakeApproveloading
                            ? 'Approving'
                            : 'Approve'
                          : isStakeDepositloading
                            ? 'Depositing'
                            : 'Buy & Stake') : 'Buy with card'}`}
                      />
                    </button>
                  </div>
                </div >
              </ImageBorder >
              <div className="  2xl:hidden  ">
                <BallsCount />

              </div>
            </div >
          </div >
          <div className="absolute hidden 2xl:block right-10">
            <BallsCount />

          </div>
        </div >
      </div >
    </div >
  );
};

export default Hero;
