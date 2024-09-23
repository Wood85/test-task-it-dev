import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import ArrowIcon from "@/assets/icons/ArrowIcon";

const days = [
  {
    date: "23/05/2024",
    description: "Accrual for 23/05/2024 to 20/11/2024",
    usedDays: "",
    earnedDays: "3.00",
		balance: "3.00",
  },
  {
    date: "23/05/2024",
    description: "Accrual for 23/05/2024 to 20/11/2024",
    usedDays: "-6",
    earnedDays: "",
		balance: "3.00",
  },
	{
    date: "23/05/2024",
    description: "Accrual for 23/05/2024 to 20/11/2024",
    usedDays: "",
    earnedDays: "3.00",
		balance: "3.00",
  },
	{
    date: "23/05/2024",
    description: "Accrual for 23/05/2024 to 20/11/2024",
    usedDays: "",
    earnedDays: "3.00",
		balance: "3.00",
  },
	{
    date: "23/05/2024",
    description: "Accrual for 23/05/2024 to 20/11/2024",
    usedDays: "-6",
    earnedDays: "",
		balance: "3.00",
  },
	{
    date: "23/05/2024",
    description: "Accrual for 23/05/2024 to 20/11/2024",
    usedDays: "",
    earnedDays: "3.00",
		balance: "3.00",
  },
]

const TableInfo = () => {
	return (
		<Table className="text-black text-sm font-medium w-full">
      <TableHeader>
        <TableRow className="bg-light-blue hover:bg-light-blue border-0">
          <TableHead className="flex items-center text-left px-2 gap-2">Date<ArrowIcon /></TableHead>
          <TableHead className="text-left px-[0]">Description</TableHead>
          <TableHead className="text-left">{'Used Days (-)'}</TableHead>
          <TableHead className="text-left">{'Earned Days (-)'}</TableHead>
					<TableHead className="text-left">Balance</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="border-b-2 border-gray">
        {days.map((day,i) => (
          <TableRow key={crypto.randomUUID()} className="border-b-2 border-gray hover:bg-light-blue">
            <TableCell className={`${i===0?'pt-5 pb-1':'py-[5.5px]'} text-left px-2`}>{day.date}</TableCell>
            <TableCell className={`${i===0?'pt-5 pb-1':'py-[5.5px]'} text-left px-[0]`}>{day.description}</TableCell>
            <TableCell className={`${i===0?'pt-5 pb-1':'py-[5.5px]'} text-left`}>{day.usedDays}</TableCell>
						<TableCell className={`${i===0?'pt-5 pb-1':'py-[5.5px]'} text-left`}>{day.balance}</TableCell>
            <TableCell className={`${i===0?'pt-5 pb-1':'py-[5.5px]'} text-left`}>{day.earnedDays}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
	)
}

export default TableInfo;