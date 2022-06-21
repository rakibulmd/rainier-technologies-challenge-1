import React from "react";
import Products from "./Products";

const Dashboard = () => {
    return (
        <div className="container mx-auto">
            <h2 className="text-xl">Dashboard &gt; Order Room</h2>
            <Products></Products>
        </div>
    );
};

export default Dashboard;
