import { Footer } from "./components/Layouts/Footer"
import { Header } from "./components/Layouts/Header"
import AllRoutes from "./routes/Allroutes"

function App() {
  return (
   <>
   <div>
    <Header/>
      <AllRoutes/>
      <Footer/>
    </div>
   </>
  )
}

export default App
