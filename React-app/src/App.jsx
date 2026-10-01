// import Carousel from './components/carousel/Carousel'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
// import ProfileCard from './components/pofileCard/ProfileCard'
import './App.css'
import { MainLayout } from './layout/MainLayout'
// import { Home } from './pages/home/Home'

function App() {

  return(
    <>
    {/* <h1 className='text-3xl font-bold underline text-red-500'>Hello World</h1>
    <p className='text-lg text-blue-500'>This is a paragraph</p>
    <button className='bg-blue-500 text-white p-2 rounded-md'>Click me</button> */}
    <Header />
    <MainLayout />
    <Footer/>
    </>
  )
}

export default App
