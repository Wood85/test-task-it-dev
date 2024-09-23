import PhoneIcon from "@/assets/icons/PhoneIcon";
import MailIcon from "@/assets/icons/MailIcon";
import LinkedInIcon from "@/assets/icons/LinkedInIcon";
import FacebookIcon from "@/assets/icons/FacebookIcon";
import TwitterIcon from "@/assets/icons/TwitterIcon";
import HashIcon from "@/assets/icons/HashIcon";
import ClockIcon from "@/assets/icons/ClockIcon";
import OperationsIcon from "@/assets/icons/OperationsIcon";
import WorldIcon from "@/assets/icons/WorldIcon";
import LocationIcon from "@/assets/icons/LocationIcon";
import PersonIcon from "@/assets/icons/PersonIcon";
import Link from "next/link";

const Contacts = () => {
	return (
		<div className="flex flex-col w-full gap-4 text-black text-sm font-medium">
			<div className="w-full bg-[#FCFCFE] rounded-2xl pl-6 max-[1300px]:pl-2 pr-1 py-[26px] flex flex-col gap-[13px]">
				<div>
				  <Link className="flex gap-[10px]" href="tel:07911654321">
					  <PhoneIcon />
					  07911 654321
				  </Link>
				</div>
				<div>
				  <Link className="flex items-center gap-[10px]" href="mailto:avd.yana@videorollnet">
					  <MailIcon className="max-[1350px]:hidden"/>
					  avd.yana@videorollnet
					</Link>	
				</div>
				<div className="flex items-center gap-4">
					<Link href="https://www.linkedin.com/">
					  <LinkedInIcon />
					</Link>
					<Link href="https://www.facebook.com/">
					  <FacebookIcon />
					</Link>
					<Link href="https://x.com/">
					  <TwitterIcon />
					</Link>
				</div>
			</div>
			<div className="w-full bg-[#FCFCFE] rounded-2xl pl-6 max-[1300px]:pl-2 pr-1 py-[20px] flex flex-col gap-[13px]">
				<h4>Hire Date</h4>
				<div className="flex flex-col gap-[7px]">
				  <p>Sep. 3,2020</p>
				  <p>3y - 9m - 20d</p>
				</div>
			</div>
			<div className="w-full bg-[#FCFCFE] rounded-2xl pl-6 max-[1300px]:pl-2 pr-1 py-[20px] flex flex-col gap-1.5">
				<div className="flex items-center gap-3"><HashIcon />5</div>
				<div className="flex items-center gap-2"><ClockIcon />Full-Time</div>
				<div className="flex items-center gap-2"><OperationsIcon />Operations</div>
				<div className="flex items-center gap-2"><WorldIcon />Europe</div>
				<div className="flex items-center gap-2"><LocationIcon />London, UK</div>
			</div>
			<div className="w-full bg-[#FCFCFE] rounded-2xl pl-6 max-[1300px]:pl-2 pr-1 py-[24px] flex flex-col gap-[13px]">
			<h4>Direct Reports</h4>
				<div className="flex flex-col gap-[5px]">
				  <div className="flex items-center gap-2"><PersonIcon />Shane</div>
					<div className="flex items-center gap-2"><PersonIcon />Nathan</div>
					<div className="flex items-center gap-2"><PersonIcon />Mitchell</div>
					<div className="flex items-center gap-2"><PersonIcon />Philip</div>
					<div className="flex items-center gap-2"><OperationsIcon />4 More...</div>
				</div>
			</div>
		</div>
	)
}

export default Contacts;