import Dropdown from "../Dropdown/Dropdown";
import SettingsIcon from "@/assets/icons/SettingsIcon";
import ArrowDownIcon from "@/assets/icons/ArrowDownIcon";

const requestsList = ['Request-1', 'Request-2', 'Request-3', 'Request-4'];
const settingsList = ['Setting-1', 'Setting-2', 'Setting-3', 'Setting-4'];
const navigationList = ['Personal', 'Job', 'Time Off', 'Emergency', 'Documents', 'Notes', 'Benefits', 'Training', 'Assets', 'More'];

interface Props {
	name:string;
	src: string;
}
const Info = (props: Props) => {
	const {name, src} = props;
	return (
		<section className="h-46 w-screen bg-[#DAE6F2]">
			<div className="flex h-full max-w-8xl w-full mx-auto px-16">
			  <div className="h-full w-1/5 flex items-end justify-center">
			    <div className='max-h-37.5 max-w-37.5 h-full w-full rounded-full overflow-hidden mr-5'>
					  <picture>
						  <img
                src={src}
                width={150}
                height={150}
                alt="photo"
              />
					  </picture>
				  </div>	
			  </div>
			  <div className="flex flex-col grow">
				  <div className="flex grow justify-between text-black items-center mt-8">
						<div className="text-2xl font-semibold">{name}</div>
						<div className="flex gap-4 mr-2">
						  <div className="text-sm font-normal w-40 h-8"><Dropdown title="Request a Change" list={requestsList} /></div>
						  <div className="text-sm font-normal w-14 h-8"><Dropdown title={<SettingsIcon className="w-4 h-4"/>} list={settingsList} /></div>
						</div>
					</div>
				  <div className="h-12 w-full">
						<ul className="flex h-full w-full justify-between text-sm font-medium text-black pr-2">
						  {navigationList.map((item, index) => {
								if(index === 2) {
									return <li key={crypto.randomUUID()} className="flex justify-center items-center h-full w-22.5 rounded-t-lg hover:cursor-pointer bg-[#FCFCFE]">{item}</li>
								} else if(index === 9) {
									return <li key={crypto.randomUUID()} className="flex justify-center items-center h-full w-22.5 rounded-t-lg hover:cursor-pointer gap-2 ">{item}<ArrowDownIcon className="w-4 h-4"/></li>
								} else {
									return <li key={crypto.randomUUID()} className="flex justify-center items-center h-full w-22.5 rounded-t-lg hover:cursor-pointer">{item}</li>
								}
							})}
						</ul>
					</div>
			  </div>
			</div>
		</section>
	)
}

export default Info;