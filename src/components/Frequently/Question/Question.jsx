import { useRef, useState } from 'react';
import './Question.scss';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useAnimate, motion, useInView } from "framer-motion";

export function Question({ number, title, desc, Delay }) {
    const ref = useRef()
    const InView = useInView(ref, { once: true });
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
            initial={{ opacity: 0, y: 40 }}
            animate={InView && { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'linear', delay: parseFloat(Delay) }}
        >
            <h5 className={ShowQuestion ? 'Showing' : ''} onClick={QuestionHandler} ><span>{number}.</span>
                {title}
                <KeyboardArrowDownIcon className={ShowQuestion ? 'Main' : ''} /></h5>

            <span className={ShowQuestion ? 'Showing' : ''} ref={Show}>
                {desc}
            </span>
        </motion.div>
    )
}