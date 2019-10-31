import React from "react";
import {Link} from "react-router-dom"
import {connect} from "react-redux"
import {createContact} from "../../actions"
import ContactForm from "./ContactForm"

class Kontakt extends React.Component{
    onSubmit=(formValues)=>{
        this.props.createContact(formValues);
    }
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
                                <Link className="dropdown-item"  to="/papirnekesesaravnomruckom" >SA RAVNOM RUČKOM:</Link>
                                <Link className="dropdown-item pl-5 " to="/papirnekesesaunutrasnjomruckom">- UNUTRAŠNJOM</Link>
                                <Link className="dropdown-item pl-5"  to="/papirnekesesaspoljasnjomruckom">- SPOLJAŠNJOM</Link>
                                <hr className="m-0 p-0"/>
                                <Link className="dropdown-item"  to="/papirnekesesaupredenomruckom">SA UPREDENOM RUČKOM</Link>
                                <hr className="m-0 p-0"/>
                                <Link className="dropdown-item"  to="/papirnekesebezrucke">BEZ RUČKE</Link>
                            </div>
                            </li>
                            <li className="nav-item navItem">
                            <Link className="nav-link"  to="/picakutije">PICA KUTIJE</Link>
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
                            <Link className="nav-link" id="active" to="/kontakt">KONTAKT</Link>
                            </li>
                        </ul>      
                        </div>
                    </nav>
                    </div>  
                </div>
                </div>
                <hr className="m-0 mt-1"></hr>
                <div className="container ">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="mt-5 mb-3 ">
                                <h1>ECO PLASTEX</h1>
                                <h3>Štampa na papirnim kesama, papirne kese i proizvodnja plastične ambalaže</h3>
                                <h4>Direktor: Branko Mihailović</h4>
                                <h4>Adresa: Straža, 15307 Lešnica</h4>
                                <h4><i className="fa fa-phone"></i> +381 63 836 6155</h4>
                                <h4>email: ppa.ecoplastex@gmail.com</h4>
                                <br/>
                                <h4>Zapratite nas:</h4>
                                <Link to="#" className="mr-3 "><i className="fa fa-facebook-square fa-2x" ></i></Link>
                                <Link to="#" ><i className="fa fa-instagram fa-2x"></i></Link>   
                                <div>
                                <h4 className="mt-5">Kako do nas?</h4>
                                </div>
                                <div >
                                    <iframe title="mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d305783.222590058!2d19.170842401739094!3d44.59837021533418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475bdea822e494c9%3A0xc1bfe12c0bc1442c!2z0KHRgtGA0LDQttCwLCDQodGA0LHQuNGY0LA!5e0!3m2!1ssr!2sus!4v1572538435831!5m2!1ssr!2sus" width="400" height="400" frameBorder="0" style={{border:"0"}} allowFullScreen=""></iframe>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <h2 className=" mt-5 mb-4">Kontaktirajte nas:</h2>
                            <ContactForm onSubmit={this.onSubmit}></ContactForm>
                        </div>
                    </div>
                    <div className="message" >Poruka je poslata</div>
                    <div className="name-input" >Unos brojeva nije dozvoljen</div>
                    
                </div>
                <footer className="footer mt-5 ">
                    <div className="text-center ">
                        <p className="pb-2 mb-0">&copy; 2019. ECO PLASTEX. Sva prava zadrzana</p>
                    </div>
                </footer>
            </div>
        )
    }
}

export default connect(null, {createContact}) (Kontakt);