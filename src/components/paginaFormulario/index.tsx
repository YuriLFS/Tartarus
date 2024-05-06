import { LayoutPrincipal } from "@/tools/layoutPrincipal/layoutPrincipal"
import { SchemaForm } from "@/validation/schemaForm";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
// import { useForm } from "react-hook-form"

type FormData = {
	example1: string;
	example2: string;
	example3: string;
	example4: string;
	example5: string;
	example6: string;
	example7: string;
	select1: string;
	number1: number;
	pais: string;
	estado: string;
}

export const FormularioPage = () => {
	// a ideia era usar o Forms do Shadcn-ui,mas não entendi com funciona então decidi praticar com o parão mesmo

	const { register, handleSubmit, control, watch, formState: { errors } } = useForm<FormData>({
		resolver: yupResolver(SchemaForm),		
		defaultValues: {
			example1: "",
			example2: "",
			example3: "",
			example4: "",
			example5: "",
			example6: "",
			example7: "",
			select1: "",
			number1: 1,
			pais: "Brasil",
			estado: "Rio de Janeiro"
		}
	});
  	const onSubmit = (data: FormData) => console.log(data);

  	console.log(watch("example2")); // watch input value by passing the name of it

	return(
		<LayoutPrincipal>
			<div className="flex justify-center pt-20">
				<div className="space-y-6">
					<h1 className="text-lg underline text-center">Alguns exemplos e usos de inputs para um Forms</h1>
					<form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
						<div className="grid grid-cols-2 gap-44">	
							<div className="space-y-4">
								{/* Input com validação feita diretamente nele */}
								<div>
									{/* register your input into the hook by invoking the "register" function */}
									<h2>Input 1</h2>
									<input type="text" {...register("example1", {required: true})}
									aria-invalid={errors.example1 ? "true" : "false"}
									/>
									{errors.example1?.type === "required" && <p role="alert">Example 1 Required</p>}
								</div>
								
								{/* Input com validação feita diretamente nele/2 */}
								<div>
									{/* include validation with required or other standard HTML validation rules */}
									<h2>Input 2</h2>
									<input type="text" {...register("example2", { required: true })} />
									{/* errors will return when field validation fails  */}
									{errors.example2 && <span>Campo obrigatório</span>}
								</div>

								{/* Input com validação feita diretamente de forma externa, pelo Yup */}
								<div>
									<h2>Input 3</h2>
									<input type="text" {...register("example3", {required: true})}/>
									{errors.example3 && <span>Campo obrigatório</span>}
								</div>

								<div>
									<h3>Select 1</h3>
									<select {...register("select1")}>
										<option value="opção1">opção 1</option>
										<option value="opção2">opção 2</option>
										<option value="opção3">opção 3</option>
									</select>
								</div>

								<div>
									<h2>Input 4</h2>
									<input type="number" min={0} {...register("number1", {required: true})} />
								</div>
							</div>

							<div className="space-y-4">
								<div>
									<h2>CheckBox 1</h2>
									<Controller
										name="example4"
										control={control}
										rules={{ required:true }}
										render={({ field }) => <input type="checkbox" {...field}/>}
									/>
								</div>

								<div>
									<h2>Input 5</h2>
									<Controller 
										name="example5"
										control={control}
										rules={{ required:true }}
										render={({ field }) => <input type="color" {...field}/>}
									/>
								</div>

								<div>
									<h2>Input 6</h2>
									<Controller 
										name="example6"
										control={control}
										rules={{ required:true }}
										render={({ field }) => <input type="date" {...field}/>}
									/>
								</div>

								<div>
									<h2>Input 7.1</h2>
									<Controller 
										name="example7"
										control={control}
										rules={{ required:true }}
										render={({ field }) => <input type="password" {...field}/>}
									/>
								</div>

								<div>
									<h2>Input 7.2</h2>
									<Controller 
										name="example7"
										control={control}
										rules={{ required:true }}
										render={({ field }) => <input type="tel" {...field}/>}
									/>
								</div>
							
								<input type="submit" />
							</div>
						</div>
					</form>
				</div>
			</div>
		</LayoutPrincipal>

	)
}