import { Link } from 'react-router-dom';
import { LayoutPrincipal } from '../../tools/layoutPrincipal/layoutPrincipal';

export const Index = () => {

	return (
		
		<LayoutPrincipal>
				<div className="pt-10 pl-5">
					<h2 className="text-white italic text-4xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">Bem-vindo ao Tártaro,</h2>
					<h2 className="text-white italic text-4xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">um local para testes e estudos de web dev.</h2>

					<div className="pt-5 space-y-2 text-white font-medium">
						<h2 className="text-white italic text-lg underline drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">Alguns sites para refências de estudos:</h2>
						<div className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
							<Link to="https://www.w3schools.com/" target="_blank">
								W3schools
							</Link>
						</div>

						<div className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
							<Link to="https://tailwindcss.com/" target="_blank">
								Tail Wind Css
							</Link>
						</div>

						<div className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
							<Link to="https://react-hook-form.com/" target="_blank">
								React Hook Form
							</Link>
						</div>

						<div className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
							<Link to="https://reactrouter.com/en/main" target="_blank">
								React Router
							</Link>
						</div>
					</div>
				</div>
		</LayoutPrincipal>
			
	);
  };
  