import { useState } from "react"

export const Calculadora = () => {
    
    const [input, setInput] = useState<string>('')

    // Adiciona um novo botão do Clicado ao valor atual
    const handleInput = (value: string) => {
        setInput(input + value)
    }

    // Colocar o valor para vazio novamente (vazio != 0)
    const clearInput = () => {
        setInput('')
    }

    // Quando o input "=" é clicado utiliza a função eval no input caso tenha algum valor,caso não tenha mostrará "Error"
    const calculateResult = () => {
        try{
            const result = eval(input);
            setInput(result.toString());
        } catch (error) {
            setInput('Error');
        }
    }
    
    return(
        <div className="w-80">
            <h2 className="underline pb-2">Calculadora:</h2>
            <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="bg-green-700 w-56 border border-black text-center"
            />
            <br />
            <button className="border w-14 bg-white border-black hover:bg-black hover:text-white" onClick={() => handleInput('1')}>1</button>
            <button className="border w-14 bg-white border-black hover:bg-black hover:text-white" onClick={() => handleInput('2')}>2</button>
            <button className="border w-14 bg-white border-black hover:bg-black hover:text-white" onClick={() => handleInput('3')}>3</button>
            <button className="border w-14 bg-white border-black hover:bg-black hover:text-white" onClick={() => handleInput('+')}>+</button>
            <br />
            <button className="border w-14 bg-white border-black hover:bg-black hover:text-white" onClick={() => handleInput('4')}>4</button>
            <button className="border w-14 bg-white border-black hover:bg-black hover:text-white" onClick={() => handleInput('5')}>5</button>
            <button className="border w-14 bg-white border-black hover:bg-black hover:text-white" onClick={() => handleInput('6')}>6</button>
            <button className="border w-14 bg-white border-black hover:bg-black hover:text-white" onClick={() => handleInput('-')}>-</button>
            <br />
            <button className="border w-14 bg-white border-black hover:bg-black hover:text-white" onClick={() => handleInput('7')}>7</button>
            <button className="border w-14 bg-white border-black hover:bg-black hover:text-white" onClick={() => handleInput('8')}>8</button>
            <button className="border w-14 bg-white border-black hover:bg-black hover:text-white" onClick={() => handleInput('9')}>9</button>
            <button className="border w-14 bg-white border-black hover:bg-black hover:text-white" onClick={() => handleInput('*')}>*</button>
            <br />
            <button className="border w-14 bg-white border-black hover:bg-black hover:text-white" onClick={() => handleInput('.')}>.</button>
            <button className="border w-14 bg-white border-black hover:bg-black hover:text-white" onClick={() => handleInput('0')}>0</button>
            <button className="border w-14 bg-white border-black hover:bg-black hover:text-white" onClick={clearInput}>C</button>
            <button className="border w-14 bg-white border-black hover:bg-black hover:text-white" onClick={() => handleInput('/')}>/</button>
            <br />
            <button className="border w-14 bg-white border-black hover:bg-black hover:text-white" onClick={calculateResult}>=</button>
        </div>
    )
}