import React from "react";
import axios from "axios";
import UserCard from "./components/UserCard";
import Form from "./components/Form";
// import DefaultData from "./Data.json";

class App extends React.Component {
  state = {
    userID: "",
    userData: [],
    userFollowing: [],
  };

  handleChange = (e) => {
    this.setState({ userID: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.getUserData();
    this.setState({ userFollowing: [] });
    this.getUserFollowingData();
    this.setState({ userID: "" });
  };
  getUserData = () => {
    if (this.state.userID !== "") {
      axios
        .get(`https://api.github.com/users/${this.state.userID}`)
        .then((res) => {
          console.log("userData", res.data);
          this.setState({ userData: res.data });
        })
        .catch((err) => console.error("User fetch error,", err));
    }
  };
  getUserFollowingData = () => {
    axios
      .get(`https://api.github.com/users/${this.state.userID}/following`)
      .then((res) => {
        console.log("userFollowingData", res.data);
        const userArray = [];
        res.data.forEach((user) => userArray.push(user.login));
        // eslint-disable-next-line
        userArray.map((name) => {
          axios.get(`https://api.github.com/users/${name}`).then((res) => {
            this.setState({ userFollowing: [...this.state.userFollowing, res.data] });
          });
        });
        // this.setState({ userFollowing: [...res.data] });
      })
      .catch((err) => console.error("Following fetch error,", err));
  };
  componentDidMount() {
    this.getUserData();
  }

  render() {
    return (
      <div className="container mx-auto py-8 text-center">
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
        {this.state.userFollowing
          ? this.state.userFollowing.map((item) => <UserCard data={item} key={item.id} />)
          : null}
      </div>
    );
  }
}

export default App;
