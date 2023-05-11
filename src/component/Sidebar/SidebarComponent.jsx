import { Link } from "react-router-dom";

const SidebarCard = ({ children, path }) => {
  return (
    <>
      <Link to={path} className="text-decoration-none text-white">
        <div
          className={`fw-semibold d-flex align-items-center mb-3 text-secondary sidebar-text ${
            location.pathname == path && "text-white"
          }`}
        >
          {children}
        </div>
      </Link>
    </>
  );
};

export default SidebarCard;
