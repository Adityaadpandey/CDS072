import React, { useState,useEffect } from 'react'

const User = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://backend-rail-cms-production.up.railway.app/api/user/getname/Aditya')
      .then(res => res.json())
      .then(users => setData(users))
    }, [])
  return (
    <div>
      {data.map(user => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  )
}

export default User