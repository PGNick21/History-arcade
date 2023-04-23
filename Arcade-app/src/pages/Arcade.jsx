import React from "react";
import { Outlet,Link} from "react-router-dom";
import "./style/Arcade.css";
import Game from "../assets/imgs/gif7.gif";

export const Arcade =()=>{
    return(
        <>
            
            <div className="body-container">
                <div className="main-container">
                    <div className="container-0">
                        <div className="cont-1">
                            <div className="titulo">
                                <h1>AGMINE QUIZZ</h1>
                            </div>
                            <div className="botom">
                                <Link to= {'./catalogo-arcade.jsx'}>
                                    <h2 className="link">Enter</h2>
                                </Link>
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