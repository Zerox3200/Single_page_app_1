import './Offers.scss';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import RocketOutlinedIcon from '@mui/icons-material/RocketOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import { Title } from '../Title/Title';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export function Offers() {
    const [ref, InView] = useInView({
        triggerOnce: true,
        threshold: 0.2
    })
    return (
        <>
            <motion.div className="Offers container"
                initial={{ opacity: 0, scale: 0 }}
                animate={InView && { opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, ease: 'linear' }}
                ref={ref}
            >
                <Title Title='Pricing' Desc='Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit' />
                <div className="Main_Offer_Cards">
                    <div className="Offers_cards">
                        <h4>Free Plan</h4>
                        <ViewInArIcon />
                        <p><span>0</span>/month</p>
                        <ul>
                            <li><CheckOutlinedIcon /> Quam adipiscing vitae proin</li>
                            <li><CheckOutlinedIcon /> Nec feugiat nisl pretium
                            </li>
                            <li><CheckOutlinedIcon /> Nulla at volutpat diam uteera
                            </li>
                            <li><CheckOutlinedIcon /> Pharetra massa massa ultricies
                            </li>
                            <li><CheckOutlinedIcon /> Massa ultricies mi quis hendrerit
                            </li>
                        </ul>
                        <button className='btn'>Buy Now</button>
                    </div>
                    <div className="Offers_cards biggest">
                        <h4>Business Plan</h4>
                        <RocketOutlinedIcon />
                        <p><span>29</span>/month</p>
                        <ul>
                            <li><CheckOutlinedIcon /> Quam adipiscing vitae proin</li>
                            <li><CheckOutlinedIcon /> Nec feugiat nisl pretium
                            </li>
                            <li><CheckOutlinedIcon /> Nulla at volutpat diam uteera
                            </li>
                            <li><CheckOutlinedIcon /> Pharetra massa massa ultricies
                            </li>
                            <li><CheckOutlinedIcon /> Massa ultricies mi quis hendrerit
                            </li>
                        </ul>
                        <button className='btn'>Buy Now</button>
                    </div>
                    <div className="Offers_cards">
                        <h4>Developer Plan</h4>
                        <EmailOutlinedIcon />
                        <p><span>49</span>/month</p>
                        <ul>
                            <li><CheckOutlinedIcon /> Quam adipiscing vitae proin</li>
                            <li><CheckOutlinedIcon /> Nec feugiat nisl pretium
                            </li>
                            <li><CheckOutlinedIcon /> Nulla at volutpat diam uteera
                            </li>
                            <li><CheckOutlinedIcon /> Pharetra massa massa ultricies
                            </li>
                            <li><CheckOutlinedIcon /> Massa ultricies mi quis hendrerit
                            </li>
                        </ul>
                        <button className='btn'>Buy Now</button>
                    </div>
                </div>
            </motion.div>
        </>
    )
}