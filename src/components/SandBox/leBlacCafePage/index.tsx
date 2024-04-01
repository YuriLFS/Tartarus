import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"; 
// import { Button } from "@/components/ui/button";

export const LeBlancCafePage = () => {

	const [audioVolume, setAudioVolume] = useState(0.3);
	// const [currentTime, setCurrentTime] = useState(new Date())

    useEffect(() => {
        const audioElement = document.getElementById('audioElement') as HTMLAudioElement; // Type assertion
        if (audioElement) {
            audioElement.volume = audioVolume;
        }

		// const intervalId = setInterval(() => {
        //     setCurrentTime(new Date());
        // }, 1000);

        // // Limpa o intervalo quando o componente é desmontado
        // return () => clearInterval(intervalId);
    }, [audioVolume]);


    return (
        <div className="relative font-milker">
            <img className="h-screen w-full object-cover top-0 left-0 z-0" src="/src/assets/leblanc.jpg" />
            <div className="absolute top-0 left-0 z-50 w-full h-full text-white">
				{/* <div className="p-6">
					<h1 className="text-4xl">Bem Vindo ao Le Blanc</h1>
					<h2 className="text-2xl">entre e acomode-se em nosso café</h2>
				</div> */}
				<div className="absolute top-[35Vh] left-[21Vh]">
					<Link to={"/"}>
						<button>
							Home
						</button>
					</Link>
				</div>
				{/* <div className="absolute top-[23Vh] right-[50Vh]">					
					{currentTime.toLocaleTimeString()}						
				</div> */}
				<div className="absolute bottom-[42Vh] left-[12Vh]">
					<button>
						Ideias
					</button>
				</div>
				<div className="absolute right-[49Vh] top-[40Vh] border p-5">
					<button>
						Cash in
					</button>
				</div>
            </div>
			<audio id="audioElement" className="hidden" autoPlay loop>
                <source src="/src/assets/leBlancTheme.mpeg" type="audio/mpeg" />
            </audio>
        </div>
    );
}
