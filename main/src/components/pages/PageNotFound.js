import React from "react";
import {Link} from "react-router-dom"

import Footer from "./Footer"

class PageNotFound extends React.Component{
    render(){
        
        return (
            <div className="wrapper">
                <div className="row" id="navbar">
                    <div className="col-md-1 col-5">
                        <Link to="/">
                        <img className=" pl-3 pt-2 pb-1" id="logo" src="/images/logo1.png" alt=""/>
                        </Link>
                    </div>
                    <div className="col-md-11 col-7 text-right">
                        <div className="pr-2 ">
                            <div>
                                <ul className="language">
                                <li id="language-active">SR</li>
                                <li>EN</li>
                                <li>FR</li>
                                <li>DE</li>
                                </ul>
                            </div>
                        </div>
                    <div>
                    <nav className="navbar navbar-expand-lg navbar-light d-flex justify-content-end pt-4" > 
                        <button className="navbar-toggler ml-5" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse ml-5 " id="navbarSupportedContent">
                        <ul className="navbar-nav ml-3" id="navbar" >
                            <li className="nav-item navItem ">
                            <Link className="nav-link"  to="/">POČETNA</Link>
                            </li>
                            <li className="nav-item navItem">
                            <Link className="nav-link" to="/onama">O NAMA</Link>
                            </li>
                            <li className="nav-item navItem ">
                            <Link className="nav-link" to="/papirnekesesastampom">PAPIRNE KESE SA ŠTAMPOM</Link>
                            </li>
                            
                            <li className="nav-item dropdown navItem">
                            <p className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                PAPIRNE KESE
                            </p>
                            <div className="dropdown-menu p-0" id="dropdown-item" aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item" to="/papirnekesesaravnomruckom" >SA RAVNOM RUČKOM:</Link>
                                <Link className="dropdown-item pl-5 " to="/papirnekesesaunutrasnjomruckom">- UNUTRAŠNJOM</Link>
                                <Link className="dropdown-item pl-5" to="/papirnekesesaspoljasnjomruckom">- SPOLJAŠNJOM</Link>
                                <hr className="m-0 p-0"/>
                                <Link className="dropdown-item" to="/papirnekesesaupredenomruckom">SA UPREDENOM RUČKOM</Link>
                                <hr className="m-0 p-0"/>
                                <Link className="dropdown-item" to="/papirnekesebezrucke">BEZ RUČKE</Link>
                            </div>
                            </li>
                            <li className="nav-item navItem">
                            <Link className="nav-link" to="/picakutije">PICA KUTIJE</Link>
                            </li>
                            <li className="nav-item dropdown navItem">
                            <p className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                PVC
                            </p>
                            <div className="dropdown-menu p-0" id="dropdown-item" aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item" to="/pvckese" >KESE</Link>
                                <hr className="m-0 p-0"/>
                                <Link className="dropdown-item" to="/pvcvrece">VREĆE</Link>
                            </div>
                            </li>
                            
                            <li className="nav-item navItem">
                            <Link className="nav-link" to="/kontakt">KONTAKT</Link>
                            </li>
                        </ul>      
                        </div>
                    </nav>
                    </div>  
                </div>
                </div>
                <hr className="m-0 mt-1"></hr>
                <div className="text-center mb-5 mt-5" style={{height:"250px"}}>
                    <h1 className="">Stranica nije pronađena</h1>
                    <Link className="link-btn" to="/">Nazad na početnu</Link>

                </div>
            <Footer/>
            </div> //end of wrapper
        );
    }
}

export default PageNotFound;