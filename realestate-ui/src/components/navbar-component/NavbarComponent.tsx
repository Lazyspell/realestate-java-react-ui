import React from 'react';
import {Link} from 'react-router-dom';
import {Users} from '../../models/User';


export interface INavbarProps{
    currentUser: Users | undefined;
    login:(u: string, p: string, action: string) => void
}

export default function NavbarComponent(props: INavbarProps){

    function isRole(roles: string[]){
        for(let i = 0; i <roles.length; i++){
            if(props.currentUser?.role.includes(roles[i])) return true;
        };
        return false;
    }

    function logout(){
        props.login("","", "logout");
    }

    return( 
        <>
            <div data-test = "navbar-top" className = "navbar-top">
                <div className = "navbar-top-sub">
                    <Link to = "/"><div className = "logo"></div></Link>
                    <div className = "navbar-top-title">Real Estate Investment</div>
                </div>

                <div className = "navbar-top-sub-right">
                    {/* <Link onClick={logout} to=''>Logout</Link> */}
                    {/* <SearchComponent /> */}
                </div>
            </div>
            <div data-test="navbar-side" className = "navbar-side">
                <Link to = "/">
                    <a><div className = "navbar-side-btn"></div></a>
                </Link>
                <Link to = "/info">
                    <a><div className = "navbar-side-bth">Housing Info</div></a>
                </Link>
                <Link to = "/login" onClick = {logout}>
                    <a><div className = "navbar-side-btn">Logout</div></a>
                </Link>
            </div>
        </>
    );
}