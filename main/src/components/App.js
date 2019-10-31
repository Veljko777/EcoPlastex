import React from "react";
import {Router, Route, Switch} from "react-router-dom";

import MainPage from "./pages/MainPage"
import Onama from "./pages/Onama"
import SaStampom from "./pages/SaStampom"
import PicaKutije from "./pages/PicaKutije"
import PVCkese from "./pages/PVCkese"
import PVCvrece from "./pages/PVCvrece"
import SaRavnomRuckom from "./pages/SaRavnomRuckom"
import SaUnutrasnjom from "./pages/SaUnutrasnjom"
import SaSpoljasnjom from "./pages/SaSpoljasnjom"
import SaUpredenom from "./pages/SaUpredenom"
import BezRucke from "./pages/BezRucke"
import SpecifikacijaProizvoda from "./pages/SpecifikacijaProizvoda"
import Kontakt from "./pages/Kontakt"
import PageNotFound from "./pages/PageNotFound"
import history from "../history"



const App = ()=>{
    return (
        <div>
            <Router history ={history}>
                <Switch>
                    <Route path="/" exact component={MainPage}/>
                    <Route path="/onama" exact component= {Onama}/>
                    <Route path="/papirnekesesastampom" exact component= {SaStampom}/>
                    <Route path="/picakutije" exact component= {PicaKutije}/>
                    <Route path="/pvckese"exact  component= {PVCkese}/>
                    <Route path="/pvcvrece" exact component= {PVCvrece}/>
                    <Route path="/papirnekesesaravnomruckom" exact component= {SaRavnomRuckom}/>
                    <Route path="/papirnekesesaunutrasnjomruckom" exact component= {SaUnutrasnjom}/>
                    <Route path="/papirnekesesaspoljasnjomruckom" exact component= {SaSpoljasnjom}/>
                    <Route path="/papirnekesesaupredenomruckom" exact component= {SaUpredenom}/>
                    <Route path="/papirnekesebezrucke" exact component= {BezRucke}/>
                    <Route path="/kontakt"exact  component= {Kontakt}/>
                    <Route path="/specifikacijaproizvoda" exact  component= {PageNotFound}/>
                    <Route path="/specifikacijaproizvoda:tag/" exact  component= {PageNotFound}/>
                    <Route path="/specifikacijaproizvoda:tag/:id"  component= {SpecifikacijaProizvoda}/>
                </Switch>
            </Router>
        </div>
    )
}

export default App;