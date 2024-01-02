import { useRef } from 'react';
import './Connect.scss';
import { motion, useInView } from 'framer-motion';

export function Connect() {
    const ref = useRef();
    const InView = useInView(ref, { once: true });
    return (
        <div className="Connect" ref={ref}>
            <motion.h2
                initial={{ opacity: 0, scale: 0 }}
                animate={InView && { opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >Call To Action</motion.h2>
            <motion.p initial={{ opacity: 0, scale: 0 }}
                animate={InView && { opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </motion.p>
            <motion.button className='btn' initial={{ opacity: 0, scale: 0 }}
                animate={InView && { opacity: 1, scale: 1 }}
                transition={{ duration: 0.2, ease: "easeOut" }}>Call To Actions</motion.button>
        </div>
    )
}