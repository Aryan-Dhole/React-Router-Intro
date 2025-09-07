import { Routes, Route, NavLink, useNavigate } from "react-router-dom";

function App() {
  // Programmatic navigation hook
  const navigate = useNavigate();

  return (
    <div className="min-h-screen text-center bg-gray-900 text-white">
      {/* Navbar */}
      <nav className="p-4 bg-gray-800 flex gap-4">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive
              ? "text-white font-semibold"
              : "text-gray-400 hover:text-white"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/notes"
          className={({ isActive }) =>
            isActive
              ? "text-white font-semibold"
              : "text-gray-400 hover:text-white"
          }
        >
          Notes
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-white font-semibold"
              : "text-gray-400 hover:text-white"
          }
        >
          About
        </NavLink>
      </nav>

      {/* Routes */}
      <Routes>
        {/* Home */}
        <Route
          path="/"
          element={
            <div className="p-6 space-y-4">
              <h1 className="text-2xl font-semibold">Welcome</h1>
              <p className="opacity-80">Use the nav to explore pages.</p>

              <button
                onClick={() => navigate("/notes")}
                className="bg-violet-600 px-4 py-2 rounded mr-4 hover:bg-violet-700"
              >
                Go to Notes (via code)
              </button>

              <button
                onClick={() => navigate(-1)}
                className="bg-gray-600 px-4 py-2 rounded hover:bg-gray-700"
              >
                Go Back
              </button>
            </div>
          }
        />

        {/* Notes */}
        <Route
          path="/notes"
          element={
            <div className="p-6">
              <h1 className="text-2xl font-bold">Notes Page</h1>
              <p className="opacity-80">Your notes will appear here.</p>
            </div>
          }
        />

        {/* About */}
        <Route
          path="/about"
          element={
            <div className="p-6">
              <h1 className="text-2xl font-bold">About Page</h1>
              <p className="opacity-80">This is just a demo routing app.</p>
            </div>
          }
        />

        {/* 404 */}
        <Route
          path="*"
          element={
            <div className="p-6 text-center text-red-400">
              404 - Page Not Found
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
