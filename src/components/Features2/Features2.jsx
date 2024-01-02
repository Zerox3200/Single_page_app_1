import './Features2.scss';
import Feature2 from './../../img/features-light-3.jpg'
import CheckIcon from '@mui/icons-material/Check';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export function Features2() {
    const ref = useRef()
    const InView = useInView(ref, { once: true });
    return (
        <div className="Features2 container">
            <motion.img src={Feature2} alt="" initial={{ opacity: 0 }} ref={ref}
                animate={InView && { opacity: 1 }}
                transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                }} />
            <motion.div className="Features2_desc" initial={{ opacity: 0 }}
                animate={InView && { opacity: 1 }}
                transition={{
                    duration: 0.5,
                    ease: "linear",
                }}>
                <h3>Sunt consequatur ad ut est nulla</h3>
                <p>Cupiditate placeat cupiditate placeat est ipsam culpa. Delectus quia minima quod.
                    Sunt saepe odit aut quia voluptatem hic voluptas dolor doloremque.
                </p>
                <ul>
                    <li><CheckIcon /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                    <li><CheckIcon /> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                    <li><CheckIcon /> Facilis ut et voluptatem aperiam. Autem soluta ad fugiat.</li>
                </ul>
                <button className='btn'>Get Started</button>
            </motion.div>
        </div>
    )
}