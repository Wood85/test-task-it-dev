import { useState } from "react";

const Menu = () => {
	const [isOpen, setIsOpen] = useState(false);
	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};


	return (
		<>
		  <nav className={`flex items-end w-130.75 max-[1300px]:w-[435px] max-[1170px]:w-[360px] h-full max-[1100px]:absolute max-[1100px]:bg-light-blue max-[1100px]:top-[50px] max-[1100px]:left-0 max-[1100px]:w-screen max-[1100px]:h-[calc(100dvh-50px)] ${!isOpen && 'max-[1100px]:hidden'}`}>
			  <ul className={`flex w-full h-14 justify-between text-black text-lg max-[1100px]:flex-col max-[1100px]:py-0 max-[1100px]:absolute max-[1100px]:top-[10px] max-[1100px]:left-0 max-[1100px]:h-[300px] max-[1100px]:p-[30px]`}>
				  <li className="max-[1300px]:px-2 max-[1170px]:px-[2px] px-4 flex items-center h-full cursor-pointer rounded-t-lg">Home</li>
				  <li className="max-[1300px]:px-2 max-[1170px]:px-[2px] px-4 flex items-center h-full cursor-pointer rounded-t-lg bg-[#DAE6F2]">My Info</li>
				  <li className="max-[1300px]:px-2 max-[1170px]:px-[2px] px-4 flex items-center h-full cursor-pointer rounded-t-lg">People</li>
				  <li className="max-[1300px]:px-2 max-[1170px]:px-[2px] px-4 flex items-center h-full cursor-pointer rounded-t-lg">Hiring</li>
				  <li className="max-[1300px]:px-2 max-[1170px]:px-[2px] px-4 flex items-center h-full cursor-pointer rounded-t-lg">Reports</li>
				  <li className="max-[1300px]:px-2 max-[1170px]:px-[2px] px-4 flex items-center h-full cursor-pointer rounded-t-lg">Files</li>
			  </ul>
		  </nav>
			<div className="w-4 h-3 relative cursor-pointer hidden max-[1100px]:block" onClick={toggleMenu}>
				<div className={`duration-300 absolute top-0 h-[2px] w-full bg-dark ${isOpen && 'top-[48%] -rotate-45'}`}></div>
				<div className={`duration-300 absolute top-[45%] h-[2px] w-full bg-dark ${isOpen && 'max-[1100px]:hidden'}`}></div>
				<div className={`duration-300 absolute bottom-0 h-[2px] w-full bg-dark ${isOpen && 'top-[48%] rotate-45'}`}></div>
			</div>
		</>
		

	)
}

export default Menu;