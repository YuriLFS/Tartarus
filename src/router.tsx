import { RouteObject,createBrowserRouter } from "react-router-dom"
import { Index } from "./components/paginaPrincipal"
import { SitesParaEstudosPage } from "./components/paginaSitesParaEstudo"
import { SandBox } from "./components/SandBox/sandBox"
import { LeBlancCafePage } from "./components/SandBox/leBlacCafePage"
import { FormularioPage } from "./components/paginaFormulario"
import { TailwindExemplos } from "./components/paginaTailwindExemplos"

const routes: RouteObject[] = [
	{
		path: "/",
		element: <Index />
	},
	{
		path: "/sites-para-estudo",
		element: <SitesParaEstudosPage />
	},
	{
		path: "/welcomeToTheLeBlancCafe",
		element: <LeBlancCafePage />
	},
	{
		path: "/formulario-teste",
		element: <FormularioPage />
	},
	{
		path: "tailwind-exemplos",
		element: <TailwindExemplos />
	},
	{
		path: "/sand-box",
		element: <SandBox />
	}
]

export const router = createBrowserRouter(routes)