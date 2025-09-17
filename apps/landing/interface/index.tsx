export interface IPresale {
  startTime: bigint;
  endTime: bigint;
  price: bigint;
  nextStagePrice: bigint;
  tokensSold: bigint;
  tokensToSell: bigint;
  usdtHardcap: bigint;
  amountRaised: bigint;
  active: boolean;
}

export interface IStage {
  id: number;
  price: number;
  nextPrice: number;
  tokenSoldAmount: number;
  tokenToSellAmount: number;
  amountRaised: number;
  active: boolean;
  usdtHardcap: number;
}