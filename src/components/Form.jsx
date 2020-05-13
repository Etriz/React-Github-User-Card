import React from "react";

const Form = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className="w-3/4 max-w-xl mx-auto">
      <label htmlFor="userID">
        <input
          type="text"
          id="userID"
          name="userID"
          value={props.state.inputValue}
          onChange={props.handleChange}
          placeholder="Enter Username"
          className="rounded rounded-r-none border border-r-none border-gray-500 py-1 px-2 ml-2"
        />
      </label>
      <button
        type="submit"
        className="rounded rounded-l-none border border-l-none border-gray-500 py-1 px-4 bg-gray-400">
        Get Info
      </button>
    </form>
  );
};

export default Form;
