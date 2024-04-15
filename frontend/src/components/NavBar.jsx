import React from "react";

const NavBar = ({name}) => {
    return (
        <div className=" border-b  py-2 px-2 flex justify-between items-center">
            <div>
                <h1 className=" text-2xl font-bold">Payments App</h1>
            </div>
            <div>
                <div className=" space-x-5 flex align-middle items-center">
                  <div className="text-lg text-center align-middle inline-block ">Hello {name}</div>
                  <div className="rounded-full w-10 h-10 bg-black align-middle"></div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;