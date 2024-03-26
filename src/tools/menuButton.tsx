interface MenuButtonProps{
	label: string,
	handleButton?: () => void,
}

export const MenuButton = ({label,handleButton}: MenuButtonProps) => {
	return(
		<div className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] hover:drop-shadow-[0_1.2px_1.2px_rgba(255,0,0,1)] hover:text-black"> 
			<button onClick={handleButton}>{label}</button>
		</div>
	)
}