import './Footer.scss';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';

export function Footer() {
    return (
        <div className="Footer">
            <div className="Footer_pt1">
                <div className="Footer_pt1_1">
                    <h2>Append</h2>
                    <p>Cras fermentum odio eu feugiat lide par naso tierra.
                        Justo eget nada terra videa magna derita valies darta
                        donna mare fermentum iaculis eu non diam phasellus.
                    </p>
                    <div className="Footer_pt1_1_Icons">
                        <TwitterIcon />
                        <FacebookIcon />
                        <InstagramIcon />
                        <LinkedInIcon />
                    </div>
                </div>
                <div className="Footer_pt1_2">
                    <p>Useful Links</p>
                    <ul>
                        <li><a href='#Intro'>Home</a></li>
                        <li><a href='#About'>About</a></li>
                        <li><a href='#Service'>Services</a></li>
                        <li><a href='#Portfolio'>Portfolio</a></li>
                        <li><a href='#Team'>Team</a></li>
                        <li><a href='#Contact'>Contact</a></li>
                    </ul>
                </div>
                <div className="Footer_pt1_3">
                    <p>Useful Links</p>
                    <ul>
                        <li><Link>Web Design</Link></li>
                        <li><Link>Web Development</Link></li>
                        <li><Link>Product Management</Link></li>
                        <li><Link>Marketing</Link></li>
                        <li><Link>Graphic Design</Link></li>
                    </ul>
                </div>
                <div className="Footer_pt1_4">
                    <p>Contact Us</p>
                    <ul>
                        <li>A108 Adam Street</li>
                        <li>New York, NY 535022</li>
                        <li>United States</li>
                    </ul>
                    <span><b>Phone:</b> +1 5589 55488 55</span>
                    <span><b>Email:</b> info@example.com</span>
                </div>
            </div>
            <div className="Footer_pt2">
                <p>© Copyright <b>Append</b> All Rights Reserved</p>
                <span>Designed by dev.Ziad Ahmed</span>
            </div>
        </div>
    )
}