import React from "react";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  height: 50px;
  align-items: center;
  border: 1px solid #462255;;
  border-radius: 3px;
`;

const DetailsDiv = styled.div`
  width: 65%;
  display: flex;
  justify-content: flex-start;
  color: #462255;

  h4 {
    width: 25%;
  }

  p {
    width: 15%;
  };
  
`;

const ActionDiv = styled.div`
  width: 33%;
  display: flex;
  justify-content: flex-end;
  color: #462255;
  .fas {
      width: 20%;
  }
`;

export default function Friend(props) {
  const { friend, deleteFriend, editFriend } = props;

  return (
    <Div>
      <DetailsDiv>
        <h4>{friend.name}</h4>
        <p>{friend.age}</p>
        <p>{friend.email}</p>
      </DetailsDiv>
      <ActionDiv>
      <i class="fas fa-trash" onClick={() => deleteFriend(friend.id)}></i>
      <i class="fas fa-edit" onClick={() => editFriend(friend.id)}></i>
      </ActionDiv>
    </Div>
  );
}
