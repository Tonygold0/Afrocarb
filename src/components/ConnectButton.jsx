
import { useState, useEffect } from 'react'
import ConnectModal from './ConnectModal'

import UAuth from '@uauth/js'

import { useConnectModal } from '@rainbow-me/rainbowkit';
import { useAccount, useDisconnect } from 'wagmi'
import { useIsMounted } from '@/hooks/useIsMounted';
import { CustomButton } from './CustomButton';
import PlenaApp from './PlenaConnect';


export default function ConnectWallets({ ShowMobileNav, setShowMobileNav }) {



	const [uDauth, setUDauth] = useState()
	useEffect(() => {
		// console.log(location.href)
		const uDauth = new UAuth({
			clientID: "47badae0-2014-482c-b1ff-31396fc0bf24",
			redirectUri: `${location.origin}`,
			scope: "openid wallet messaging:notifications:optional"
		})
		setUDauth(uDauth)
	}, [])

	const [selected, setSelected] = useState(null)
	const [isOpen, setIsOpen] = useState(false)
	const [connected, setConnected] = useState(false)

	const label = connected ? 'Disconnect' : 'Connect Wallet'
	const [udUser, setUdUser] = useState()

	const { openConnectModal } = useConnectModal();
	const { address, isConnected } = useAccount()
	const { disconnectAsync } = useDisconnect()
	const [plenaConnected, setplenaConnected] = useState(false)
	const [plenaState, setplenaState] = useState()
	const [showPlenaBtn, setshowPlenaBtn] = useState()

	const mounted = useIsMounted()

	const handleConnectButton = () => {
		async function check() {

			if (!connected) {
				setSelected(null)
				setIsOpen(true)
				// setShowMobileNav(!ShowMobileNav)
				return
			} else if (connected) {
				if (selected == 'RBK' || address != undefined) {
					// openAccountModal()
					disconnectAsync()
				}
				else if (selected == 'UD' || udUser != undefined) {
					try {
						await uDauth.logout()
						setConnected(false)
						setSelected(null)
						location.reload()
					}
					catch (e) {
						console.log(e)
					}
				}
				return
			}
		}

		check()
	}

	// login a user
	useEffect(() => {

		async function login() {

			if (selected == 'RBK' && !isConnected) {
				openConnectModal()
				return
			}

			if (selected == 'PLENA' && !plenaState?.connected) {
				setplenaConnected(true)
				setshowPlenaBtn(true)
			}

			if (selected == 'UD' && udUser == undefined) {
				try {
					const authorization = await uDauth.loginWithPopup()
					location.reload()
				} catch (error) {
					console.log(error)
				}
			}
		}

		login()

	}, [selected])

	// checks if a user is connected 
	useEffect(() => {
		if (udUser != undefined || isConnected || plenaState?.connected) {
			setConnected(true)
		} else {
			setConnected(false)
			setSelected(null)
		}
	}, [udUser, isConnected, plenaState?.connected])

	useEffect(() => {
		if (uDauth != undefined && udUser != undefined) {
			try {
				uDauth.user()
					.then((user) => {
						setUdUser(user)
					})
					.catch((e) => {
						console.log(e)
					})
			} catch (err) {
				// console.log(err)
			}
		}
	}, [uDauth])

	const setPlenaState = (state) => {
		setplenaState(state)
	}

	return (
		<>
			<ConnectModal isOpen={isOpen} setIsOpen={setIsOpen} setSelected={setSelected} />

			{mounted && isConnected ? <CustomButton /> : (
				<>
					{showPlenaBtn || plenaState?.connected ? <PlenaApp plenaConnected={plenaConnected} setplenaConnected={setplenaConnected} setPlenaState={setPlenaState} setshowPlenaBtn={setshowPlenaBtn} handleConnectButton={handleConnectButton} /> : (
						<button onClick={handleConnectButton} className="cursor-pointer text-[1rem] font-[400] lg:w-fit w-[100%] text-[#FAFAFA] bg-[#417505] rounded-[1rem] m-[7px] px-[1rem] p-[0.8rem]">
							<span className="">
								{label === "Disconnect" ? (udUser ? udUser.sub : `${address?.toLowerCase().substr(0, 5)}...${address?.toLowerCase().substr(38, 42)}`) : label}
							</span>
						</button>
					)}
				</>
			)}
		</>
	)
}