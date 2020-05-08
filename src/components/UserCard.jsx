import React from "react";

const UserCard = (props) => {
  return (
    <div className="rounded border border-gray-500 p-4 my-4 w-3/4 max-w-lg flex mx-auto">
      <img src={props.data.avatar_url} alt="avatar" className="w-1/2 rounded" />
      <div className="w-1/2 px-4">
        <p>{props.data.login}</p>
        <p>followers:{props.data.followers}</p>
        <p>following:{props.data.following}</p>
        {/* <p>member since:{props.data.created_at}</p> */}
      </div>
    </div>
  );
};

export default UserCard;
