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
      <DropdownMenuTrigger className="flex items-center w-full h-full border border-[#7C96B1] rounded-lg justify-around outline-0">
			{title}
				<ArrowDownIcon/>
			</DropdownMenuTrigger>
      <DropdownMenuContent>
				{list.map((item) => <DropdownMenuItem key={crypto.randomUUID()}>{item}</DropdownMenuItem>)}
			</DropdownMenuContent>
    </DropdownMenu>
	)
}

export default Dropdown;
