import React from "react";

const Footer = () =>{
    return (
        
        <div className="col text-center bg-dark text-white" id="footer">
            <div className="container p-4">
                <section>
                <a className="btn btn-outline-light btn-floating m-1 rounded-circle" href="https://github.com/bertapsan" target="_blank" role="button">
                    <i className="bi bi-github" alt="github icon to link bertapsan profile"></i>
                </a>
                <a className="btn btn-outline-light btn-floating m-1 rounded-circle" href="https://www.linkedin.com/in/bertaplumasanjurjo/?locale=en_US" target="_blank" role="button">
                    <i className="bi bi-linkedin" alt="linkedin icon to link bertapsan profile"></i>
                </a>
                <a className="btn btn-outline-light btn-floating m-1 rounded-circle" href="mailto:bertapsan@gmail.com" role="button">
                    <i className="bi bi-envelope" alt="email icon to send an email to bertapsan"></i>
                </a>
                </section>
            </div>
        </div>
        
        
    )
}

export default Footer;