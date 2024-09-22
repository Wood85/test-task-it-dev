import TimeOffIcon from "@/assets/icons/TimeOffIcon";
import CrossIcon from "@/assets/icons/CrossIcon";
import MountainsIcon from "@/assets/icons/MountainsIcon";
import ClockIcon from "@/assets/icons/ClockIcon";
import PigIcon from "@/assets/icons/PigIcon";
import HistoryIcon from "@/assets/icons/HistoryIcon";
import Dropdown from "../Dropdown/Dropdown";
import SelectInput from "../SelectInput/SelectInput";
import TableInfo from "../TableInfo/TableInfo";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const Content = () => {
	return (
	  <div className="flex flex-col w-full bg-[#FCFCFE] pb-12">
			<div className="w-full px-4">
				<div className="border-b-2 border-gray pt-6 flex justify-between">
					<div className="flex items-center py-3	gap-2"><TimeOffIcon /><h2 className="text-dark-blue text-xl font-medium">Time Off</h2></div>
					<div className="flex items-center py-3 gap-[30px]">
						<div className="text-black text-sm font-medium pt-2	">Accrual Level Start Date<span className="pl-1 text-blue">03/09-2020</span></div>
						<div>
						  <Popover>
                <PopoverTrigger className="w-37.5 h-8 text-black text-sm font-medium rounded-lg border border-black flex items-center justify-center">Add Time Off Policy</PopoverTrigger>
                <PopoverContent>Add Time Off Policy</PopoverContent>
              </Popover>
						</div>
					</div>
				</div>
				<div className="border-b-2 border-gray pt-6 flex flex-col gap-5">
					<div className="flex gap-12 justify-center">
						<div className="flex flex-col items-center gap-1">
						  <div className="flex flex-col items-center justify-center w-[264px] h-[138px] bg-[#F0F3F8] rounded-lg font-semibold">
								<div className="text-black text-xl pb-0.5">Sick</div>
								<div className="flex items-center text-dark text-3xl gap-2 pb-0.5"><CrossIcon />3</div>
								<div className="text-black text-sm">Days Available</div>
								<div className="text-gray text-sm">1 dey scheduled</div>
		          </div>
							<div className="text-gray text-sm">Sick Full-Time</div>
						</div>
						<div className="flex flex-col items-center gap-1">
						  <div className="flex flex-col items-center justify-center w-[264px] h-[138px] bg-[#F0F3F8] rounded-lg font-semibold">
								<div className="text-black text-xl pb-0.5">Annual Leave </div>
								<div className="flex items-center text-dark text-3xl gap-2 pb-0.5"><MountainsIcon />10.3</div>
								<div className="text-black text-sm">Days Available</div>
		          </div>
							<div className="text-gray text-sm">Holiday Full-Time</div>
						</div>
						<div className="flex flex-col items-center gap-1">
						  <div className="flex flex-col items-center justify-center w-[264px] h-[138px] bg-[#F0F3F8] rounded-lg font-semibold">
								<div className="text-black text-xl pb-0.5">Comp/in Lieu Time </div>
								<div className="flex items-center text-dark text-3xl gap-2 pb-0.5"><TimeOffIcon className="w-9 h-8" />0</div>
								<div className="text-black text-sm">{'Human Used(YTD)'}</div>
		          </div>
							<div className="text-gray text-sm">Comp/in Lieu Time Flexible Policy</div> 
						</div>
					</div>
					<div className="flex text-dark-blue text-sm font-medium gap-1 pb-4"><ClockIcon />Upcoming Time Off</div>
				</div>
				<div className="border-b-2 border-gray flex items-center gap-3 pt-6 pb-5">
				  <CrossIcon />
					<div className="flex flex-col text-black text-sm font-medium">
						<div>Jan 27</div>
						<div className="flex items-center gap-1">
							<div className="w-2 h-2 bg-black rounded-full"></div>
							1 day of Sick
							</div>
					</div>
				</div>
				<div className="border-b-2 border-gray flex items-center gap-3 pt-6 pb-5">
				  <PigIcon />
					<div className="flex flex-col text-black text-sm font-medium">
						<div>Jul 4</div>
						<div>Independence Day</div>
					</div>
				</div>
				<div className="flex flex-col pt-[22px] w-full">
					<div className="flex items-center gap-2 text-dark-blue text-sm font-medium mb-4"><HistoryIcon />History</div>
					<div className="flex justify-between items-center mb-4">
					  <div className="flex items-center gap-4">
							<div className="w-[256px] h-[33px] text-black">
							  <SelectInput title="Sick" list={['item-1', 'item-2']} />
							</div>
							<div className="w-[95px] h-[33px] text-black">
							  <SelectInput title="All" list={['item-1', 'item-2']} />
							</div>
						</div>
						<div className="w-[175px] h-[33px] text-black">
						<Dropdown title="Balance History" list={['item-1', 'item-2']} />
						</div>
					</div> 
					<div className="w-full">
						<TableInfo />
					</div>
				</div> 
			</div>
		</div>
	)
}

export default Content;