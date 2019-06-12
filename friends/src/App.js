import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Friends from "./Components/Friends";

export default class App extends Component {
  state = { friends: [], errorMessage: "" };

  getFriendsWithAxios = () => {
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
        console.log(response.data);
        this.setState({ friends: response.data });
      })
      .catch(error => {
        this.setState({ errorMessage: error.message });
      });
  };

  componentDidMount() {
    this.getFriendsWithAxios();
  }

  render() {
    return (
      <Friends
        friends={this.state.friends}
        errorMessage={this.state.errorMessage}
      />
    );
  }
}
