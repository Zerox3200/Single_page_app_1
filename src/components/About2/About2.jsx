import './About2.scss';
import EastIcon from '@mui/icons-material/East';
import ApartmentIcon from '@mui/icons-material/Apartment';
import AddchartIcon from '@mui/icons-material/Addchart';
import WebhookIcon from '@mui/icons-material/Webhook';
import AlignVerticalBottomIcon from '@mui/icons-material/AlignVerticalBottom';
import { motion } from "framer-motion"
import { useInView } from 'react-intersection-observer';


export function About2() {
    const [ref, InView] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });
    return (
        <div className="About2" >
            <motion.div className="About2_Pt1" ref={ref}
                initial={{ y: 50, opacity: 0 }}
                animate={InView && { y: 0, opacity: 1 }} transition={{ duration: 0.5, ease: 'easeOut' }}>
                <span>About Us</span>
                <h2>Ducimus rerum libero reprehenderit cumque</h2>
                <p>Ipsa sint sit. Quis ducimus tempore dolores impedit et dolor
                    cumque alias maxime. Enim reiciendis minus et rerum hic non.
                    Dicta quas cum quia maiores iure. Quidem nulla qui assumenda
                    incidunt voluptatem tempora deleniti soluta.
                </p>
                <button className='btn'>Read More <EastIcon /></button>
            </motion.div>
            <div className="About_Pt2">
                <motion.div className="Card" initial={{ y: 100, opacity: 0 }} animate={InView && { y: 0, opacity: 1 }}
                    transition={{
                        ease: "easeIn",
                        duration: 0.5,
                        y: { duration: 1 },
                    }}>
                    <ApartmentIcon />
                    <h3>Eius provident</h3>
                    <p>Magni repellendus vel ullam hic officia accusantium ipsa dolor omnis dolor voluptatem
                    </p>
                </motion.div>
                <motion.div className="Card Card2" initial={{ y: 100, opacity: 0 }} animate={InView && { y: 0, opacity: 1 }}
                    transition={{
                        ease: "easeIn",
                        duration: 0.5,
                        y: { duration: 1 },
                    }}>
                    <AddchartIcon />
                    <h3>Rerum aperiam</h3>
                    <p>Autem saepe animi et aut aspernatur culpa facere. Rerum saepe rerum voluptates quia
                    </p>
                </motion.div>
                <motion.div className="Card" initial={{ y: 100, opacity: 0 }} animate={InView && { y: 0, opacity: 1 }}
                    transition={{
                        ease: "easeIn",
                        duration: 0.5,
                        delay: 0.5,
                        y: { duration: 1 },
                    }}>
                    <WebhookIcon />
                    <h3>Veniam omnis</h3>
                    <p>Omnis perferendis molestias culpa sed. Recusandae quas possimus. Quod consequatur corrupti
                    </p>
                </motion.div>
                <motion.div className="Card Card2" initial={{ y: 100, opacity: 0 }} animate={InView && { y: 0, opacity: 1 }}
                    transition={{
                        ease: "easeIn",
                        duration: 0.5,
                        delay: 0.5,
                        y: { duration: 1 },
                    }}>
                    <AlignVerticalBottomIcon />
                    <h3>Delares sapiente</h3>
                    <p>Sint et dolor voluptas minus possimus nostrum. Reiciendis commodi eligendi omnis quideme lorenda</p>
                </motion.div>
            </div>
        </div>
    )
}