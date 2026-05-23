import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"

import Home from "./pages/Home"
import Control from "./pages/Control"
import Electricidad from "./pages/Electricidad"
import Electronica from "./pages/Electronica"
import Programacion from "./pages/Programacion"
import Matematicas from "./pages/Matematicas"

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/control"
          element={<Control />}
        />

        <Route
          path="/electricidad"
          element={<Electricidad />}
        />

        <Route
          path="/electronica"
          element={<Electronica />}
        />

        <Route
          path="/programacion"
          element={<Programacion />}
        />

        <Route
          path="/matematicas"
          element={<Matematicas />}
        />

      </Routes>

    </BrowserRouter>
  )
}

export default App