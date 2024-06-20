import React from 'react';
import './Modul.css'

const Modul = ({children,close}) => {
    return (
        <div>
             <div  onClick={() => close(false)} className="overlay"></div>
            <div className="modul">
             {children}
            </div>
        </div>
    );
}

export default Modul;
