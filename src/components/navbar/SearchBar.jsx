import { Search } from "lucide-react";
import { Input } from "../ui/input";

const SearchBar = () => {
  return (
    <form className="flex-1 hidden ml-auto sm:flex-initial md:flex">
      <div className="relative">
        <Search className="absolute w-4 h-4 left-4 top-3 text-zinc-500" />
        <Input
          type="search"
          placeholder="Search..."
          className="pl-10 sm:w-[300px] md:w-[200px] lg:w-[300px] rounded-full"
        />
      </div>
    </form>
  );
};

export default SearchBar;
