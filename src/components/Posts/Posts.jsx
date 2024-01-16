import { useRef } from 'react';
import { Title } from '../Title/Title';
import './Posts.scss';
import { PostsMuch } from './PostsMuch';
import { motion, useInView } from 'framer-motion';

export function Posts() {
    const ref = useRef(null);
    const InView = useInView(ref, { once: true });
    let DelayTime = 0;
    return (
        <div className="PoststMain" >
            <div className="Posts container" ref={ref}>
                <Title Title='Recent Posts' Desc='Necessitatibus eius consequatur ex aliquid fuga eum quidem sint 
            consectetur velit'/>
                <div className="Cards">
                    {PostsMuch.map((ele) => {
                        return (
                            <motion.div className="card" key={ele.id}
                                initial={{ opacity: 0, y: 50 }}
                                animate={InView && { opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, ease: 'linear', delay: DelayTime = DelayTime + 0.2 }}>
                                <img src={ele.CoverPhoto} className="card-img-top" alt="..." />
                                <div className="card-body" >
                                    <p className="card-title" style={{ opacity: '0.7' }}>{ele.title}</p>
                                    <p className="card-text">
                                        {ele.desc}
                                    </p>
                                    <div className="Personal">
                                        <img src={ele.PersonalPhoto} alt="" />
                                        <div className="Personal_info">
                                            <p>{ele.name}</p>
                                            <span>{ele.date}</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}

                </div>
            </div>
        </div>
    )
}