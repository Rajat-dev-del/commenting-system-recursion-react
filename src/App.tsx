import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import data from './data.ts';
import CommentComponent from './commentComponent';
import {Comment} from './commentComponent'
function App() {
  const[comments, setComments] = useState<Comment[]>([]);
  return (
    <>
      <div> 
        {data.map((comment)=>{
          return(
            <CommentComponent key={comment.id} comment={comment}/>
            )
          })
        }
      </div>
    </>
  )
}

export default App
