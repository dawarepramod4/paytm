import React from "react";
import { Title1, SubTitle } from "../components/TitleText";
import TextInputBox from "../components/InputText";
import Button from "../components/Button";

const SignIn = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-96">
                <div className="border shadow-sm p-5 rounded-lg">
                    <Title1 title="Sign In" />
                    <SubTitle title="Welcome back! Please sign in to your account." />
                    <TextInputBox type="text" placeholder="Email" />
                    <TextInputBox type="password" placeholder="Password" />
                    <Button title="Sign In" />
                </div>
            </div>
        </div>
    );
};

export default SignIn;
