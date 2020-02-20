import React, { useEffect,useState } from 'react';
import './style.css';

const modulos = (props) => {

   

    return (
        <React.Fragment>
            <div className="banner-modulos">
                <h1>{props.location.state[0].titulo} </h1>
            </div>
            <div className="container modulos">

                <div className="row container">
                    {
                        props.location.state.filter((e, index) => index !== 0).map(
                            (datos, index) => (

                                <div key={index} className="col-12  col-md-6  sesiones">

                                    <h1>{datos.NTema}</h1>
                                    <div>
                                        <span>{datos.tema}</span>
                                    </div>

                                </div>
                            )
                        )
                    }

                </div>
            </div>
        </React.Fragment>
    );

};
export default modulos;


