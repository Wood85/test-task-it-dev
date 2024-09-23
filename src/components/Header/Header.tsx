import { MouseEvent } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button"
import SettingsIcon from '@/assets/icons/SettingsIcon';
import QueryIcon from '@/assets/icons/QueryIcon';
import BellIcon from '@/assets/icons/BellIcon';
import { InputSearch } from '../InputSearch/InputSearch';
import Menu from '../Menu/Menu';

interface Props {
	src: string;
}

const Header = (props: Props) => {
	const {src} = props;

	const router = useRouter();

	const clickHandler = (event: MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
    localStorage.setItem('tokenData', '');
		router.replace('/');
	}

	return (
		<header className="h-21.5 w-screen bg-[#FCFCFE] max-[1100px]:h-[50px]">
			<div className="flex items-center justify-between max-w-8xl h-full mx-auto px-6 ">
				<div className="order-1 text-black text-xl font-semibold max-[1280px]:mr-2 max-md:mr-0">HarmonyHR</div>
				<div className='order-2 max-[1100px]:order-3 max-[1100px]:mr-4 max-[380px]:mr-5 h-full flex items-center'>
				  <Menu />
				</div>
				<div className='order-3 max-[1100px]:order-2 w-full max-w-99 max-[1280px]:px-[50px] max-md:px-[30px]'>
				  <InputSearch />
				</div>
				<div className='order-4 flex items-center justify-between h-9.5 w-44 mt-3 max-[1100px]:mt-0 max-md:w-20'>
				  <SettingsIcon className='hover:cursor-pointer max-[1100px]:w-4 max-md:hidden' />
				  <QueryIcon className='hover:cursor-pointer max-[1280px]:ml-[5px] max-[1100px]:w-4 max-md:hidden' />
				  <BellIcon className='hover:cursor-pointer max-[1280px]:ml-[5px] max-[1100px]:w-4 max-md:hidden' />
					<div className='h-9.5 w-9.5 rounded-full overflow-hidden max-[1280px]:ml-[5px]'>
					  <picture>
						  <img
                src={src}
                width={38}
                height={38}
                alt="photo"
              />
						</picture>
					</div>	
				</div>
				<Button 
				className='order-5 px-[2px] ml-1 border-0 h-12 mt-3 text-black hover:text-blue max-[1100px]:mt-0' 
				variant="outline" 
				onClick={clickHandler}>log<br/>out</Button>
			</div>
		</header>
	)
}

export default Header;