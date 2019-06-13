import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Friends from "./Components/Friends";
import Form from "./Components/Form";
import Header from './Components/Header';

const friendsApi = "http://localhost:5000/friends";

export default class App extends Component {
  state = {
    friends: [],
    errorMessage: "",
    name: "",
    age: "",
    email: "",
    id: "",
    isEditFriend: false
  };

  nameToGetInput = React.createRef();
  ageToGetInput = React.createRef();
  emailToGetInput = React.createRef();

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
      name: this.nameToGetInput.current.value,
      age: this.ageToGetInput.current.value,
      email: this.emailToGetInput.current.value
    };

    axios.post(friendsApi, { ...newFriend }).then(response => {
      this.setState({ friends: response.data });
      this.nameToGetInput.current.value = "";
      this.ageToGetInput.current.value = "";
      this.emailToGetInput.current.value = "";
    });
  };

  deleteFriend = id => {
    axios.delete(`${friendsApi}/${id}`).then(response => {
      this.setState({
        friends: response.data
      });
    });
  };

  editFriend = id => {
    const friend = this.state.friends.find(friend => friend.id === id);
    this.setState({
      name: friend.name,
      age: friend.age,
      email: friend.email,
      id: friend.id,
      editFriend: true
    });
  };

  updateFriend = event => {
    event.preventDefault();
    const updateFriend = {
      name: this.nameToGetInput.current.value,
      age: this.ageToGetInput.current.value,
      email: this.emailToGetInput.current.value
    };
    axios
      .put(`${friendsApi}/${this.state.id}`, { ...updateFriend })
      .then(response => {
        this.setState({ ...this.state, friends: response.data });
      });
  };

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const { name, age, email } = this.state;
    const friend = {
      name,
      age,
      email
    };
    return (
      <div>
        <Header />
        <Friends
          friends={this.state.friends}
          errorMessage={this.state.errorMessage}
          deleteFriend={this.deleteFriend}
          editFriend={this.editFriend}
        />
        <Form
          addNewFriend={this.addNewFriend}
          nameToGetInput={this.nameToGetInput}
          ageToGetInput={this.ageToGetInput}
          emailToGetInput={this.emailToGetInput}
          friend={friend}
          handleInputChange={this.handleInputChange}
          isEditFriend={this.state.editFriend}
          updateFriend={this.updateFriend}
        />
      </div>
    );
  }
}
