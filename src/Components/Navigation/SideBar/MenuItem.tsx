import { useLocation } from "react-router";
import { checkIsActive } from "./Helpers/Pathextract";
import { Link } from "react-router-dom";

function MenuItem({
  title,
  to,
  icon,
}: {
  title: string;
  to: string;
  icon: string;
}) {
  const location = useLocation();
  const isActive = checkIsActive(location.pathname, to);
  return (
    <li>
      <Link
        to={to}
        className={
          "w-full text-start flex items-center justify-between gap-x-3.5 py-2 px-2.5 text-sm text-neutral-700 rounded-lg hover:bg-gray-100 " +
          (isActive ? "bg-gray-100" : "")
        }
      >
        <div className="flex items-center gap-2">
          <i className={`flexShrink-0 ${icon}`}></i>
          {title}
        </div>
      </Link>
    </li>
  );
}

export default MenuItem;
