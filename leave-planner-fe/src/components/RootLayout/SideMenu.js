import React, { Fragment, useEffect, useState } from 'react';
import Logo from "../../assets/IBM_logo.png"
import { useNavigate } from 'react-router-dom';



function SideMenu(props) {
    const navigate = useNavigate();

    function handleClick(path) {
        console.log('path::', path);
        navigate(path);
    };

    return <Fragment>
        <aside className={`sidebar ${props.open == true ? 'active' : 'slim'}`}>
            <div className="sd-header">
                <img
                    className="img-thumbnail mx-auto d-block mb-2"
                    src={Logo}
                    alt="logo" />
            </div>
            <div className="sd-body">
                <ul className="text-white text-light">
                    <li onClick={() => { handleClick('/dashboard') }} ><i className="p-1 w-25 fa fa-dashboard fa-dashboard" /> <a className="sd-link text-white">DashBoard</a></li>
                    <li onClick={() => { handleClick('/profile') }} ><i className="p-1 w-25 fa fa-user fa-user" /><a className="sd-link text-white">Profile</a></li>
                    <li onClick={() => { handleClick('/calendar') }} ><i className="p-1  w-25 fa fa-calendar fa-calendar" /> <a to="calendar" className="sd-link text-white">Calendar</a></li>
                </ul>
            </div>
        </aside>
    </Fragment>

}


export default SideMenu;
