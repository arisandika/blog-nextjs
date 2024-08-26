import NavLink from "./NavLink";

const NavMenu = ({ menu }) => {
  return (
    <div className="justify-center hidden gap-10 text-lg font-medium md:flex md:text-sm">
      {menu.map((item) => (
        <NavLink key={item.href} href={item.href} external={item.external}>
          {item.label}
        </NavLink>
      ))}
    </div>
  );
};

export default NavMenu;
