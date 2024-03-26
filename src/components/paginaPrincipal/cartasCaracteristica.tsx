import { useState } from "react"
import TarotBack from '../../assets/Tarotback.jpeg'
import Fool from '../../assets/0Fool.jpeg'
import Magician from '../../assets/1Magician.jpeg'
import Priestess from '../../assets/2Priestess.jpeg'
import Empress from '../../assets/3Empress.jpeg'
import Emperor from '../../assets/4Emperor.jpeg'
import Hierophant from '../../assets/5Hierophant.jpeg'
import Lovers from '../../assets/6Lovers.jpeg'


//const viradaPraBaixo = "ON_BACK"

export const CartasCaracteristicas = () => {

	//const [ virada, setVirada ] = useState(true)
	const [ randomValue, setRandomValue ] = useState(TarotBack)

	const VirarCarta = () => {
		//setVirada(!virada);
		if(randomValue === TarotBack) {
			embaralhar();
		} else {
			setRandomValue(TarotBack)
		}
	}
	
	const embaralhar = () => {
		//const virada = randomValue === TarotBack
		const cartasDisponiveis = [Fool, Magician, Priestess, Empress, Emperor, Hierophant, Lovers].filter(carta => carta !== randomValue);
		const randomIndex = Math.floor(Math.random() * cartasDisponiveis.length);
		const selectedValue = cartasDisponiveis[randomIndex];
		setRandomValue(selectedValue);
	};

	const virada = randomValue === TarotBack

	return (
		<div>
			<button className="border rounded-2xl border-black shadow-2xl" onClick={VirarCarta}>
			{virada ? (
				<img className="w-72 rounded-2xl" src={TarotBack} alt="Carta virada" />
			) : (
				<img className="w-72 rounded-2xl" src={randomValue} alt="Carta desvirada" />
			)}
			</button>
		</div>
		);
	};