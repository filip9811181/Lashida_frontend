'use client';
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { cookieStorage, createStorage } from '@wagmi/core';
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi';
import { mainnet } from '@reown/appkit/networks';
import { createAppKit } from '@reown/appkit/react';
import React from 'react';
import { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import Header from './modules/header';

export const projectId = 'ebac8aee54c9ec4eb9ba961f30d7d4b5';

if (!projectId) {
  throw new Error('Project ID is not defined');
}

export const networks = [mainnet];

//Set up the Wagmi Adapter (Config)
export const wagmiAdapter = new WagmiAdapter({
  storage: createStorage({
    storage: cookieStorage,
  }),
  ssr: true,
  projectId: projectId,
  networks,
});

export const wagmiConfig = wagmiAdapter.wagmiConfig;

const metadata = {
  name: 'LaShiba Inu',
  description:
    'LaShiba Inu is the unruly child of two cultural powerhouses; the playful chaos of Labubu and the viral magic of Shiba. Part collectible grail, part crypto degen’s fever dream, LaShiba Inu isn’t just another meme it’s a full-blown phenomenon!',
  url: 'https://lashibainu.io/', // origin must match your domain & subdomain
  icons: ['https://lashibainu.io/favicon.ico'],
};

export const web3Modal = createAppKit({
  adapters: [wagmiAdapter],
  projectId: projectId,
  networks: [mainnet],
  defaultNetwork: mainnet,
  showWallets: false,
  metadata: metadata,
  enableWalletGuide: false,
  features: {
    analytics: true, // Optional - defaults to your Cloud configuration
    email: false,
    emailShowWallets: false,
    socials: false,
    connectMethodsOrder: ['wallet'],
  },
});

const queryClient = new QueryClient();

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Suspense>
      <ToastContainer />
      <WagmiProvider config={wagmiConfig}>
        <Header />
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      </WagmiProvider>
    </Suspense>
  );
}
