import React from "react";
import Products from "./Products";

const Dashboard = () => {
    return (
        <div className="container mx-auto h-screen overflow-hidden">
            <h2 className="text-xl">Dashboard &gt; Order Room</h2>
            <div className="grid grid-cols-[2fr_1fr]">
                <Products></Products>
                <div></div>
            </div>
        </div>
    );
};

export default Dashboard;
