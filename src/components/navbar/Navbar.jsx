import Link from "next/link";
import MobileMenu from "./MobileMenu";
import NavMenu from "./NavMenu";

const Navbar = () => {
  const LinkMenu = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 z-10 flex items-center justify-between w-full h-20 px-4 md:px-10 backdrop-blur-sm md:h-20 bg-[#040404]/60">
      <div className="hidden md:flex">
        <Link href="/" className="text-lg whitespace-nowrap md:text-base">
          <h1 className="text-sm font-extrabold tracking-[0.3px] uppercase power text-zinc-100">Ari Sandika</h1>
        </Link>
      </div>
      <NavMenu menu={LinkMenu} />
      <MobileMenu menu={[...LinkMenu]} />
    </header>
  );
};

export default Navbar;
