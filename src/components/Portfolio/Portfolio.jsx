import { useRef, useState } from 'react';
import { Title } from '../Title/Title';
import images from './Images'
import './Portfolio.scss';
import { AnimatePresence, motion, useInView } from "framer-motion"
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import DescriptionIcon from '@mui/icons-material/Description';
import Swal from 'sweetalert2';

export function Portfolio() {
    const ref = useRef();
    const InView = useInView(ref, { once: true });
    const [ActiveAll, setActiveAll] = useState(true);
    const [ActiveApp, setActiveApp] = useState(false);
    const [ActiveCard, setActiveCard] = useState(false);
    const [ActiveWeb, setActiveWeb] = useState(false);
    const [DisplayGallary, setDisplayGallary] = useState(images.items);

    const ClickHandeler = (filtering) => {
        if (filtering === 'all') {
            setDisplayGallary(images.items);
            return;
        }

        const FilteredData = images.items.filter((ele) => {
            return ele.category === filtering;
        })
        setDisplayGallary(FilteredData);
    }

    const ZoomHandler = (Card) => {
        Swal.fire({
            showConfirmButton: false,
            customClass: "Sweet",
            html: Card,
        });
    }
    return (
        <div className="Main_Portfolio container" id='Portfolio'>
            <Title Title="Portfolio"
                Desc="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"
            />
            <div className="Portfolio_filter" ref={ref}>
                <div className="Filter_Titlies">
                    <span className={ActiveAll && 'Active'}
                        onClick={() => {
                            setActiveAll(true);
                            setActiveApp(false);
                            setActiveCard(false);
                            setActiveWeb(false);
                            ClickHandeler('all');
                        }}>All</span>
                    <span className={ActiveApp && 'Active'}
                        onClick={() => {
                            setActiveApp(true);
                            setActiveAll(false);
                            setActiveCard(false);
                            setActiveWeb(false);
                            ClickHandeler('App');
                        }}>App</span>
                    <span className={ActiveCard && 'Active'}
                        onClick={() => {
                            setActiveCard(true);
                            setActiveAll(false);
                            setActiveApp(false);
                            setActiveWeb(false);
                            ClickHandeler('Card');
                        }}>Card</span>
                    <span className={ActiveWeb && 'Active'}
                        onClick={() => {
                            setActiveWeb(true);
                            setActiveAll(false);
                            setActiveApp(false);
                            setActiveCard(false);
                            ClickHandeler('Web');
                        }}>Web</span>
                </div>
                <div className="Gallary" >
                    <AnimatePresence>
                        {DisplayGallary.map((ele) => {
                            return (
                                <motion.div className="Porfolio" key={ele.id} initial={{ opacity: 0, transform: "scale(0)" }}
                                    animate={InView && { opacity: 1, transform: "scale(1)" }}
                                    exit={{ transform: "scale(0)" }}>
                                    <img src={ele.img} alt="Type" />
                                    <div className="Portfolio_Description">
                                        <div className="Portfolio_Description_title">
                                            <h5>{ele.name}</h5>
                                            <p>Lorem ipsum dolor sit amet.</p>
                                        </div>
                                        <div className="Portfolio_Description_ZoomDetails">
                                            <ZoomInIcon onClick={() => {
                                                ZoomHandler(`
                                                <div class="Porfolio">
                                                   <img src='${ele.img}' alt="Type" />
                                                   <div class="Portfolio_Description">
                                                      <div class="Portfolio_Description_title">
                                                         <h5>${ele.name}</h5>
                                                         <p>Lorem ipsum dolor sit amet.</p>
                                                      </div>
                                                    </div>
                                                </div>`);
                                            }}
                                            />
                                            <DescriptionIcon />
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    )
}