import React from "react";
import NavBar from "../components/NavBar";
import UserListTile from "../components/UserListTile";
import TextInputBox from "../components/InputText";

const DashBoard = () => {
    return (
        <div>
            <NavBar />
            <div className="text-lg font-bold py-5 px-3">Your Balance :{1000} </div>
            <div className="px-3">
                {" "}
                <TextInputBox type="text" label="Users" placeholder="Search User..." />
            </div>
            <UserListTile user={{ name: "User1", email: "" }} />
        </div>
    );
};

export default DashBoard;
