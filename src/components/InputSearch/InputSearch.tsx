import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import SearchIcon from "@/assets/icons/SearchIcon";

export function InputSearch() {
  return (
    <div className="flex w-full max-w-99 items-center space-x-2 relative mt-3 max-[1100px]:mt-0 max-[360px]:w-[30px]">
      <Input type="text" placeholder="Search" className="pl-12 text-black placeholder:text-white sm:placeholder:text-black placeholder:text-lg rounded-xl border-black" />
      <Button type="submit" className="flex absolute bg-[#FCFCFE] hover:bg-[#FCFCFE] h-4 w-4 p-0 ml-8 left-2.5">
				<SearchIcon />
			</Button>
    </div>
  )
}
