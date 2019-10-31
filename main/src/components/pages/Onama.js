import React from "react";
import {Link} from "react-router-dom";
import Footer from "./Footer";


class Onama extends React.Component{
    render(){
        return(
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
                            <Link className="nav-link" id="active" to="/onama">O NAMA</Link>
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
                <div className="onama-container">
                        <h1 className="text-center">Papirne kese sa štampom</h1>
                    <div className="row">
                        <div className="col-md-6 col-12 text-center">
                        <img src="./images/kesa3.jpg" alt=""/>
                        </div>
                        <div className="col-md-6 col-12">
                        <p>Nudimo fleksibilnu štampu, maksimalno do dve boje na belim i smeđim papirnim kesama svih veličina, 
                            minimalan broj kesa je od 250 komada. Pošaljite nam svoj logotip u vektorskom 
                            formatu na ppa.ecoplastex@gmail.com kako bismo mogli da napravimo formu za štampanje, što je za vas samo jednokratni trošak 
                            od 20 do 40 evra (u zavisnosti od veličine logotipa). Za izradu kesa potrebno je oko 7 do 10 radnih dana.
                        </p>
                        </div>
                    </div>
                    </div>
                    <hr/>
                    <div className="onama-container">
                        <h1 className="text-center">Papirne kese</h1>
                    <div className="row">
                        <div className="col-md-6 col-12">
                        <p>
                            U ponudi papirne kese, sa ili bez ručke, različitih dimenzija i vrsta ručki. Papirne kese su zauzele veliku primenu poslednjih godina 
                            zbog svoje razgradivosti i očuvanja ekologije u svetu. Takodje mogućnost stampe na papirnim kesama daje veliku prednost u odnosu na 
                            pvc kese zbog reklamiranja i unikatnosti ambalaže. Pored toga zbog čvrste ručke (ravne ili upredene) nošenje je dosta olakšano, a sam
                            kvalitet izrade kesa omogućava veliki kapacitet svake kese.
                        </p>
                        </div>
                        <div className="col-md-6 col-12 text-center">
                        <img src="./images/kese3.jpg"  alt=""/>
                        </div>
                    </div>
                    </div>
                    <hr/>
                    <div className="onama-container">
                        <h1 className="text-center">Pica kutije</h1>
                    <div className="row">
                        <div className="col-md-6 col-12 text-center">
                        <img src="./images/picakutija1.jpg" alt=""/>
                        </div>
                        <div className="col-md-6 col-12">
                        <p>Takodje u ponudi imamo različite vrste pica kutija.
                        </p>
                        </div>
                    </div>
                    </div>
                    <hr/>
                    <div className="onama-container">
                    <h1 className="text-center">Proizvodnja plastične ambalaže</h1>
                    <div className="row">
                        <div className="col-md-6 col-12">
                        <p>Prva delatnost Eco Plastexa je proizvodnja plastične ambalaže, kesa i vreća. Iako papirne kese zauzimaju sve veći stepen upotrebe,
                            plastična ambalaža još uvek ima široku upotrebu. Naš asortiman plastične ambalaže možete pogledati u sekciji PVC.
                        </p>
                        </div>
                        <div className="col-md-6 col-12 text-center">
                        <img src="./images/pvckese4.jpg" alt=""/>
                        </div>
                    </div>
                    </div>


                <Footer/>
            </div>
        )
    }
}

export default Onama;