import React from "react";
import { Title1 } from "../components/TitleText";
import TextInputBox from "../components/InputText";
import Button from "../components/Button";

const SendMoney = () => {
    return (
        <div className=" h-screen flex flex-col center items-center justify-center ">
            <div className="flex-col  border-2 w-96 h-96 rounded-xl py-2 px-5 ">
                <div className=" pb-10">
                    {" "}
                    <Title1 title="Send Money" />
                </div>
                <div className="flex  space-x-3 items-center">
                    <div className="rounded-full w-10 h-10 items-center border "></div>
                    <div className="text-lg font-bold">Friends Name</div>
                </div>
                <TextInputBox type="text" placeholder="Enter Amount" />
                <Button title="Initiate Transfer" />
            </div>
        </div>
    );
};

export default SendMoney;
