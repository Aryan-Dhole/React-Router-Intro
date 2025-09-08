import { Routes, Route, NavLink, useNavigate } from "react-router-dom";

function App() {

  const navigate = useNavigate()

  return (
    <div className="min-h-screen text-center bg-gray-900 text-white">

      <nav
        className="p-4 bg-gray-700 flex gap-6">
        <NavLink
          to={"/"}
          end
          className={({ isActive }) =>
            isActive
              ? "text-white font-semibold"
              : "text-gray-500 hover:text-cyan-400"
          }
        >
          Home
        </NavLink>
        <NavLink
          to={"/notes"}
          className={({ isActive }) =>
            isActive
              ? "text-white font-semibold"
              : "text-gray-500 hover:text-cyan-400"
          }
        >Notes
        </NavLink>
        <NavLink
          to={"/about"}
          className={({ isActive }) =>
            isActive
              ? "text-white font-semibold"
              : "text-gray-500 hover:text-cyan-400"
          }
        >
          About
        </NavLink>
      </nav>

      <Routes>

        <Route
          path="/"
          element={
            <div
              className="p-6 space-y-4">
              <h1 className="text-2xl font-semibold">Welcome</h1>
              <p className="opacity-80">use nav to explore pages.</p>

              <button
                onClick={() => { navigate("/about") }}
                className="bg-violet-500 rounded-md px-4 py-2 mr-4 hover:bg-violet-700">
                go to About (via code)
              </button>

              <button
                onClick={() => { navigate(-1) }}
                className="bg-violet-500 rounded-md px-4 py-2 mr-4 hover:bg-violet-700">
                Last Page
              </button>
            </div>
          }>
        </Route>
        <Route
          path="/notes"
          element={
            <div
              className="p-4 text-center">
              <h2 className="text-xl font-semibold">Notes Page</h2>
              <p className="text-sm text-gray-600 mt-30">Your notes will be displayed here.</p>
            </div>
          }>
        </Route>
        <Route
          path="/about"
          element={
            <div
              className="p-6 text-center">
              <h2 className="text-gray-200 text-2xl font-semibold mb-20">About Me</h2>
              <p className="text-md mb-8">Hello,  <span className="font-semibold">Aryan Dhole</span> 👋</p>


              <div className="flex gap-4 justify-center">
                <button
                  onClick={() => window.open("https://github.com/Aryan-Dhole", "_blank")}
                  className="px-5 py-2 rounded-2xl bg-gray-600 text-white hover:bg-gray-700">
                  GitHub
                </button>

                <button
                  onClick={() => window.open("https://www.linkedin.com/in/aryan-dhole-20a999381/", "_blank")}
                  className="px-5 py-2 rounded-2xl bg-blue-600 text-white"
                >
                  LinkedIn
                </button>
              </div>
            </div>
          }>
        </Route>
        <Route
          to={"*"}
          element={
            <div className="p-6 text-center">
              <h1 className="text-2xl font-bold">404 - Not Found</h1>
              <p className="mt-2">This page doesn’t exist.</p>
            </div>
          }>

        </Route>
      </Routes>

    </div>
  )

}
export default App
