import React from "react"
import { MyHeader } from "../header/my-header";
import "./layout.scss";

const  MyLayout=()=> {
    return <div className="container">
        <MyHeader></MyHeader>
    </div>
}

export default MyLayout;