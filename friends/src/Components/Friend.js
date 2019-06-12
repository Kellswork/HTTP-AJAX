import React from 'react'

export default function Friend({friend}) {
    return (
        <div>
        <h2>Name: {friend.name}</h2>
        <p>age: {friend.age}</p>
        <p>email: {friend.email}</p>
        <button>Delete Friend</button>
      </div>
    )
}
