/* eslint-disable no-mixed-spaces-and-tabs */
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel"
import { CardDeSites } from "../paginaSitesParaEstudo/cardDeSites"
import { W3SchoolIcon } from "@/tools/icons/w3schoolIcon"
import { TailWindCssIcon } from "@/tools/icons/tailWindCssIcon"
import { ReactHookFormIcon } from "@/tools/icons/reactHookFormIcon"
import { ReactRouterIcon } from "@/tools/icons/reactRouterIcon"
import { ShadcnIcon } from "@/tools/icons/shadcnIcon"

export const SandBox = () => {

	const sites = [
		{
		  link: "https://www.w3schools.com/",
		  icone: <W3SchoolIcon />,
		  tituloSite: "W3School",
		  descricaoSite: "Fundamentos de HTML, CSS, JAVASCRIPT, TSX e REACT",
		  bgColor: "bg-green-500"
		},
		{
		  link: "https://tailwindcss.com/",
		  icone: <TailWindCssIcon />,
		  tituloSite: "TailWindCss",
		  descricaoSite: "Ferramenta para assistência na construção do visual de uma página.",
		  bgColor: "bg-blue-500"
		},
		{
		  link: "https://react-hook-form.com/",
		  icone: <ReactHookFormIcon />,
		  tituloSite: "React Hook Forms",
		  descricaoSite: "Ferramenta para construção e manipulação de formulários.",
		  bgColor: "bg-pink-500"
		},
		{
		  link: "https://reactrouter.com/en/main",
		  icone: <ReactRouterIcon />,
		  tituloSite: "React Router Doom",
		  descricaoSite: "Ferramente para controlar e manipular rotas de um site.",
		  bgColor: "bg-red-600"
		},
		{
		  link: "https://tailwindcss.com/",
		  icone: <ShadcnIcon />,
		  tituloSite: "Shadcn/ui",
		  descricaoSite: "Ferramenta que fornece componentes que funcionam junto a o TailWindCSS.",
		  bgColor: "bg-gray-800"
		}
	  ];

	return(
		<div className="flex items-center justify-center">
			<Carousel className="w-full max-w-sm">
				<CarouselContent className="-ml-1">
					{sites.map((site, index) => (
					<CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/5">
						<div className="p-1">
							<CardDeSites
								link={site.link}
								icone={site.icone}
								tituloSite={site.tituloSite}
								descricaoSite={site.descricaoSite}
								bgColor={site.bgColor}
							/>
						</div>
					</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
	  	</div>
	)
}