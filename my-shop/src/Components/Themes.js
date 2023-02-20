import React from "react";

const Themes = (props) => {
  return (
    <div className="dropdown dropdown-left">
      <label tabIndex={0} className="btn m-1">
        Themes
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <span onClick={(e) => props.changeTheme(e)}>Forest</span>
        </li>
        <li>
          <span onClick={(e) => props.changeTheme(e)}>Luxury</span>
        </li>
        <li>
          <span onClick={(e) => props.changeTheme(e)}>Night</span>
        </li>
      </ul>
    </div>
  );
};

export default Themes;
