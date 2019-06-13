import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Friends from "./Components/Friends";
import Form from "./Components/Form";

export default class App extends Component {
  state = { friends: [], errorMessage: "" };

  getFriendsWithAxios = () => {
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
        this.setState({ friends: response.data });
      })
      .catch(error => {
        this.setState({ errorMessage: error.message });
      });
  };

  componentDidMount() {
    this.getFriendsWithAxios();
  }

  addNewFriend = event => {
    event.preventDefault();
    const newFriend = {
      name: event.target.name.value,
      age: event.target.age.value,
      email: event.target.email.value
    };

    axios
      .post("http://localhost:5000/friends", { ...newFriend })
      .then(response => {
        this.setState({ friends: response.data})
      });
  };

  deleteFriend = (id) => {
    axios.delete(`http://localhost:5000/friends/${id}`)
    .then(response => {
      this.setState({
        friends: response.data
      })
   })
  }

  render() {
    return (
      <div>
        <Friends
          friends={this.state.friends}
          errorMessage={this.state.errorMessage}
          deleteFriend = {this.deleteFriend}
        />
        <Form addNewFriend={this.addNewFriend} />
      </div>
    );
  }
}

//question, do I have to add the friend object to state? if so why
