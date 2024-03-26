import { useState } from "react"
import { MenuButton } from "../menuButton"
import { Link } from "react-router-dom"

export const Header = () => {

	const [ menuState, setMenuState ] = useState(false)

	const handleMenuState = () => {
		setMenuState(!menuState)
	}

	return(
		<div className="relative z-50">

			<div className="bg-blue-500 h-28 w-full z-50">
				<div className="flex justify-between px-10 py-5 text-white font-medium">
					<Link to="/">
						<button className="text-6xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">Tártaro</button>
					</Link>
					<div className="flex gap-5 text-xl items-center">
						<MenuButton label="Básico" handleButton={handleMenuState}/>
						<MenuButton label="Sem função"/>
						<MenuButton label="Sem função"/>
						<MenuButton label="Sem função"/>
					</div>
				</div>
			</div>

			<div className={`bg-blue-400 bg-opacity-80 font-medium text-white z-10 w-full inset-x-0 duration-700 pr-20 py-3 space-x-6 text-right ${menuState ? "translate-y-0" : "-translate-y-44"}`}>
				<button className="hover:text-black hover:text-lg hover:font-semibold duration-200 ">
					<Link to={"/sites-para-estudo"}>
						Sites para estudos
					</Link>
				</button>
				<button className="hover:text-black hover:text-lg hover:font-semibold duration-200">Option 1.2</button>
				<button className="hover:text-black hover:text-lg hover:font-semibold duration-200">Option 1.3</button>
				<button className="hover:text-black hover:text-lg hover:font-semibold duration-200">Option 1.4</button>
			</div>			

		</div>
	)
}