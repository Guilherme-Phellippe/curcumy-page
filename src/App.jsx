import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Vsl from "./pages/Vsl"


function App() {
  return (
    <BrowserRouter>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vsl" element={<Vsl />} />
       </Routes>
    </BrowserRouter>
  )
}

export default App
