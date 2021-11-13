import React from 'react'
import { useState, useEffect } from 'react'    
import { Card, CardGroup } from 'react-bootstrap'


export default function Users() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchUsers = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await res.json()
        console.log(data)
        setUsers(data)
        setLoading(false)
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    return (
        <div className="container-fluid">
              <div className="text-center text-primary">User List App using React</div>
                <div className="row"> 
                    
           {loading ? <h1>Loading...</h1> : 
      
           users.map(user => ( 
           
            <CardGroup className="col-lg-3 m-1" key={user.id}>
                <Card>
                    <Card.Body className="text-light bg-dark">
                        <Card.Img src={user.avatar} alt="user" />
                        <Card.Title className="text-success">{user.name}</Card.Title>
                        <Card.Text>
                           <p> phone: {user.phone} </p>
                           <p> email: {user.email} </p>
                           <p> website: {user.website} </p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
     
              ))}
                     </div>
        </div>
    )
           
}
