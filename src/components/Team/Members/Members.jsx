import './Members.scss';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export function Members({ Image, Title, Job, Desc, delayTime }) {
    const ref = useRef(null);
    const InView = useInView(ref, { once: true })
    return (
        <motion.div className="Members" ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={InView && { opacity: 1, y: 0 }}
            transition={{ ease: 'linear', duration: 0.3, delay: parseFloat(delayTime) || 0 }}
        >
            <img src={Image} alt="" srcset="" />
            <h5>{Title}</h5>
            <span>{Job}</span>
            <p>{Desc}</p>
            <span className='Media'>
                <TwitterIcon />
                <FacebookIcon />
                <InstagramIcon />
                <LinkedInIcon />
            </span>
        </motion.div>
    )
}