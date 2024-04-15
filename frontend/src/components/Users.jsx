import React from "react";
import UserListTile from "./UserListTile";

const Users = ({ users }) => {
    const userList = users.map((user) => {
        return <UserListTile user={{ name: user.firstName+" "+user.lastName ,_id: user._id }} />;
    });

    return <>{...userList}</>;
};

export default Users;