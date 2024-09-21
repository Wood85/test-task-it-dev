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
	return (
		<header className="h-21.5 w-screen bg-[#FCFCFE]">
			<div className="flex items-center justify-between max-w-8xl h-full mx-auto px-6 ">
				<div className="text-black text-xl font-semibold">HarmonyHR</div>
				<Menu />
				<InputSearch />
				<div className='flex items-center justify-between h-9.5 w-44 mt-3'>
				  <SettingsIcon className='hover:cursor-pointer' />
				  <QueryIcon className='hover:cursor-pointer' />
				  <BellIcon className='hover:cursor-pointer' />
					<div className='h-9.5 w-9.5 rounded-full overflow-hidden'>
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
			</div>
		</header>
	)
}

export default Header;