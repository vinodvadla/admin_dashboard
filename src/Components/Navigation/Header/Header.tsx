import { useState } from "react";

function Header({
  setIsSidebarOpen,
  isSidebarOpen,
}: {
  setIsSidebarOpen: any;
  isSidebarOpen: any;
}) {
  const [showPopOver, setShowPopover] = useState(false);
  return (
    <header className="sticky top-0 inset-x-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-[48] w-full bg-white border-b text-sm py-2.5 sm:py-4 lg:ps-64 dark:bg-neutral-800 dark:border-neutral-700">
      <nav className="flex basis-full items-center w-full mx-auto px-4 sm:px-6 justify-end">
        <div className="me-5 lg:me-0 lg:hidden">
          <button
            type="button"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="py-2 px-3 flex justify-center items-center gap-x-1.5 text-xs rounded-lg border border-gray-200 text-gray-500 hover:text-gray-600 dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200"
          >
            <svg
              className="flexShrink-0 size-4"
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
              <path d="M17 8L21 12L17 16M3 12H13M3 6H13M3 18H13" />
            </svg>
          </button>
        </div>
        <div className="w-full flex items-center justify-end ms-auto sm:justify-end sm:gap-x-3 sm:order-3">
          <div className="flex flex-row items-center justify-end gap-2">
            <button
              type="button"
              className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700"
            >
              <svg
                className="flexShrink-0 size-4"
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
                <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
              </svg>
            </button>
            <button
              type="button"
              className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700"
              data-hs-offcanvas="#hs-offcanvas-right"
            >
              <svg
                className="flexShrink-0 size-4"
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
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </button>
            <div
              className="relative inline-flex [--placement:bottom-right]"
              onClick={() => {
                setShowPopover(!showPopOver);
              }}
             
            >
              <button
                type="button"
                className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700"
              >
                <img
                  className="inline-block size-[38px] rounded-full ring-2 ring-white dark:ring-neutral-800"
                  alt="Image Description"
                  src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=626&ext=jpg&ga=GA1.1.813014786.1710833965&semt=ais"
                />
              </button>
              {showPopOver && (
                <div
                  className={
                    "absolute z-[999] whitespace-normal break-words rounded-lg border border-blue-gray-50 bg-white p-4 font-sans text-sm font-normal text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none right-0 top-10"
                  }
                >
                  <h6 className="block mb-6 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                    Newsletter Subscription
                  </h6>
                  <p className="block mb-1 font-sans text-sm antialiased font-bold leading-normal text-blue-gray-900">
                    Your Name
                  </p>
                  <div className="flex gap-2"></div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
