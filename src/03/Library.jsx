import React from 'react'
import Book from './Book'

function Library(props) {
  return (
    <div>
      <Book name="처음 만난 파이썬" numOfPage={300} author="김파이썬" />
      <Book name="처음 만난 AS" numOfPage={400} author="이AS" />
      <Book name="처음 만난 리액트" numOfPage={500} author="박리액트" />
    </div>
  )
}

export default Library
