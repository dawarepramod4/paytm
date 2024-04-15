import React from "react";
import { Title1 } from "../components/TitleText";
import TextInputBox from "../components/InputText";
import Button from "../components/Button";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Spinner";
import { useNavigate } from "react-router-dom";

const SendMoney = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const to = searchParams.get("to");
    const name = searchParams.get("name");

    const [amount, setAmount] = React.useState(0);

    const [tranferred, setTransferred] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    return (
        <div className=" h-screen flex flex-col center items-center justify-center ">
            <div className="flex-col  border-2 w-96 h-96 rounded-xl py-2 px-5 ">
                <div className=" pb-10">
                    {" "}
                    <Title1 title="Send Money" />
                </div>
                {loading ? (
                    <Spinner />
                ) : (
                    <>
                        <div className="flex  space-x-3 items-center">
                            <div className="flex rounded-full w-10 h-10 items-center border text-center align-middle justify-center ">
                                {" "}
                                <div className="font-bold text-gray-500 text-xl flex-1 justify-center align-middle">
                                    {name[0].toUpperCase()}
                                </div>
                            </div>
                            <div className="text-lg font-bold">{name}</div>
                        </div>
                        <TextInputBox
                            type="number"
                            placeholder="Enter Amount"
                            onChange={(e) => {
                                setAmount(Number(e.target.value));
                            }}
                        />
                        <></>
                    </>
                )}
                <Button
                    title="Initiate Transfer"
                    onClick={async () => {
                        setLoading(true);
                        const res = await axios
                            .post(
                                "http://localhost:5000/api/v1/account/transfer",
                                {
                                    to: to,
                                    amount: Number(amount),
                                },
                                {
                                    headers: {
                                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                                    },
                                }
                            )
                            .then((res) => {
                                setTransferred(true);
                                navigate("/dashboard");
                            })
                            .catch((err) => {
                                console.log(err);
                            });
                        setLoading(false);
                    }}
                />
            </div>
        </div>
    );
};

export default SendMoney;
