import React from "react";
import { Link } from "react-router-dom";

export function Navigation(){
    return(
        <nav className="h-[50] flex justify-between px-5 bg-gray-500 item-center text-white">
                <span className="font-bold">React 2023</span>
                <span>
                    <Link to="/" className="mr-2">Products</Link>
                    <Link to="/about">About</Link>
                </span>
        </nav>
    )
}