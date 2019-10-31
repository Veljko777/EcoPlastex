import React from "react";
import {Link} from "react-router-dom";
import Footer from "./Footer"

class SaStampom extends React.Component{
    render(){
        return (
            <div className="wrapper">
                <div className="row" id="navbar">
                    <div className="col-md-1 col-5">
                        <Link to="/">
                        <img className=" pl-3 pt-2 pb-1" id="logo" src="./images//logo1.png" alt=""/>
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
                            <Link className="nav-link" id="active" to="/papirnekesesastampom">PAPIRNE KESE SA ŠTAMPOM</Link>
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
                <h1 className="text-center mt-1">Vaša reklama je naša briga</h1>
                <hr className="mt-0"/>
                <div className="container">
                    
                    
                    <div className="row mt-5">
                    
                    <div className="col-lg-7 text-center ">
                        <img  src="./images/kesalogo6.png"  alt=""/>
                    </div>
                    <div className="col-lg-5  text-left">
                        <h2>Papirne kese sa štampom</h2>
                        <p className="mt-5">
                            Nudimo fleksibilnu štampu, maksimalno do dve boje na belim i smeđim papirnim kesama svih veličina, 
                            minimalan broj kesa je od 250 komada. Pošaljite nam svoj logotip u vektorskom 
                            formatu na ppa.ecoplastex@gmail.com kako bismo mogli da napravimo formu za štampanje, što je za vas samo jednokratni trošak 
                            od 20 do 40 evra (u zavisnosti od veličine logotipa). Za izradu kesa potrebno je oko 7 do 10 radnih dana.
                            </p>
                        <h4 className="mt-5">Specifikacija:</h4>
                        <div className="mt-2">
                            <p className="mb-0 pb-1">Moguće dimenzije: zavisno od izbora papirne kese</p>
                            <p className="mb-0 pb-1">Materijal: kraft papir</p>
                            <p className="mb-0 pb-1">Boja kese: braon, bela</p>
                            <p className="mb-0 pb-1">Boja štampe: maximum 2 boje po izboru</p>
                            <p className="mb-3 pb-1">Tiraž: do 5000 komada</p>
                            
                            
                        </div>
                    </div>
                    </div>
                    
                    <h3 className="mt-5 text-center">Galerija:</h3>
                    <div className="row print-gallery" >
                        <div className="col-md-3 col-6 m-0 p-0">
                            <div className="m-3">
                            <img src="./images/kesa3.jpg" className="card-img-top" alt="..."/>
                            </div>
                            <div className="m-3">
                            <img src="./images/kesa5.jpg" className="card-img-top" alt="..."/>
                            </div>
                        </div>
                        <div className="col-md-3 col-6 m-0 p-0">
                            <div className="m-3">
                            <img src="./images/kesa5.jpg" className="card-img-top" alt="..."/>
                            </div>
                            <div className="m-3">
                            <img src="./images/kesa3.jpg" className="card-img-top" alt="..."/>
                            </div>
                        </div>
                        <div className="col-md-3 col-6 m-0 p-0">
                            <div className="m-3">
                            <img src="./images/kesa8.jpg" className="card-img-top" alt="..."/>
                            </div>
                            <div className="m-3">
                            <img src="./images/kesa3.jpg" className="card-img-top" alt="..."/>
                            </div>
                        </div>
                        <div className="col-md-3 col-6 m-0 p-0">
                            <div className="m-3">
                            <img src="./images/kesa3.jpg" className="card-img-top" alt="..."/>
                            </div>
                            <div className="m-3">
                            <img src="./images/kesa8.jpg" className="card-img-top" alt="..."/>
                            </div>
                        </div>
                    </div>
                    <div className="mb-5 text-right">
                        <Link className=" link-btn" to="/kontakt">Kontaktirajte nas <i className="fa fa-arrow-right"></i></Link>
                    </div>
                    
                </div>
                <Footer/>
            </div>
        )
    }
}


export default SaStampom;