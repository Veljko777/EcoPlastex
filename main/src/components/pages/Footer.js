import React from "react";


const Footer=()=>{
    return (
        <footer className="footer">
            <div>
                <ul className="text-center mb-2">
                <img src="/images/logo1.png" className="mb-3 mt-2" id="footer-logo"  alt=""/>
                <li><i className="fa fa-phone"></i> +381 63 836 6155</li>
                <li><i className="fa fa-user"></i> Branko Mihailović</li>
                <li><i className="fa fa-map-marker"></i> Straža, 15307 Lešnica</li>
                <li>email: ppa.ecoplastex@gmail.com</li>
                </ul>
            </div>
            <div className="text-right pr-2 footerend">
                <p className="mb-0">&copy; 2019. ECO PLASTEX. Sva prava zadržana</p>
            </div>
        </footer>
    )
};

export default Footer;