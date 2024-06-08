import React from 'react';
import Error404 from "../assets/images/errors/404.png";

export default function PageNotFound() {
    return (
        <div>
            <img src={Error404} alt="404" style={{width: "100%", height: "auto", objectFit: "cover"}} />
        </div>
    );
}
