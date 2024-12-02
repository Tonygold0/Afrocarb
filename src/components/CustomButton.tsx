import { ConnectButton } from '@rainbow-me/rainbowkit';

export const CustomButton = () => {

  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== 'loading';
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus ||
            authenticationStatus === 'authenticated');
        return (
          <div
            {...(!ready && {
              'aria-hidden': true,
              'style': {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <button onClick={openConnectModal} type="button" className='cursor-pointer text-[1rem] font-[400] text-[#FAFAFA] bg-[#417505] rounded-[1rem] m-[7px] lg:w-fit w-[100%] px-[1rem] p-[0.8rem]'>
                    Connect Wallet
                  </button>
                );
              }
              if (chain.unsupported) {
                return (
                  <button onClick={openChainModal} type="button" className='cursor-pointer text-[1rem] lg:w-fit w-[100%] font-[400] text-[#FAFAFA] bg-[#417505] m-[7px] rounded-[1rem] px-[1rem] p-[0.8rem]'>
                    Wrong network
                  </button>
                );
              }
              return (
                <div style={{ display: 'flex', gap: 4 }}>
                  <button
                    onClick={openChainModal}
                    type="button"
                    className=''
                  >
                    {chain.hasIcon ? (
                      <div
                        style={{
                          background: chain.iconBackground,
                          width: '28px',
                          height: '28px',
                          borderRadius: 999,
                          overflow: 'hidden',
                        }}
                      >
                        {chain.iconUrl && (
                          <img
                            alt={chain.name ?? 'Chain icon'}
                            src={chain.iconUrl}
                            style={{ width: 28, height: 28 }}
                          />
                        )}
                      </div>
                    ) : chain.name}
                  </button>
                  <button onClick={openAccountModal} className='text-[1rem] font-[400] text-[#FAFAFA] lg:w-fit w-[100%] m-[7px] bg-[#417505] rounded-[1rem] px-[1rem] p-[0.8rem]' type="button">
                    {/* <Icon classes='' name={'link-square.svg'} size={[24, 24]} /> */}
                    {account.displayName}
                  </button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};