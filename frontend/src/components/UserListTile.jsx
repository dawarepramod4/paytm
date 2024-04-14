import React from "react";
import Button from "./Button";

const UserListTile = ({ user }) => {
    return (
        <div className=" bg-white py-1 px-2 rounded-lg align-middle items-center ">
            <div className="flex justify-between items-center ">
                <div className="flex items-center ">
                <div className="rounded-full bg-gray-200 w-10 h-10 mx-2"></div>
                <h1 className="text-xl font-bold">{user.name}</h1>
                </div>
                <p className="text-sm text-gray-500">{user.email}</p>
                <div className="w-25">
                    <Button title={"Send Money"} />
                </div>
            </div>
        </div>
    );
};

export default UserListTile;
