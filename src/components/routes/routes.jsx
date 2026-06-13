import { useEffect } from "react"
import {BrowserRouter as Router, Routes, Route, Navigate, useLocation} from "react-router-dom"
import Login from "../pages/Login.jsx"
import CapOne from "../pages/CapOne.jsx"
import CapTwo from "../pages/CapTwo.jsx"
import CapThree from "../pages/CapThree.jsx"
import CapFour from "../pages/CapFour.jsx"
import CapFive from "../pages/CapFive.jsx"

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

const ProtectedRoute = ({ children }) => {
  const isAuth = localStorage.getItem("love-auth") === "true"

  if (!isAuth) {
    return <Navigate to="/" replace />
  }

  return children
}

const routes = () => {
  return (
    <Router>
      <ScrollToTop />
      <main>
        <Routes>
          <Route path="/" element={<Login/>}/>

          <Route path="/capitulouno" element={<ProtectedRoute><CapOne/></ProtectedRoute>}/>
          <Route path="/capitulodos" element={<ProtectedRoute><CapTwo/></ProtectedRoute>}/>
          <Route path="/capitulotres" element={<ProtectedRoute><CapThree/></ProtectedRoute>}/>
          <Route path="/capitulocuatro" element={<ProtectedRoute><CapFour/></ProtectedRoute>}/>
          <Route path="/capitulocinco" element={<ProtectedRoute><CapFive/></ProtectedRoute>}/>
        </Routes>
      </main>
    </Router>
  )
}

export default routes
