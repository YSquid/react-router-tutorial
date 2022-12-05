import React from 'react'
import {useParams} from 'react-router-dom'

function Book() {
//useParams returns a parameters object. 
// since we have a route with :id, clicking that route returns the params object with key id
//we can then store that key in variable and use it in our rendering
const {id} = useParams()
  return (
    <div>Book {id}</div>
  )
}

export default Book