import { useState } from 'react'
import './App.css'
import Blogs from './component/Blogs/Blogs'
import Bookmarks from './component/Bookmarks/Bookmarks'
import Header from './component/Header/header'

function App() {
  const [bookmarks, setBookmarks] = useState([])
  const [readingTime, setReadingTiming] = useState(0)

  const HandleBookmarks = bookmark => {
    const newBookmarks = [...bookmarks, bookmark]
    setBookmarks(newBookmarks)
  }

  const HandleReadingTime = (id, time) =>{
    const newReadingTime = readingTime+time
    setReadingTiming(newReadingTime)
    const remainingBookmark = bookmarks.filter(bookmark => bookmark.id!==id)
    setBookmarks(remainingBookmark)
  }
  return (
    <>
      <Header></Header>
      <div className='flex max-w-7xl mx-auto'>
      <Blogs handleReadingTime={HandleReadingTime} handleBookmarks={HandleBookmarks}></Blogs>
        <Bookmarks readingTime={readingTime} bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  )
}

export default App
