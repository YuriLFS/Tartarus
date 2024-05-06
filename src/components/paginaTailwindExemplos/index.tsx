import { LayoutPrincipal } from "@/tools/layoutPrincipal/layoutPrincipal"
import { Calculadora } from "./calculadora"
import { ListaDeAfazeres } from "./listaDeAfazeres"
import { InputFG } from "./inputsFG"

export const TailwindExemplos = () => {
    return(
        <LayoutPrincipal>
            
            <div className="flex space-x-10">
                <div className="px-8 space-y-10">
                    <Calculadora />

                    <ListaDeAfazeres />
                </div>

                <div>
                    <InputFG />

                </div>
            </div>
        
            <div className="fixed bottom-16 right-0 mr-4 mb-4">
                <span className="text-white">
                    <p>Para mais componentes prontos:</p>
                    <a href="https://tailwindcomponents.com/" className="underline flex justify-end hover:text-black">Tailwind Components</a>
                    <a href="https://tailwindui.com/" className="underline flex justify-end hover:text-black">Tailwind UI</a>
                </span>
            </div>
        </LayoutPrincipal>
    )
}
