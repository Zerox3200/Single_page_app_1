import { useEffect, useState } from 'react';
import './NumberCounter.scss';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export function NumberPlus({ n, Name }) {
    const [count, setCount] = useState(0);
    const [ref, InView] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    const [StartCounter, setStartCounter] = useState(false);

    useEffect(() => {
        if (InView) {
            setStartCounter(true)
        }
    }, [StartCounter, InView])

    useEffect(() => {
        const interval = setInterval(() => {
            if (count < n && StartCounter) {
                setCount(prevCount => prevCount + 1);
            } else {
                setStartCounter(false);
                clearInterval(interval);
            }
        }, 0.1);
        return () => {
            clearInterval(interval);
        };
    }, [count, n, StartCounter]);

    return (
        <motion.h1 className='Counting' ref={ref}
            initial={{ opacity: 0, y: 50 }} animate={InView && { opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", y: { duration: 1 } }}>{count}<span>{Name}</span></motion.h1>
    )
}