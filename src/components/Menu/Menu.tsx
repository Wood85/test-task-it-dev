const Menu = () => {
	return (
		<nav className="flex items-end w-130.75 h-full">
			<ul className="flex w-full h-14 justify-between text-black text-lg">
				<li className="px-4 flex items-center h-full hover:cursor-pointer rounded-t-lg">Home</li>
				<li className="px-4 flex items-center h-full hover:cursor-pointer rounded-t-lg bg-[#DAE6F2]">My Info</li>
				<li className="px-4 flex items-center h-full hover:cursor-pointer rounded-t-lg">People</li>
				<li className="px-4 flex items-center h-full hover:cursor-pointer rounded-t-lg">Hiring</li>
				<li className="px-4 flex items-center h-full hover:cursor-pointer rounded-t-lg">Reports</li>
				<li className="px-4 flex items-center h-full hover:cursor-pointer rounded-t-lg">Files</li>
			</ul>
		</nav>
	)
}

export default Menu;