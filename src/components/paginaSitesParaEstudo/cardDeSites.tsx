import { Link } from "react-router-dom"

interface CardDeSitesProps {
	link: string,
	icone?: JSX.Element,
	tituloSite: string,
	descricaoSite?: string
	bgColor: string
}

export const CardDeSites = ({descricaoSite, icone, link, tituloSite, bgColor}: CardDeSitesProps) => {
	return(
		<div className={`border border-black rounded ${bgColor} h-96 py-3 space-y-4 text-center`}>	
			<div className="justify-center flex">
				<Link to={link} target="_blank">
					<button className="flex-col flex items-center duration-200 hover:text-black">
						{icone}
						<p className="text-xl">{tituloSite}</p>
					</button>
				</Link>
			</div>
			<p className="text-base">{descricaoSite}</p>
		</div>
	)
}