import { Footer } from "./footer"
import { Header } from "./header"
import VideoBg from '../../assets/VideoBgEstudo.mp4'
import { PropsWithChildren } from "react"


export const LayoutPrincipal = ({children}: PropsWithChildren) => {
	return(
		<div className="flex flex-col min-h-screen font-milker">
			
			<div className="z-50">
				<Header />
			</div>

			<div className="z-40 pt-32 w-full absolute">
				{children}
			</div>

			<video
				className="h-full w-full object-cover absolute top-0 left-0 z-0" 
				autoPlay
				loop
				muted
			>
				<source src={VideoBg} type="video/mp4"/>
			</video>

			<div className="z-50 mb-auto">
				<Footer />
			</div>
		</div>
	)
}