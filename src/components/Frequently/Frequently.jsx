import { useRef } from 'react'
import './Frequently.scss'
import { Question } from './Question/Question'
import { motion, useInView } from "framer-motion"

export function Frequently() {
    const ref = useRef()
    const InView = useInView(ref, { once: true });
    return (
        <div className="Frequently container" >
            <motion.div className="Frequently_Pt1" ref={ref}
                initial={{ opacity: 0, x: 10 }}
                animate={InView && { opacity: 1, x: 0 }}
                transition={{ duration: .8, ease: 'easeIn' }}
            >
                <h2>Frequently Asked <b>Questions</b></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Duis aute irure dolor in reprehenderit
                </p>
            </motion.div>
            <div className="Frequently_Pt2" >
                <Question number='1' title='Non consectetur a erat nam at lectus urna duis?' Delay='0.3'
                    desc='Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non 
                curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.'/>
                <Question number='2' title='Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?' Delay='0.6'
                    desc='Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id 
                    donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium.
                     Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.'/>
                <Question number='3' title='Dolor sit amet consectetur adipiscing elit pellentesque?' Delay='0.9'
                    desc='Eleifend mi
                 in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim.
                 Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt.
                 Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis.'/>
                <Question number='4' title='Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?' Delay='1.2'
                    desc='Dolor sit amet
                 consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. 
                 Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim.
                  Mauris ultrices eros in cursus turpis massa tincidunt dui.'/>
                <Question number='5' title='Tempus quam pellentesque nec nam aliquam sem et tortor consequat?' Delay='1.5'
                    desc='Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in.
                     Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est.
                     Purus gravida quis blandit turpis cursus in'
                />
            </div>
        </div>
    )
}