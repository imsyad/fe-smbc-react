import { Link, useLocation } from "react-router";

const Sidebar = () => {
  const location = useLocation();

  const navItems = [
    { to: "/catalogue", label: "📚 Catalogue" },
    { to: "/books/rented", label: "📖 Rented Books" },
    { to: "/auth/register", label: "📝 Register" },
    { to: "/auth/login", label: "🔐 Login" },
  ];

  return (
    <nav className="w-64 min-h-screen bg-gray-100 dark:bg-[#1D1D1D] p-6 shadow-md">
      <ul className="space-y-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.to;

          const baseClass =
            "block px-4 py-2 rounded-md font-medium transition-colors";
          const activeClass =
            "bg-blue-600 text-white dark:bg-blue-500 cursor-default";
          const inactiveClass =
            "text-gray-800 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700";

          return (
            <li key={item.to}>
              {isActive ? (
                <span
                  className={`${baseClass} ${activeClass}`}
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                <Link to={item.to} className={`${baseClass} ${inactiveClass}`}>
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Sidebar;
