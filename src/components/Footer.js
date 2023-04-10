import React from 'react';
import { SocialIcon } from 'react-social-icons';

export default function Footer() {
    const footerLinks = [
        { 
            name: "twitter",
            url: "https://twitter.com/jaketrent",
        },
        { 
            url: "https://linkedin.com/in/jaketrent" 
        },
    ];

    const styles = { height: 40, width: 40 }
    const nameStyles = { marginTop: 10 }
    return(
        <footer className="page-footer">
                <ul>
                    <li style={nameStyles}>
                        Dan Morgan
                    </li>
                    <li>
                        <SocialIcon style={styles} url="https://twitter.com/jaketrent" />
                    </li>
                    <li>
                        <SocialIcon style={styles} url="https://linkedin.com/in/jaketrent"  />
                    </li>
                    
                </ul>
                
        </footer>
    )
}