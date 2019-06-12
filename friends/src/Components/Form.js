import React from "react";

export default function Form(props) {
  return (
    <form onSubmit={props.data}>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name='name'/>
      </div>

      <div>
        <label htmlFor="name">Age</label>
        <input type="number" id="age" name='age' />
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name='email'/>
      </div>

      <button>Add friend</button>
    </form>
  );
}
