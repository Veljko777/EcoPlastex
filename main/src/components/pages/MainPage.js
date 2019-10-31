import React from "react";
import {Link} from "react-router-dom"

import Footer from "./Footer"

class MainPage extends React.Component{
    render(){
        
        return (
            <div className="wrapper">
                <div className="row" id="navbar">
                    <div className="col-md-1 col-5">
                        <Link to="/">
                        <img className=" pl-3 pt-2 pb-1" id="logo" src="./images/logo1.png" alt=""/>
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
                            <Link className="nav-link" id="active" to="/">POČETNA</Link>
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
                <div className="part1">
                <div className="part1-container">
                    <div className="row ">
                        <div className="col-md-6 col-12 text-center  mb-5 mt-5">
                            <img src="./images/kesalogo6.png"  alt=""/>
                        </div>
                        <div className="col-md-6 col-12 mt-5   ">
                            <div className="main-title">
                                <h3 className="">  Štampa na papirnim kesama, papirne kese i proizvodnja plastične ambalaže</h3>
                                <h1 className="" id="main-text">Vaša reklama je naša briga!!!</h1>
                                <h5 className="">  Tiraž do 5 000 komada</h5>
                                <Link to="/onama"  className=" btn button mt-5">Detaljnije >>></Link>
                            </div>    
                        </div>
                    </div>
                </div>
            </div> 
            <div className="jumbotron p-0 ">
                <div className="autoplay1">
                    <img src="./images/kese2.jpg" alt=""/>
                    <img src="./images/kese3.jpg" alt=""/>
                    </div>
                </div>
                <div className="part2 pt-5">
                    <div className="part2-container">
                        <h1 className="text-center">Papirne kese</h1>
                        <div className="row">
                            <div className="col-md-3 col-6 m-0 p-0 "> 
                                <div className="card cards" >
                                    <div className="m-1">
                                    <Link to="/papirnekesesaunutrasnjomruckom">
                                        <img src="./images/kesaravnaiznutra2.jpg" className="card-img-top" alt="..."/>
                                    </Link>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title text-center">Papirne kese sa unutrašnjom ručkom</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-6 m-0 p-0"> 
                                <div className="card cards" >
                                    <div className="m-1">
                                        <Link to="/papirnekesesaspoljasnjomruckom">
                                            <img src="./images/kesaravnaspolja1.jpg" className="card-img-top" alt="..."/>
                                        </Link>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title text-center">Papirne kese sa spoljašnjom ručkom</h5>
                                    </div>
                                </div> 
                                
                            </div>
                            <div className="col-md-3 col-6 m-0 p-0"> 
                                <div className="card cards" >
                                        <div className="m-1">
                                            <Link to="/papirnekesesaupredenomruckom">
                                            <img src="./images/kesaupredena1.jpg" className="card-img-top" alt="..."/>
                                            </Link>
                                        </div>
                                        <div className="card-body">
                                        <h5 className="card-title text-center">Papirne kese sa upredenom ručkom</h5>
                                        </div>
                                    </div>
                            </div>
                            <div className="col-md-3 col-6 m-0 p-0"> 
                                <div className="card cards" >
                                    <div className="m-1">
                                        <Link to="/papirnekesebezrucke">
                                            <img src="./images/kesabezrucke1.jpg" className="card-img-top" alt="..."/>
                                        </Link>
                                    </div>
                                    <div className="card-body">
                                    <h5 className="card-title text-center">Kese bez ručke</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
                <hr/>
                <div className="gallery ">
                    <div><img className="slider-img" src="./images/kesabezrucke4.jpg" alt=""/></div>
                    <div><img className="slider-img" src="./images/kesabezrucke1.jpg" alt=""/></div>
                    <div><img className="slider-img" src="./images/kesaravnaiznutra2.jpg" alt=""/></div>
                    <div><img className="slider-img" src="./images/kesaravnaspolja2.jpg" alt=""/></div>
                    <div><img className="slider-img" src="./images/kesaravnaspolja3.jpg" alt=""/></div>
                    <div><img className="slider-img" src="./images/kesabezrucke4.jpg" alt=""/></div>
                    <div><img className="slider-img" src="./images/kesaupredena3.jpg" alt=""/></div>
                    <div><img className="slider-img" src="./images/kesabezrucke3.jpg" alt=""/></div>
                    <div><img className="slider-img" src="./images/kesaravnaiznutra2.jpg" alt=""/></div>
                </div>
                <hr/>
                <div className="part3">
                    <div className="part3-container">
                        <h1 className="text-center">Takođe u ponudi</h1>
                        <div className="row align-items-end">
                            <div className="col-md-4 ">
                                <div className="card cards " id="card" >
                                    <div className="m-1">
                                        <Link to="/pvckese">
                                            <img src="./images/pvckese2.jpg" className="card-img-top" alt="..."/>
                                        </Link>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title text-center">PVC kese</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card cards" id="card1" >
                                    <div className="m-1">
                                        <Link to="/picakutije">
                                            <img src="./images/picakutija1.jpg" className="card-img-top" alt="..."/>
                                        </Link>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title text-center">Pica kutije</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card cards " id="card" >
                                    <div className="m-1">
                                        <Link to="/pvcvrece">
                                            <img src="./images/pvcvrece1.jpg" className="card-img-top" alt="..."/>
                                        </Link>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title text-center">PVC vreće</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <Footer/>
            </div> //end of wrapper
        );
    }
}

export default MainPage;