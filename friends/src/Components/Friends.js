import React from "react";
import Friend from "./Friend";
import styled from "styled-components";

const Div = styled.div`
border: 1px solid #B47AEA;
  border-radius: 3px;
  box-shadow: inset 8px 10px 5px -7px rgba(0,0,0,0.46), 
  inset -5px 2px 5px -7px rgba(0,0,0,0.46), 
  inset -6px -9px 5px -7px rgba(0,0,0,0.46);
}


`;

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
  return <Div>{friendsData}</Div>;
}
