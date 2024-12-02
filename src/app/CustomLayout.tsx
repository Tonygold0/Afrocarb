"use client"
import Header from '@/components/Header'
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { Chain, polygonMumbai } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';

interface _Chain extends Chain {
  iconUrl: string,
  iconBackground: string,
}

const Fantom: _Chain = {
  id: 0xfa2,
  name: 'Fantom testnet',
  network: ' Fantom testnet',
  iconUrl: '/fantom-logo.svg',
  iconBackground: "#fff",
  nativeCurrency: {
    decimals: 18,
    name: 'Fantom',
    symbol: 'FTM',
  },
  rpcUrls: {
    default: {
      http: ['https://rpc.testnet.fantom.network/'],
    },
    public: {
      http: ['https://rpc.testnet.fantom.network/'],
    },
  },
  blockExplorers: {
    default: {
      name: 'ZetaChain', url: 'https://explorer.zetachain.com/evm/tx/'
    },
  },
  testnet: true,
};

const { chains, publicClient } = configureChains(
  [Fantom, polygonMumbai],
  [
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'AfroCarb',
  projectId: '5087aa7015defde818d403e3c7b85804',
  chains
});

const wagmiClient = createConfig({
  autoConnect: true,
  connectors,
  publicClient
})


export const CustomLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (

    <WagmiConfig config={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <Header />
        {children}
      </RainbowKitProvider>
    </WagmiConfig>

  )
}
