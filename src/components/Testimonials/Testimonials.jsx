import './Testimonials.scss';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Images } from './TesImages';
import StarIcon from '@mui/icons-material/Star';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export function Testimonials() {
    const ref = useRef(null);
    const InView = useInView(ref, { once: true })
    return (
        <section className="Testimonials container">
            <motion.div className="Testimonials_pt1" ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={InView && { opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'backInOut' }}>
                <h2>Testimonials</h2>
                <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident.
                </p>
            </motion.div>
            <motion.div className="Testimonials_pt2" initial={{ opacity: 0, y: 50 }}
                animate={InView && { opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'backInOut', delay: 0.2 }}>
                <Splide aria-label="My Favorite Images" options={{
                    arrows: false,
                    type: 'loop',
                    perPage: 1,
                    autoplay: true
                }}>
                    {Images.map((ele) => {
                        return <SplideSlide key={ele.key}>
                            <div className="Card">
                                <figure className="Card_image">
                                    <img src={ele.img} alt="" srcset="" />
                                    <div className="imagesDesc">
                                        <h5>{ele.title}</h5>
                                        <span>{ele.Job}</span>
                                        <div className="Stars">
                                            <StarIcon />
                                            <StarIcon />
                                            <StarIcon />
                                            <StarIcon />
                                            <StarIcon /></div>
                                    </div>
                                </figure>
                                <div className="Card_paragraph">
                                    <p className='text-break'>"{ele.desc}"</p>
                                </div>
                            </div>
                        </SplideSlide>
                    })}
                </Splide>
            </motion.div>
        </section>
    )
}