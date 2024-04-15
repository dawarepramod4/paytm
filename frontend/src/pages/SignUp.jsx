import React from "react";
import { Link } from "react-router-dom";
import { Title1, SubTitle } from "../components/TitleText";
import TextInputBox from "../components/InputText";
import Button from "../components/Button";
import axios from "axios";

const SignUp = () => {
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    return (
        <>
            <div className=" bg-slate-400 justify-center flex align-middle items-center h-screen pb-10 ">
                <div className=" bg-white col-auto text-center justify-center shadow-md  w-96 py-2 px-5 rounded-lg ">
                    <div className="py-3">
                        <Title1 title="Sign Up" />
                    </div>
                    <SubTitle title="Enter information to create an account" />
                    <TextInputBox
                        type="text"
                        placeholder="First Name"
                        value={firstName}
                        onChange={(e) => {
                            setFirstName(e.target.value);
                        }}
                    />
                    <TextInputBox
                        type="text"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(e) => {
                            setLastName(e.target.value);
                        }}
                    />
                    <TextInputBox
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                    <TextInputBox
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                    <Button
                        title="Sign Up"
                        onClick={async () => {
                            await axios
                                .post("http://localhost:5000/api/v1/users/signup/", {
                                    firstName: firstName,
                                    lastName: lastName,
                                    userName: email,
                                    password: password,
                                })
                                .then((res) => {
                                    // console.log(res.data.token);
                                    localStorage.setItem("token", res.data.token);
                                    window.location.href = "/dashboard";
                                })
                                .catch((err) => {
                                    console.log(err.response.data);
                                });
                        }}
                    />
                    <div className="font-semibold flex center justify-center">
                        Already have an Account?{" "}
                        <Link to="/signin">
                            <div className=" text-slate-800 pl-2 flex"> Sign In</div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};
export default SignUp;
