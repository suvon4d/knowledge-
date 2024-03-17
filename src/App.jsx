import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/Header'
import Blogs from './components/blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container mx-auto'>
      <Header></Header>
      <div className='flex'>
      <Blogs></Blogs>
      <Bookmarks></Bookmarks>
      </div>
      </div>
    </>
  )
}

export default App
