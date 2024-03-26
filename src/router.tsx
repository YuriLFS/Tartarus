import { RouteObject,createBrowserRouter } from "react-router-dom"
import { Index } from "./components/paginaPrincipal"
import { SitesParaEstudosPage } from "./components/paginaSitesParaEstudo"
import { SandBox } from "./components/SandBox/sandBox"

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
		path: "/sand-box",
		element: <SandBox />
	}
]

export const router = createBrowserRouter(routes)