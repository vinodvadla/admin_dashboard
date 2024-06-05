import React, { useState } from "react";

function MenuItemWithSub({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  return (
    <li>
      <button
        type="button"
        className="w-full text-start flex items-center justify-between gap-x-3.5 py-2 px-2.5 text-sm text-neutral-700 rounded-lg hover:bg-gray-100"
        onClick={toggleSubMenu}
      >
        <div className="flex items-center gap-2">
          <svg
            className={`flexShrink-0 size-4 transition-transform duration-300 transform`}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
          {title}
        </div>
        <svg
          className={`hidden size-4 transition-transform duration-300 transform ${
            isSubMenuOpen ? "rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m18 15-6-6-6 6" />
        </svg>
        <svg
          className={`block size-4 transition-transform duration-300 transform ${
            isSubMenuOpen ? "rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
      <div
        className={`w-full overflow-hidden transition-all duration-300 mt-4  ${
          isSubMenuOpen ? "opacity-100" : "opacity-0"
        } ${isSubMenuOpen ? "h-auto" : "h-0"}`}
        style={{ transition: "height 1s ease-in-out" }}
      >
        {children}
      </div>
    </li>
  );
}

export default MenuItemWithSub;
