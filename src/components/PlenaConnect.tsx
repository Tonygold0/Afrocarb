import * as React from "react";
import PlenaConnect from "@plenaconnect/client";
import QRCodeModal from "@plenaconnect/qrcode-modal";
import { IInternalEvent } from "@plenaconnect/types";

interface IAppState {
  connector: PlenaConnect | null;
  fetching: boolean;
  connected: boolean;
  chainId: number;
  showModal: boolean;
  pendingRequest: boolean;
  uri: string;
  accounts: string[];
  address: string;
  result: any | null;
}

const INITIAL_STATE: IAppState = {
  connector: null,
  fetching: false,
  connected: false,
  chainId: 1,
  showModal: false,
  pendingRequest: false,
  uri: "",
  accounts: [],
  address: "",
  result: null,
};

class PlenaApp extends React.Component<any, any> {

  constructor(props: any) {
    super(props)
    // bridge url
    const bridge = "https://bridge.plena.finance/";

    // create new connector
    const connector = new PlenaConnect({
      bridge,
      qrcodeModal: QRCodeModal,
      clientMeta: {
        description: "Connect your dApps",
        url: "https:/plena.finance",
        icons: ["https://plena.finance/files/plena-logo.png"],
        name: "Plena Connect",
      },
    });

    INITIAL_STATE.connector = connector
    this.state = INITIAL_STATE;
  }

  public state: IAppState = {
    ...INITIAL_STATE,
  };

  public connect = async () => {
    if (this.state.connector) {
      if (!this.state.connector.connected) {
        await this.state.connector.createSession();
      }
    }

    // subscribe to events
    this.subscribeToEvents();
  };

  public subscribeToEvents = () => {
    const { connector } = this.state;

    if (!connector) {
      return;
    }

    connector.on("session_update", async (error, payload) => {
      if (error) {
        throw error;
      }

      const { chainId, accounts } = payload.params[0];
      this.onSessionUpdate(accounts, chainId);
    });

    connector.on("connect", (error, payload) => {
      if (error) {
        throw error;
      }

      this.onConnect(payload);
    });

    connector.on("disconnect", (error, payload) => {
      if (error) {
        throw error;
      }

      this.onDisconnect();
    });

    if (connector.connected) {
      const { chainId, accounts } = connector;
      const address = accounts[0];
      this.setState({
        connected: true,
        chainId,
        accounts,
        address,
      });
      this.onSessionUpdate(accounts, chainId);
    }

    this.setState({ connector });
  };

  public killSession = async () => {
    const { connector } = this.state;
    if (connector) {
      connector.killSession();
    }
    this.resetApp();
  };

  public resetApp = async () => {
    await this.setState({ ...INITIAL_STATE });
  };

  public onConnect = async (payload: IInternalEvent) => {
    const { chainId, accounts } = payload.params[0];
    const address = accounts[0];
    this.setState({
      connected: true,
      chainId,
      accounts,
      address,
    });
    // this.getAccountAssets();
  };

  public onDisconnect = async () => {
    this.resetApp();
  };

  public onSessionUpdate = async (accounts: string[], chainId: number) => {
    const address = accounts[0];
    await this.setState({ chainId, accounts, address });
  };

  public toggleModal = () => this.setState({ showModal: !this.state.showModal });

  public render = () => {

    const { address, connected } = this.state;

    if (!connected && this.props.plenaConnected) {
      this.props.setplenaConnected(false)
      setTimeout(() => {
        const con = async () => {
          await this.connect()
          setTimeout(() => {
            this.props.setPlenaState(this.state)
          }, 1000);
        }
        con()
      }, 2000);
    }

    return (
      <div>
        {connected ? (
          <p onClick={() => {
            if (connected) {
              this.killSession()
              setTimeout(() => {
                this.props.setPlenaState(this.state)
                this.props.setshowPlenaBtn(false)
              }, 1000);
            }
          }}
            className="cursor-pointer text-[1rem] font-[400] text-[#FAFAFA] bg-[#417505] rounded-[1rem]  px-[1rem] p-[0.8rem]">
            <span className="">
              {connected ? (`${address?.toLowerCase().substr(0, 5)} ... ${address?.toLowerCase().substr(38, 42)}`) : 'Connect Wallet'}
            </span>
          </p>) : (
          <p onClick={() => {
            if (!connected) {
              this.props.handleConnectButton()
              this.props.setshowPlenaBtn(false)
            }
          }}
            className="cursor-pointer text-[1rem] font-[400] text-[#FAFAFA] bg-[#417505]  rounded-[1rem]   px-[1rem] p-[0.8rem]">
            <span className="">
              {connected ? (`${address?.toLowerCase().substr(0, 5)} ... ${address?.toLowerCase().substr(38, 42)}`) : 'Connect Wallet'}
            </span>
          </p>
        )}
      </div>
    );
  };
}

export default PlenaApp;