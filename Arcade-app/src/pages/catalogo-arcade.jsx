import './style/catalogo-arcade.css'
import React, { useState, useEffect } from "react";
import Mapa from '../assets/imgs/gif3.gif';
import Aparea from '../assets/imgs/gif2.gif';

export const Catalogo = () => {
    return(
        <>
            <div className="body-content">
                <div className="main-content">
                    <div className="content">
                        <h1 className='title'>BIENVENIDO</h1>
                        <div className="content-body">
                            <div className="card-body">
                                <div className="title-card">
                                    <h2>MAPA</h2>
                                </div>
                                <div className="card-image">
                                    <img src={Mapa} />
                                    <button> ACCEDER</button>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="title-card">
                                    <h2>QUIZZ</h2>

                                </div>
                                <div className="card-image">
                                    <img src={Aparea} />
                                    <button> ACCEDER</button>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

const StyleCenter ={
    textalign:'center'
}

const StyleFondo = {
    background: 'black'
}

export default Catalogo;
