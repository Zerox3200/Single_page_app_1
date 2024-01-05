import { Title } from '../Title/Title';
import './Features.scss';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export function Features() {
    const [ref, InView] = useInView({
        triggerOnce: true,
        threshold: 0.2
    });
    return (
        <div className="Features container">
            <Title Title="Features" Desc='Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit' />
            <div className="Features_inside" ref={ref}>
                <motion.div className="Features_inside_desc" initial={{ opacity: 0, scale: 0 }}
                    animate={InView && { opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.5,
                        ease: "linear",
                    }}>
                    <h3>Corporis temporibus maiores provident</h3>
                    <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident.
                    </p>
                    <button className='btn'>Get Started</button>
                </motion.div>
                <motion.div
                    className="Features_inside_img"
                    initial={{ opacity: 0 }}
                    animate={InView && { opacity: 1 }}
                    transition={{
                        duration: 0.5,
                        ease: "easeInOut",
                    }}
                >
                </motion.div>
            </div>
        </div>
    )
}