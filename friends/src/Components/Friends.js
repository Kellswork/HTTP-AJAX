import React from "react";
import Friend from "./Friend";

export default function Friends(props) {
  const friendsData = props.friends.map(friend => {
    return (
      <Friend
        key={friend.id}
        friend={friend}
        deleteFriend={props.deleteFriend}
        editFriend={props.editFriend}
      />
    );
  });
  return <React.Fragment>{friendsData}</React.Fragment>;
}
