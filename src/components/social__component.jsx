import React from "react"

class Social extends React.Component{
    render(){
        return(
            <>
            <div className="social">
                <div className="social__icons">
                <div className="social__icon"><i className="fa-brands fa-facebook-f"></i></div>
                <div className="social__icon"><i className="fa-brands fa-twitter"></i></div>
                <div className="social__icon"><i className="fa-brands fa-instagram"></i></div>
                </div>
                <span>&copy; Copyright Ping. All rights reserved.</span>
            </div>
            </>
        );
    }
}

export default Social