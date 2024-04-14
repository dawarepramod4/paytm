import React from "react";

const TextInputBox = ({ type, label, placeholder, value, onChange }) => {
    return (
        <>
            <div className="my-3">
                <label className="block text-gray-700 text-sm py-2 font-bold text-left">
                    {label ?? placeholder}
                </label>
                <input
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className="border-2 border-gray-300 p-2 w-full rounded-lg"
                />
            </div>
        </>
    );
};

export default TextInputBox;
