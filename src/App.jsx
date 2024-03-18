
import './App.css'
import PageHome from'./PageHome'
import Header from './Header'
import Footer from './Footer'
import PageConnection from './PageConnection'
import Inscription from './Inscription'
import Codepin from './Codepin'
import Reservation from './Reservation'


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
      <PageConnection />
      <div>
        <Inscription />
      </div>
      <div>
        <Codepin />
      </div>
      <div>
        <Reservation />
      </div>
      
    </>
  )
}

export default App
