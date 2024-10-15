import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { Menu, Search } from "lucide-react";
import { Input } from "../ui/input";
import NavLink from "./NavLink";
import Link from "next/link";
import SearchBar from "./SearchBar";
import UserMenu from "./UserMenu";

const MobileMenu = ({ menu }) => {
  return (
    <Sheet>
      <div className="flex justify-between w-full md:w-fit">
        <SheetTrigger asChild>
          <Button variant="icon" size="icon" className="shrink-0 md:hidden">
            <Menu className="w-5 h-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <Link
          href="/"
          className="flex items-center text-lg font-semibold md:text-base md:hidden"
        >
          <h1 className="text-lg font-extrabold tracking-[0.3px] uppercase power">Ari Sandika</h1>
        </Link>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            {menu.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                external={item.external}
              >
                {item.label}
              </NavLink>
            ))}
            {/* <form className="w-full mt-2 md:hidden">
              <div className="relative">
                <Search className="absolute w-4 h-4 left-4 top-3 text-zinc-500" />
                <Input
                  type="search"
                  placeholder="Search..."
                  className="pl-10"
                />
              </div>
            </form> */}
          </nav>
        </SheetContent>
        <div className="flex items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          {/* <SearchBar /> */}
          <UserMenu />
        </div>
      </div>
    </Sheet>
  );
};

export default MobileMenu;
