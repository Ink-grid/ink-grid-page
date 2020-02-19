import React, { useEffect } from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const modulos = (props) => {

    // useEffect(() => {
    // 	// window.localStorage.
    // }, []);

    console.log(props);


    return (
        <React.Fragment>
            <div className="banner-modulos">

            </div>
            <div className="container modulos">

                <div className="row">
                    {
                        props.location.state.temaTD.map((sesion,index) => (
                        
                        <div key={index} className="col-6 col-sm-4 col-md-3 sesiones">
                            <Link>
                                <h1>{sesion.Nsesion}</h1>
                                <div>
                                    <span>{sesion.tema}</span>
                                </div>
                            </Link>
                        </div>
                    ))
                    }

                </div>
            </div>
        </React.Fragment>
    );
};

export default modulos;


