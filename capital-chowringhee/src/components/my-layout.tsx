import React from "react"
import MyHeader from "./my-header";
import "./layout/layout.scss";

const MyLayout = ({ children }) => {
    return <div className="container">
        <MyHeader></MyHeader>
    </div>
}

export default MyLayout;