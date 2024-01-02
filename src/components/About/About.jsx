import './About.scss';
import Client1 from './client-1.png';
import Client2 from './client-2.png';
import Client3 from './client-3.png';
import Client4 from './client-4.png';
import Client5 from './client-5.png';
import Client6 from './client-6.png';
import { motion } from "framer-motion"
import { useInView } from 'react-intersection-observer';

export function AboutHeader() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });
    return (
        <motion.div className="About" ref={ref} id='About'>
            <motion.img src={Client1} alt="" initial={{ opacity: 0 }} animate={inView && { opacity: 1 }} transition={{
                ease: "easeOut",
                duration: 0.5,
                delay: 0.2
            }} />
            <motion.img src={Client2} alt="" initial={{ opacity: 0 }} animate={inView && { opacity: 1 }} transition={{
                ease: "easeOut",
                duration: 0.5,
                delay: 0.2
            }} />
            <motion.img src={Client3} alt="" initial={{ opacity: 0 }} animate={inView && { opacity: 1 }} transition={{
                ease: "easeOut",
                duration: 0.5,
                delay: 0.2
            }} />
            <motion.img src={Client4} alt="" initial={{ opacity: 0 }} animate={inView && { opacity: 1 }} transition={{
                ease: "easeOut",
                duration: 0.5,
                delay: 0.2
            }} />
            <motion.img src={Client5} alt="" initial={{ opacity: 0 }} animate={inView && { opacity: 1 }} transition={{
                ease: "easeOut",
                duration: 0.5,
                delay: 0.2
            }} />
            <motion.img src={Client6} alt="" initial={{ opacity: 0 }} animate={inView && { opacity: 1 }} transition={{
                ease: "easeOut",
                duration: 0.5,
                delay: 0.2
            }} />
        </motion.div>
    )
}