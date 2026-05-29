import { Link, Outlet, useLocation } from "react-router-dom";

export default function Layout() {
  const location = useLocation();
  const activePage = location.pathname;

  const userName = localStorage.getItem("chess_user_name") || "Guest";
  const isGuest = userName.toLowerCase() === "guest";

  const handleLogout = () => {
    localStorage.removeItem("chess_user_name");
    window.location.href = "/login";
  };

  const navItems = [
    { label: "Dashboard", endpoint: "/dashboard", active: activePage === "/dashboard" },
    { label: "Play Game", endpoint: "/game", active: activePage === "/game" },
    { label: "My Profile", endpoint: "/profile", active: activePage === "/profile" },
    { label: "Game History", endpoint: "/history", active: activePage === "/history" },
  ];

  return (
    <div className="font-display">
      <header className="border-b border-slate-200 dark:border-primary/20 bg-white dark:bg-background-dark sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
                <span className="material-symbols-outlined text-xl">grid_view</span>
              </div>
              <h1 className="text-xl font-bold tracking-tight">
                Adaptive Chess <span className="text-primary">AI</span>
              </h1>
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.endpoint}
                  to={item.endpoint}
                  className={
                    item.active
                      ? "text-primary font-semibold border-b-2 border-primary py-5"
                      : "text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary font-medium py-5 transition-colors"
                  }
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              {isGuest ? (
                <div className="hidden sm:flex items-center gap-3">
                  <Link className="text-sm font-semibold text-slate-600 hover:text-primary" to="/login">
                    Login
                  </Link>
                  <Link className="text-sm font-semibold bg-primary/10 text-primary px-3 py-1.5 rounded-lg" to="/register">
                    Register
                  </Link>
                </div>
              ) : (
                <button
                  className="text-sm font-semibold text-slate-600 hover:text-primary"
                  onClick={handleLogout}
                  type="button"
                >
                  Logout
                </button>
              )}
              <div className="flex items-center gap-2 cursor-pointer group">
                <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center overflow-hidden border border-primary/30 text-primary font-bold">
                  {userName.substring(0, 2).toUpperCase()}
                </div>
                <span className="text-sm font-semibold">{userName}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow flex flex-col items-center">
        <Outlet />
      </main>


    </div>
  );
}
