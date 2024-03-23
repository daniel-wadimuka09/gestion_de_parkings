
import './App.css'
import PageHome from'./PageHome'
import Header from './Header'
import Footer from './Footer'
import Inscription from './page/Inscription'
import Codepin from './Codepin'
import Home from './Home'
import Reservation from './Reservation'
import ReactDOM from 'react-dom'
import Connecter from './page/Connecter'
import { Route } from 'react-router-dom'



function App() {
  

  return (
    <>
    <Header />
      <div className=' mt-96 mb-5'>
        <PageHome />
      </div>
      <div className=''>
      <Footer />
      </div>
      <Connecter/>
      <div>
        <Inscription />
      </div>
      <div>
        <Codepin />
      </div>
      <div>
        <Reservation />
      </div>
      <div>
        <Home />
      </div>
      
    </>
  )
}

export default App
