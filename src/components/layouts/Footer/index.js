import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import useStyles from './footer-jss'

const Footer = () =>{
    const classes = useStyles()
    return(
        <>
        <footer className={`${classes.footer}`}>
            <div className="container">
                <h4>Crafted with ❤ By {' '}
                <a href="https://github.com/SidAhmedSahraoui/Helper">
                    <FontAwesomeIcon className='icon' icon={faGithub} />
                </a>
                </h4>
                <p>Copyright &copy; 2022 Helper</p>
            </div>
        </footer>
        </>
    )
}
export default Footer;