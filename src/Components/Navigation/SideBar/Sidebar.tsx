import MenuItemWithSub from "./MenuItemWithSub";
import MenuItem from "./MenuItem";

function Sidebar({ isSidebarOpen }: { isSidebarOpen: boolean }) {
  return (
    <div
      className={`${
        isSidebarOpen ? "translate-x-0" : "translate-x-[-100%]"
      } transition-all duration-300 transform w-[260px] fixed inset-y-0 start-0 z-[60] bg-white border-e border-gray-200 lg:block lg:translate-x-0 lg:start-0 lg:bottom-0 dark:bg-neutral-800 dark:border-neutral-700`}
    >
      <div className="px-8 pt-4">
        <a
          className="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
          href="#"
        >
          {/* logo */}
          <img
            src="https://placehold.co/250x60"
            alt="logo"
            className="w-full"
          />
        </a>
      </div>
      <nav className="hs-accordion-group p-6 w-full flex flex-col flex-wrap">
        <ul className="space-y-1.5">
          <MenuItemWithSub title="Users">
            <MenuItem title="All Users" to="/" icon="fa-solid fa-user" />
          </MenuItemWithSub>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
