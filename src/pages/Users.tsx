import React from 'react'
import { useParams } from 'react-router-dom'

function Users() {
  const {id} = useParams<{id:string}>()
  return (
    <>
        <p>UserId: {id}</p>
    </>
  )
}

export default Users