import React from "react";
import { useNavigate } from "react-router-dom";

const Start=({userName})=> {
    const navigate = useNavigate();

    return(
        <div className="startpage">
            <h1>Hello {userName}👋</h1>
            <h2>Are you ready?</h2>
            <button type="button" onClick={() => navigate("/quiz")}>Start Now!</button>
        </div>
    )
}
export default Start