import React from "react";

export const Title1 = ({ title }) => {
    return (
        <div className="text-3xl font-bold text-center justify-center ">
            {title}
        </div>
    );
};

export const Title2 = ({ title }) => {
    return (
        <div className="text-base">
            <h2>{title}</h2>
        </div>
    );
};
