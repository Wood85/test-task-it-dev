import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ReactElement } from "react";

interface Props {
	title: string | ReactElement;
	list: string[];
}

const SelectInput = (props: Props) => {
	const { title, list } = props;

	return (
		<Select>
      <SelectTrigger className="flex items-center w-full h-full border border-[#7C96B1] rounded-lg justify-between outline-0 px-2">
        <SelectValue placeholder={title} />
      </SelectTrigger>
      <SelectContent>
			  {list.map((item) => <SelectItem key={crypto.randomUUID()} value={item}>{item}</SelectItem>)}
      </SelectContent>
    </Select>
	)
}

export default SelectInput;