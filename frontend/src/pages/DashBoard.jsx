import React, { Suspense, useEffect } from "react";
import NavBar from "../components/NavBar";
import UserListTile from "../components/UserListTile";
import TextInputBox from "../components/InputText";
import Users from "../components/Users";
import Spinner from "../components/Spinner";
import axios from "axios";

const DashBoard = () => {
    const [users, setUsers] = React.useState([]);
    const [filterQuery, setFilterQuery] = React.useState("");
    const [loading, setLoading] = React.useState(true);
    const [balance, setBalance] = React.useState(0);
    const [name, setName] = React.useState("");

    //using debounce to reduce the number of api calls
    useEffect(() => {
        const getData = setTimeout(async () => {
            setLoading(true);
            await axios
                .get("http://localhost:5000/api/v1/users/me", {
                    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
                })
                .then((res) => {
                    console.log(res.data);
                    setBalance(res.data.balance);
                    setName(res.data.name);
                })
                .catch((err) => {
                    console.log(err);
                });

            await axios
                .get("http://localhost:5000/api/v1/users/bulk" + `?filter=${filterQuery}`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                })
                .then((res) => {
                    setUsers(res.data.users);
                })
                .then((data) => {
                    console.log(data);
                });
            setLoading(false);
        }, 1000);

        //delete the timeout if the use effect called again before 1 sec
        return () => clearTimeout(getData);
    }, [filterQuery]);
    return (
        <div>
            <NavBar name={name} />
            <div className="text-lg font-bold py-5 px-3">Your Balance : {balance} </div>
            <div className="px-3">
                {" "}
                <TextInputBox
                    type="text"
                    label="Users"
                    placeholder="Search User..."
                    onChange={(e) => {
                        setFilterQuery(e.target.value);
                    }}
                />
            </div>
            {loading ? (
                <Spinner />
            ) : users.length > 0 ? (
                <Users users={users} />
            ) : (
                <div className="text-center text-lg font-bold">No Users Found</div>
            )}
        </div>
    );
};

export default DashBoard;
