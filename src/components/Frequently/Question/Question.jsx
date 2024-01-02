import { useState } from 'react';
import './Question.scss';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useAnimate, motion } from "framer-motion";
import { useInView } from 'react-intersection-observer'

export function Question({ number, title, desc }) {
    const [ref, InView] = useInView({
        triggerOnce: true,
        threshold: 0.2
    })
    const [ShowQuestion, setShowQuestion] = useState(false);
    const [Show, animate] = useAnimate();

    const QuestionHandler = () => {
        setShowQuestion(ShowQuestion ? false : true);
        if (ShowQuestion) {
            animate(Show.current, {
                height: 0,
            }, { duration: 0.2 })
        } else {
            animate(Show.current, {
                height: 100,
            }, { duration: 0.2 })
        }
    }
    return (
        <motion.div className="Question" ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={InView && { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'linear' }}
        >
            <h5 className={ShowQuestion ? 'Showing' : ''} onClick={QuestionHandler}><span>{number}.</span>
                {title}
                <KeyboardArrowDownIcon className={ShowQuestion ? 'Main' : ''} /></h5>

            <span className={ShowQuestion ? 'Showing' : ''} ref={Show}>
                {desc}
            </span>
        </motion.div>
    )
}