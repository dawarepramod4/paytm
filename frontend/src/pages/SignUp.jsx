import React from "react";
import { Link } from "react-router-dom";
import { Title1, SubTitle } from "../components/TitleText";
import TextInputBox from "../components/InputText";
import Button from "../components/Button";

const SignUp = () => {
    return (
        <>
            <div className=" bg-slate-400 justify-center flex align-middle items-center h-screen pb-10 ">
                <div className=" bg-white col-auto text-center justify-center shadow-md  w-96 py-2 px-10 rounded-lg ">
                    <Title1 title="Sign Up" />
                    <SubTitle title="sdfsd" />
                    <TextInputBox type="text" placeholder="First Name" />
                    <TextInputBox type="text" placeholder="Last Name" />
                    <TextInputBox type="email" placeholder="Email" />
                    <TextInputBox type="password" placeholder="Password" />
                    <Button title="Sign Up" />
                    <div className="font-semibold">Already have an Account?  <Link to="/signin">Sign In</Link></div>
                </div>
            </div>
        </>
    );
};
export default SignUp;
