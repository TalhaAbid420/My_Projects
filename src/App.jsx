import Navbar from './Components/Navbar'
import './App.css'
import Meme from './Components/Meme'

const App = () => {
  return (
    <div className='flex items-center justify-center w-full h-full my-4'>
      <section className='w-[550px]'>
      <Navbar/>
      <Meme/>
      </section>
    </div>
  )
}

export default App