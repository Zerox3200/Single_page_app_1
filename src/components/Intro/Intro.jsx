import './Intro.scss';
import { motion } from "framer-motion"


export function Intro() {
    return (
        <>
            <motion.div className="Intro" initial={{ opacity: 0 }} id='Intro'
                animate={{ opacity: 1 }}>
                <motion.h1 initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
                    transition={{
                        ease: "linear",
                        duration: 0.5,
                        x: { duration: 1 }
                    }}>Welcome to my Website</motion.h1>
                <motion.h5 initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
                    transition={{
                        ease: "linear",
                        duration: 0.5,
                        x: { duration: 1 },
                        delay: 0.2
                    }}>We are team of talented designers making websites with Bootstrap</motion.h5>
                <motion.div className="EnterEmail" initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
                    transition={{
                        ease: "linear",
                        duration: 0.5,
                        x: { duration: 1 },
                        delay: 0.3
                    }}>
                    <input type="text" placeholder="Enter email address" />
                    <button className='btn'>Sing up</button>
                </motion.div>
            </motion.div>
        </>
    )
}