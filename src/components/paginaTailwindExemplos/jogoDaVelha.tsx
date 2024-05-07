import { useState } from "react"

export const JogoDaVelha = () => {
    
    const [board, setBoard] = useState<string[]>(Array(9).fill(''));
    const [player, setPlayer] = useState<'X' | 'O'>('X')

    const handleClick = (index: number) => {
        if (!board[index]) {
            const newBoard = [...board];
            newBoard[index] = player;
            setBoard(newBoard);
            setPlayer(player === 'X' ? 'O' : 'X');
        }
    }

    const handleReiniciar = () => {
        setBoard(Array(9).fill(''))
        setPlayer('X')
    }
    
    return(
        <div className="space-y-5">
            <h2 className="underline text-">Jogo da Velha:</h2>
            <div className="flex items-center">
                <div>
                    <div className="grid grid-cols-3 gap-4">
                        {board.map((cell: string, index: number) => (
                            <div
                                key={index}
                                className="w-16 h-16 border border-gray-400 flex justify-center items-center text-3xl cursor-pointer"
                                onClick={() => handleClick(index)}
                            >
                                {cell}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="pl-10">
                    <button className="border border-black rounded p-2 bg-yellow-500" onClick={handleReiniciar}>Reiniciar</button>
                </div>
            </div>
        </div>
    )
}