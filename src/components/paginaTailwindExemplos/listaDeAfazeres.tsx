import { useState } from "react"

export const ListaDeAfazeres = () => {
    
    const [afazeres, setAfazeres] = useState<string[]>([]); //Lista de Afazeres que inicialmente começa vazia
    const [novoAfazer, setNovoAfazer] = useState(""); //Novo afazer a aser adicionado na lista

    //Adiciona um novo afazer a antiga lista de afazeres
    const adicionarAfazer = () => {
        if (novoAfazer.trim() !== "") {
            setAfazeres([...afazeres, novoAfazer]);
            setNovoAfazer("");
        }
    };

    return(
        <div className="h-80">
            <h2 className="underline pb-2">Lista de Afazeres:</h2>
            <div className="space-x-2">
                {/* Input + botão para adicionar novo afazer */}
                <input 
                    type="text"  
                    className="bg-transparent border border-dashed rounded border-black w-80 h-12 pl-1.5"
                    value={novoAfazer}
                    onChange={(e) => setNovoAfazer(e.target.value)}
                    placeholder="Adicionar novo afazer"
                />
                <button className="bg-green-500 px-2 py-3 rounded border border-black" onClick={adicionarAfazer}>Adicionar</button>
            </div>
            <ul className="w-[440px] h-60 p-2 overflow-auto">{/* Exibição da lista de afazeres */}
                {afazeres.map((afazer, index) => (
                    <li key={index}>- {afazer}</li>
                ))}
            </ul>
        </div>
    )
}