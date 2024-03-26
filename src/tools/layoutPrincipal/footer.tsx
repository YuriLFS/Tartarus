import { Link } from "react-router-dom"
import { GitHutIcon } from "../icons/gitHubIcon"

export const Footer = () => {
	return(
		<div className="bg-blue-600 shadow-lg bottom-0 fixed w-full h-16">
			<div className="flex justify-between px-8 pt-5 font-medium text-white">
				<div>
					<button>Version 0.1</button>
				</div>
				<div className="flex gap-4">
					<Link to={"https://github.com/YuriLFS"} target="_blank">
						<button className="text-3xl">
							<GitHutIcon />
						</button>
					</Link>
				</div>
			</div>
		</div>
	)
}