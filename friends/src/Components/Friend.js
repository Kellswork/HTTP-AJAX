import React from "react";

export default function Friend(props) {
  const { friend, deleteFriend, editFriend } = props;

  return (
    <div>
      <h2>Name: {friend.name}</h2>
      <p>age: {friend.age}</p>
      <p>email: {friend.email}</p>
      <p> id: {friend.id}</p>
      <button onClick={() => deleteFriend(friend.id)}>Delete Friend</button>
      <button onClick={() => editFriend(friend.id)}>Edit friend</button>
    </div>
  );
}
