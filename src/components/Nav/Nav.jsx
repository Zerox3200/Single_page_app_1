import './Nav.scss';
import Swal from 'sweetalert2';
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Hide, Showing } from '../../rtk/Slice';
export function Nav() {
    const dispatch = useDispatch();
    const ShowButton = useRef();
    const [Show, setShow] = useState(true);
    const ShowSide = () => {
        setShow(Show ? false : true);
        Swal.fire({
            html: `
            <div class="SideNav">
                 <a href='#Intro'>Home</a>
                 <a href='#About'>About</a>
                 <a href='#Service'>Services</a>
                 <a href='#Portfolio'>Portfolio</a>
                 <a href='#Team'>Team</a>
                 <a href='#Contact'>Contact</a>
            </div>
        `,
            customClass: 'swal-wide',
            showCloseButton: true,
            showConfirmButton: false
        }).then((result) => {
            if (result.dismiss) {
                setShow(true)
            }
        });
    }
    const [Scroll, setScroll] = useState(false);
    window.onscroll = () => {
        setScroll(window.pageYOffset === 0 ? false : true);
        if (window.pageYOffset === 0) {
            dispatch(Hide());
        } else if (window.pageYOffset > 0) {
            dispatch(Showing());
        }
        return () => window.onscroll = null;
    }

    return (
        <>
            <nav className={Scroll ? 'navBar Scrolled' : 'navBar'}>
                <h4>Append<span>.</span></h4>
                <div className="center">
                    <a href='#Intro'>Home</a>
                    <a href='#About'>About</a>
                    <a href='#Service'>Services</a>
                    <a href='#Portfolio'>Portfolio</a>
                    <a href='#Team'>Team</a>
                    <a href='#Contact'>Contact</a>
                </div>
                <div className="right">
                    <a className='btn NavButton' href='#About'>Get Started</a>
                    <div className="sideNavButton" onClick={ShowSide} style={{ display: !Show ? 'none' : 'flex' }} ref={ShowButton}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

            </nav>
        </>
    )
}