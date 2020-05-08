import React from "react";
import axios from "axios";
import UserCard from "./components/UserCard";
import Form from "./components/Form";

class App extends React.Component {
  state = {
    userID: "etriz",
    userData: [],
  };

  handleChange = (e) => {
    this.setState({ userID: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.getUserData();
  };
  getUserData = () => {
    axios
      .get(`https://api.github.com/users/${this.state.userID}`)
      .then((res) => {
        console.log(res.data);
        this.setState({ userData: res.data });
      })
      .catch((err) => console.error("API fetch error,", err));
  };
  componentDidMount() {
    this.getUserData();
  }

  render() {
    return (
      <div className="container mx-auto py-6 text-center">
        <p>GitHub user info.</p>
        <Form
          state={this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        {this.state.userData.length !== 0 ? (
          <UserCard data={this.state.userData} />
        ) : (
          <p className="rounded border border-gray-500 p-4 my-4 mx-auto w-3/4 max-w-xl text-center">
            No User Data Found
          </p>
        )}
      </div>
    );
  }
}

export default App;
