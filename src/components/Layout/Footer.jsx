import React, { useContext } from 'react';
import {FaFacebook,FaYoutube,FaLinkedin} from 'react-icons/fa'
import {RiInstagramFill} from 'react-icons/ri'
import { Context } from '../../main';
import { Link } from 'react-router-dom';



const  Footer = () => {

    const { isAuthorized, setIsAuthorized ,user} = useContext(Context); 
    return ( 
        <>
        <footer className={isAuthorized?"footerShow":"footerHide"}>
            <div>
                &copy; All Rights Reserved by CodewithArshad
            </div>
            <div>
                <Link to={"/"} target={"_blank"}>
                    <FaFacebook/>
                </Link>
                <Link to={"/"} target={"_blank"}>
                    <FaYoutube/>
                </Link>
                <Link to={"/"} target={"_blank"}>
                    <FaLinkedin/>
                </Link>
                <Link to={"/"} target={"_blank"}>
                    <RiInstagramFill/>
                </Link>

            </div>
        </footer>
        </>
     );
}

export default Footer;