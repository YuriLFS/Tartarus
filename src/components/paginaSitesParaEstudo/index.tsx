import { W3SchoolIcon } from "@/tools/icons/w3schoolIcon"
import { LayoutPrincipal } from "@/tools/layoutPrincipal/layoutPrincipal"
import { TailWindCssIcon } from "@/tools/icons/tailWindCssIcon"
import { ReactHookFormIcon } from "../../tools/icons/reactHookFormIcon"
import { ReactRouterIcon } from "../../tools/icons/reactRouterIcon"
import { ShadcnIcon } from "../../tools/icons/shadcnIcon"
import { CardDeSites } from "./cardDeSites"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel"
import { ReactIcon } from "@/tools/icons/reactIcon"
import { ViteIcon } from "@/tools/icons/viteIcon"

export const SitesParaEstudosPage = () => {


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
			link: "https://react.dev/",
			icone: <ReactIcon />,
			tituloSite: "React",
			descricaoSite: "Ferramenta utilizada para facilitar a programação em JavaScrip ou TypeScript",
			bgColor: "bg-blue-700",

		},
		{
			link: "",
			icone: <ViteIcon />,
			tituloSite: "Vite",
			descricaoSite:"Ferramenta utilizada para facilitar a programação em JavaScrip ou TypeScript",
			bgColor: "bg-purple-500",
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
		<LayoutPrincipal>
			<h2 className="text-3xl text-white pt-8 pb-3 pl-4">Sites utilizados até então para estudos:</h2>
							
			<div className="flex justify-center items-center pt-5 w-full text-white text-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] gap-10 text-5xl ">	
				<Carousel className="max-w-7xl">
					<CarouselContent className="-ml-1">
						{sites.map((site, index) => (
						<CarouselItem key={index} className="pl-1 lg:basis-1/5">
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

		</LayoutPrincipal>
	)
}