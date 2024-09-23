import Dropdown from "../Dropdown/Dropdown";
import SettingsIcon from "@/assets/icons/SettingsIcon";
import ArrowDownIcon from "@/assets/icons/ArrowDownIcon";
import PointsIcon from "@/assets/icons/PointsIcon";

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
		<section className="h-46 w-screen bg-[#DAE6F2] max-[860px]:h-[157px]">
			<div className="flex h-full max-w-8xl w-full mx-auto px-16 max-[1024px]:px-0">
			  <div className="h-full w-1/5 flex items-end justify-center max-[1210px]:hidden">
			    <div className='max-h-37.5 max-w-37.5 h-full w-full rounded-full overflow-hidden mr-5 z-10 max-[1210px]:hidden'>
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
				  <div className="flex grow justify-between text-black items-center mt-8 max-[1024px]:px-16 max-[860px]:w-[760px] max-[720px]:w-[700px] max-[680px]:mt-0 max-[650px]:px-3 max-[650px]:w-[600px] max-[600px]:w-[500px] max-[500px]:w-[450px] max-[450px]:w-[400px] max-[400px]:w-[350px]">
						<div className="flex items-center text-2xl font-semibold max-[720px]:text-xl">
						  <div className='hidden max-h-37.5 max-w-37.5 h-full w-full rounded-full overflow-hidden mr-5 z-10 max-[1210px]:block max-[1210px]:ml-3'>
					      <picture>
						      <img
                    src={src}
								    width={60}
								    height={60}
                    alt="photo"
                  />
					      </picture>
				      </div>	
						  {name}
						</div>
						<div className="flex gap-4 mr-2">
						  <div className="text-sm font-normal w-40 h-8 max-[680px]:hidden"><Dropdown title="Request a Change" list={requestsList} /></div>
						  <div className="text-sm font-normal w-14 h-8 max-[680px]:hidden"><Dropdown title={<SettingsIcon className="w-4 h-4"/>} list={settingsList} /></div>
							<div className="hidden max-[680px]:block max-[680px]:mb-11"><PointsIcon /></div>
						</div>
					</div>
				  <div className="h-12 w-full max-[860px]:-ml-[50px]">
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