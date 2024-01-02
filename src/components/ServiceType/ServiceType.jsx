import './ServiceType.scss';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export function ServiceType({ Header, Desc, Icon, delayTime }) {
    const [ref, InView] = useInView({
        triggerOnce: true,
        threshold: 0.2
    })
    return (
        <motion.div className="ServiceType" initial={{ opacity: 0, y: 200 }} animate={InView && { opacity: 1, y: 0 }}
            transition={{
                duration: 1, ease: "linear", y: { duration: 1 }, delay: delayTime,
            }} ref={ref}>
            <div className="ServiceTypeLine">
                <span></span>
                <span></span>
            </div>
            <div className="ServiceType_desc">
                <div className="ServiceType_desc_icon">
                    {Icon}
                </div>
                <div className="ServiceType_desc2">
                    <h5>{Header}</h5>
                    <p>
                        {Desc}
                    </p>
                </div>
            </div>
        </motion.div>
    )
}