import Header from './Header';
import React from 'react';
import styles from '../styles/index.module.css';

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <Header />
            {children}

            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <footer className={styles.footer}>  
                <div className={styles.pages}>      
                    <h3>Pages</h3>  
                    <a href="/blogs">Works</a>            
                </div>             
                <div className={styles.social}> 
                    <h3>Follow us</h3>    
                    <a href="www.facebook.com" target="_blanck"><i className="fab fa-facebook-f"></i></a>       
                    <a href="https://www.linkedin.com/" target="_blanck"><i className="fab fa-linkedin-in"></i></a>       
                    <a href="https://www.linkedin.com/" target="_blanck"><i className="fab fa-instagram"></i></a>
                    <a href="https://www.linkedin.com/" target="_blanck"><i className="fab fa-twitter"></i></a>
                </div>
                <hr />
                <p style={{textAlign : 'center'}}>Copyright &copy; 2022 Fab5. All rights reserved</p>      
            </footer>
        </React.Fragment>
    );
};


export default Layout;
