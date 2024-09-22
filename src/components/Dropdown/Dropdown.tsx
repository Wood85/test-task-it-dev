import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ArrowDownIcon from "@/assets/icons/ArrowDownIcon";
import { ReactElement } from "react";

interface Props {
	title: string | ReactElement;
	list: string[];
}

const Dropdown = (props: Props) => {
	const { title, list } = props;

	return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center w-full h-full border border-[#7C96B1] rounded-lg justify-between outline-0 pl-2">
			  {title}
				<div className="flex items-center px-2 h-full bg-light-blue rounded-r-lg">
				    <ArrowDownIcon/>
				  </div>
			</DropdownMenuTrigger>
      <DropdownMenuContent>
				{list.map((item) => <DropdownMenuItem key={crypto.randomUUID()}>{item}</DropdownMenuItem>)}
			</DropdownMenuContent>
    </DropdownMenu>
	)
}

export default Dropdown;
