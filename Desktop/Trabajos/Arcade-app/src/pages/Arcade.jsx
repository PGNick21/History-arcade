import React, { useState, useEffect } from "react";
import { Outlet, useHistory} from "react-router-dom";
import "./style/Arcade.css";
import Game from "../assets/imgs/gif1.gif";

export const Arcade =()=>{
    return(
        <>
            <div className="body-container">
                <div className="main-container">
                    <div className="container-0">
                        <div className="cont-1">
                            <div className="title">
                                <h1>HISTORY ARCADE</h1>
                            </div>
                            <div className="botom">
                                <h2>Enter</h2>
                            </div>
                        </div>
                        <div className="cont-2">
                            <img src={Game}/>
                        </div>
                    </div>
                </div>
                <Outlet />
            </div>
        </>
    )
}