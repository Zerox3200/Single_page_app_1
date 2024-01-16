import { AboutHeader } from '../../components/About/About';
import { About2 } from '../../components/About2/About2';
import { Connect } from '../../components/Connnect/Connect';
import { Contact } from '../../components/ContactUs/ContactUs';
import { Counter } from '../../components/Counter/Counter';
import { Features } from '../../components/Features/Features';
import { Features2 } from '../../components/Features2/Features2';
import { Footer } from '../../components/Footer/Footer';
import { Frequently } from '../../components/Frequently/Frequently';
import { Intro } from '../../components/Intro/Intro';
import { Nav } from '../../components/Nav/Nav';
import { Offers } from '../../components/Offers/Offers';
import { Pointer } from '../../components/Pointer/Pointer';
import { Portfolio } from '../../components/Portfolio/Portfolio';
import { Posts } from '../../components/Posts/Posts';
import { Service } from '../../components/Service/Service';
import { Team } from '../../components/Team/Team';
import { Testimonials } from '../../components/Testimonials/Testimonials';

export function Home() {
    return (
        <>
            <Nav />
            <Intro />
            <AboutHeader />
            <About2 />
            <Counter />
            <Service />
            <Features />
            <Features2 />
            <Portfolio />
            <Offers />
            <Frequently />
            <Team />
            <Connect />
            <Testimonials />
            <Posts />
            <Contact />
            <Footer />
            <Pointer />
        </>
    )
}