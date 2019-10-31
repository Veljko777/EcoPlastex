import React from "react";
import {connect} from "react-redux";
import {fetchPosts} from "../../actions"
import Footer from "./Footer"
import {Link} from "react-router-dom"


class PVCkese extends React.Component{
   componentDidMount(){
       this.props.fetchPosts();
       
   }
   
   Proizvodi(){
       return this.props.proizvodi.map(proizvod=>{
           if(proizvod.kategorija==="pvc kese"){
                return(
                    <div key={proizvod.id}>
                        <Link className="link" to={`/specifikacijaproizvoda${proizvod.tag}/${proizvod.id}`}>
                        <div className="grid-item">
                        <div className="card cards" >
                        <div className="card-body">
                            <h5 className="card-title text-center">{proizvod.naziv}</h5>
                            <p className="text-center card-text">{proizvod.dimenzija}</p>
                        </div>
                            <div className="m-1">
                                <img src={proizvod.img} className="card-img-top" alt="..."/> 
                            </div>
                        </div>
                        </div>
                        </Link>
                    </div>
           )}
           return null
       })
   }
   
    render(){
        return(
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
                                <Link className="nav-link"  to="/picakutije">PICA KUTIJE</Link>
                                </li>
                                <li className="nav-item dropdown navItem">
                                <p className="nav-link dropdown-toggle"   id="navbarDropdown-active"  role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    PVC
                                </p>
                                <div className="dropdown-menu p-0" id="dropdown-item" aria-labelledby="navbarDropdown">
                                    <Link className="dropdown-item" id="active" to="/pvckese" >KESE</Link>
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
                    <div className="container">
                    <h1>PVC kese:</h1>
                    <div className="grid-container">
                    {this.Proizvodi()}
                    </div>
                    <div className="mb-5 text-right">
                        <Link to="/kontakt" className=" link-btn" href="kontakt.html">Kontaktirajte nas <i className="fa fa-arrow-right"></i></Link>
                    </div>
                </div>
                <Footer/>
            </div>
           )

    }
}

const mapStateToProps=(state)=>{
    return{
        proizvodi:Object.values(state.proizvodi)
        
    };
}

export default connect(mapStateToProps, {fetchPosts})(PVCkese)