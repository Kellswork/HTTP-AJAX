import React from "react";
import styled from "styled-components";

const FormField = styled.form ``;

const InputField = styled.div`
label {
    display: block;
}`;

export default function Form(props) {
  return (
    <form method='#'
      onSubmit={
        props.isEditFriend
          ? event => {
              props.updateFriend(event);
            }
          : props.addNewFriend
      }
    >

      <InputField>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={props.friend.name}
          onChange={props.handleInputChange}
          ref={props.nameToGetInput}
          required
        />
      </InputField>

      <InputField>
        <label htmlFor="name">Age</label>
        <input
          type="number"
          name="age"
          value={props.friend.age}
          ref={props.ageToGetInput}
          onChange={props.handleInputChange}
          required
        />
      </InputField>

      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={props.friend.email}
          ref={props.emailToGetInput}
          onChange={props.handleInputChange}
          required
        />
      </div>

      <button>Add friend</button>
    </form>
  );
}
