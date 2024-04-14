import React from "react";

export const Title1 = ({ title }) => {
    return (
        <div className=" text-3xl font-bold text-center justify-center ">
            {title}
        </div>
    );
};

export const SubTitle = ({ title }) => {
    return (
        <div className="text-xl font-medium justify-center text-gray-500 ">
            <h2>{title}</h2>
        </div>
    );
};
