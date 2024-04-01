import { LayoutPrincipal } from "@/tools/layoutPrincipal/layoutPrincipal"
// import { useForm } from "react-hook-form"

export const FormularioPage = () => {
	// a ideia era usar o Forms do Shadcn-ui,mas não entendi com funciona então decidi praticar com o parão mesmo

	return(
		<LayoutPrincipal>
			<div className="flex justify-center">
				<form>
					<div>
						<p>Nome</p>
						<input type="text" placeholder="nome"/>
					</div>
					<div>
						<p>Idade</p>
						<input type="text" placeholder="idade"/>
					</div>
				</form>
			</div>
		</LayoutPrincipal>

	)
}