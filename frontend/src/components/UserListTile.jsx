import React from "react";
import Button from "./Button";

const UserListTile = ({ user }) => {
    return (
        <div className=" bg-white py-1 px-2 rounded-lg align-middle items-center ">
            <div className="flex justify-between items-center ">
                <h1 className="text-xl font-bold">{user.name}</h1>
                <p className="text-sm text-gray-500">{user.email}</p>
                <div className="w-25">
                    <Button title={"Send Money"} />
                </div>
            </div>
        </div>
    );
};

export default UserListTile;
