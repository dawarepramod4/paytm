import React from "react";

const Button = ({ title, onClick }) => {
    return (
        <button onClick={onClick} className=" bg-black text-white my-3 font-bold py-1 px-4 rounded w-full">
            {title}
        </button>
    );
};

export default Button;
