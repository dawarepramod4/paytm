import React from "react";
import { Title1, SubTitle } from "../components/TitleText";
import TextInputBox from "../components/InputText";
import Button from "../components/Button";
import axios from "axios";

const SignIn = () => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-96">
                <div className="border shadow-sm p-5 rounded-lg">
                    <Title1 title="Sign In" />
                    <SubTitle title="Enter your credentials to access your account" />
                    <TextInputBox
                        type="text"
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
                        title="Sign In"
                        onClick={async () => {
                            await axios
                                .post("http://localhost:5000/api/v1/users/login/", {
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
                </div>
            </div>
        </div>
    );
};

export default SignIn;
