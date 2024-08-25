import PrincipalPage from './Components/PrincipalPage'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import '../src/index.css'
import DescripcionProducto from './Components/DescripcionProducto'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<PrincipalPage />} />
          <Route path="/home/producto/:id" element={<DescripcionProducto />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
