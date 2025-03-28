import React, { useState } from "react";
import './RootLayout.css';
import { Outlet } from "react-router-dom";
import SideMenu from "./SideMenu";


function RootLayout() {

    const [isOpen, setIsOpen] = useState(false);

    const onclickEvent = (eventData) => {
        console.log('event click::', eventData);
    }

    return (
        <div className={`container-fluid w-100 h-100 p-0 m-0 ${isOpen == true ? 'expand' : 'slim'}`}>
            {/* side menu bar  */}
            <SideMenu open={isOpen} onclickEvent={onclickEvent} />

            {/* navbar  */}
            <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-white">
                <div className="container-fluid p-2">
                    <div className="form-inline ml-auto">
                        <div className="btn btn-primary" onClick={() => setIsOpen(!isOpen)} >
                            <i className="fa fa-bars"></i>
                        </div>
                    </div>

                    <a className="navbar-brand text-white mr-0">Logout</a>
                </div>
            </nav>
            {/* right side content  */}
            <div className="page-content-wrapper">
                <Outlet />
                {/* <h4> Leave Tracking  content page</h4> */}
            </div>

        </div>
    );
}


export default RootLayout;