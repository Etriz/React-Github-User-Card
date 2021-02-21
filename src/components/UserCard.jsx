import React from "react";

const UserCard = (props) => {
  return (
    <div className="rounded border border-gray-500 my-4 w-3/4 max-w-lg flex mx-auto text-left leading-tight shadow-lg">
      <img src={props.data.avatar_url} alt="avatar" className="w-32 h-32" />
      <div className="w-auto px-4">
        <p className="text-3xl">{props.data.name}</p>
        <p className="text-lg mb-2">{props.data.login}</p>
        <a href={props.data.html_url} className="text-blue-600 underline">
          {props.data.html_url}
        </a>
        <p>Followers: {props.data.followers}</p>
        <p>Following: {props.data.following}</p>
        {/* <p>member since:{props.data.created_at}</p> */}
      </div>
    </div>
  );
};

export default UserCard;
