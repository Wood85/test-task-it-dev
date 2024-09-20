import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import SearchIcon from "@/assets/icons/SearchIcon";

export function InputSearch() {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2 relative mt-3">
      <Input type="text" placeholder="Search" className="pl-12 text-black placeholder:text-black placeholder:text-lg rounded-xl border-black" />
      <Button type="submit" className="flex absolute bg-[#FCFCFE] hover:bg-[#FCFCFE] h-4 w-4 p-0 ml-8 left-3">
				<SearchIcon />
			</Button>
    </div>
  )
}
