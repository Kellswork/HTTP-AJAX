import React from "react";
import Friend from './Friend';

export default function Friends(props) {
  const friendsData = props.friends.map(friend => {
    return (
        <Friend key={friend.id} friend={friend} deleteFriend={props.deleteFriend} />
    );
  });
  return <React.Fragment>{friendsData}</React.Fragment>;
}
