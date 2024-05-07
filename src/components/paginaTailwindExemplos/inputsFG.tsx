import { Circle, LucideArrowDown, LucideArrowDownLeft, LucideArrowDownRight, LucideArrowLeft, LucideArrowRight, LucideArrowUp, LucideArrowUpLeft, LucideArrowUpRight } from "lucide-react"
import { useState } from "react"
import Hadouke from "../../assets/Hadoken.webp"
import Shoryuken from "../../assets/XDZW.gif"
import TatsumakiSenpukyaku from "../../assets/Ryuhurricanekick.webp"
import JodanSokutouGeri from "../../assets/High-BladeLegKick.webp"
import Error from "../../assets/Makoto_dizzy_gif.webp"
import Super from "../../assets/Sfa2_ryu_super.webp"
import MakotoUps from "../../assets/makoto-street-fighter.gif"
import KonamiCode from "../../assets/ShinAkumaSGS.webp"

export const InputFG = () => {
    
    const [inputs, setInputs] = useState('')
    const [message, setMessage] = useState('Get Ready')
    const [imgGolpe, setImgGolpe] = useState(MakotoUps)

    const handleInput = (value: string) => {
        setInputs(inputs + value)
    }

    const clearInput = () => {
        setInputs('')
    }

    const HadokenInput = ["236P" , "236HP"];

    const ShoryukenInput = ["5623P" , "5623HP"];

    const TatsumakiSenpukyakuInput = ["214K" , "214HK"];

    const JodanSokutouGeriInput = ["541236K" , "541236HK"];

    const ShinkuHadokenInput = "236236P";

    const KonamiCodeInput = "88224646PK";

    const confirmInputs = () => {
        const userInput = inputs;

        if (HadokenInput.includes(userInput)) {
            setMessage("Hadoken");
            setImgGolpe(Hadouke);
        } else if (ShoryukenInput.includes(userInput)) {
            setMessage("Shoryuken");
            setImgGolpe(Shoryuken);
        } else if (TatsumakiSenpukyakuInput.includes(userInput)) {
            setMessage("Tatsumaki Senpukyaku");
            setImgGolpe(TatsumakiSenpukyaku)
        } else if (JodanSokutouGeriInput.includes(userInput)) {
            setMessage("Jodan Sokutou Geri");
            setImgGolpe(JodanSokutouGeri)
        } else if (userInput === ShinkuHadokenInput) {
            setMessage("Shinku Hadoken");
            setImgGolpe(Super)
        } else if (userInput === "") {
            setMessage("Get Ready");
            setImgGolpe(MakotoUps)
        } else if (userInput === KonamiCodeInput) {
            setMessage("Konami Code??");
            setImgGolpe(KonamiCode)
        } else {
            setMessage("Golpe Inválido");
            setImgGolpe(Error)
        }
    }

    return(
        <div>
            <h2 className="underline">Explicativa de Inputs em Jogos de Luta:</h2>
            
            <div className="flex space-x-5">
                <div>
                    <div className="flex space-x-5 py-4">
                        <div>
                            <div>
                                <button className="border border-black w-12 px-3 py-2 bg-red-600 hover:bg-white" onClick={() => handleInput('7')}>
                                    <LucideArrowUpLeft />
                                </button>
                                <button className="border border-black w-12 px-3 py-2 bg-red-600 hover:bg-white" onClick={() => handleInput('8')}>
                                    <LucideArrowUp />
                                </button>
                                <button className="border border-black w-12 px-3 py-2 bg-red-600 hover:bg-white" onClick={() => handleInput('9')}>
                                    <LucideArrowUpRight />                    
                                </button>                    
                            </div>
                            <div>
                                <button className="border border-black w-12 px-3 py-2 bg-red-600 hover:bg-white" onClick={() => handleInput('4')}>
                                    <LucideArrowLeft />                
                                </button>
                                <button className="border border-black w-12 px-3 py-2 bg-red-600 hover:bg-white" onClick={() => handleInput('5')}>
                                    <Circle />
                                </button>
                                <button className="border border-black w-12 px-3 py-2 bg-red-600 hover:bg-white" onClick={() => handleInput('6')}>
                                    <LucideArrowRight />
                                </button>
                            </div>
                            <div>
                                <button className="border border-black w-12 px-3 py-2 bg-red-600 hover:bg-white" onClick={() => handleInput('1')}>
                                    <LucideArrowDownLeft />
                                </button>
                                <button className="border border-black w-12 px-3 py-2 bg-red-600 hover:bg-white" onClick={() => handleInput('2')}>
                                    <LucideArrowDown />
                                </button>
                                <button className="border border-black w-12 px-3 py-2 bg-red-600 hover:bg-white" onClick={() => handleInput('3')}>
                                    <LucideArrowDownRight />
                                </button>
                            </div>
                        </div>
                        
                        <div>
                            <div className="grid grid-rows-3 grid-cols-3 h-32">                  
                                <div className="col-span-3 row-span-1 flex">
                                    <div className="w-11"></div>

                                    <button className="border border-black w-11 bg-red-600 hover:bg-white" onClick={() => handleInput('HP')}>
                                        <p>HP</p>
                                    </button>

                                    <div className="w-11"></div>
                                </div>

                                <div className="col-span-3 row-span-1 flex">           
                                    <button className="border border-black w-11 bg-red-600 hover:bg-white" onClick={() => handleInput('P')}>
                                        <p>P</p>
                                    </button>

                                    <div className="w-11"></div>

                                    <button className="border border-black w-11 bg-red-600 hover:bg-white" onClick={() => handleInput('HK')}>
                                            <p>HK</p>
                                    </button>
                                </div>

                                <div className="col-span-3 row-span-1 flex">
                                    <div className="w-11"></div>                        
                                    
                                        <button className="border border-black w-11 bg-red-600 hover:bg-white" onClick={() => handleInput('K')}>
                                            <p>K</p>
                                        </button>
                                    
                                    <div className="w-11"></div>
                                </div>                    
                            </div>
                        </div>
                    </div>

                    <div className="gap-5 pt-10 flex">
                        <div>
                            <button className="px-3 py-2 bg-yellow-500 rounded" onClick={clearInput}>LIMPAR</button>
                        </div>
                        <div>
                            <button className="px-3 py-2 bg-green-500 rounded" onClick={confirmInputs}>CONFIRMAR</button>
                        </div>
                    </div>
                </div>

                <div className="space-y-2">
                    <div>
                        <p className="text-sm w-80">Digite uma sequencia de inputs para descobrir um golpe</p>
                        <p className="underline pb-1.5">Inputs selecionados:</p>
                        <input className="bg-gray-600 border px-2 py-1 text-white pointer-events-none" type="text" value={inputs} readOnly onChange={(e) => setInputs(e.target.value)}/>
                    </div>

                    <div>
                        <p className="text-xl">{message}</p>
                        <img className="w-32 h-32" src={imgGolpe} />
                    </div>
                </div>
            </div>
        </div>
    )
}