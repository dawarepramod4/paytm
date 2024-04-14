import React from "react";
import NavBar from "../components/NavBar";
import UserListTile from "../components/UserListTile";

const DashBoard = () => {
    return (
        <div>
          <NavBar />
            <h1>Your Balance {1000}</h1>
            <UserListTile user={{ name: "User1", email: ""}}/>
        </div>
    );
};

export default DashBoard;