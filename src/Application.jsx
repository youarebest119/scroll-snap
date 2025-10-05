import React, { useRef } from 'react'
import Banner from './Banner/Banner'
import About from './About/About'
import More from './More/More'
import Service from './Service/Service'
import Info from './Info/Info'
import { useGSAP } from '@gsap/react'
import { Observer } from 'gsap/Observer'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import SplitText from 'gsap-trial/SplitText'

gsap.registerPlugin(ScrollTrigger, SplitText, Observer, ScrollToPlugin);

const Application = () => {
    const isAnimating = useRef();
    const scrolled = useRef(0);
    const panels = useRef([]);
    const { contextSafe } = useGSAP(() => {
        panels.current = gsap.utils.toArray('section');
        new Observer.create({
            wheelSpeed: -1,
            target: window,
            type: 'wheel,touch',
            onUp: () => !isAnimating.current && handleNext(),
            onDown: () => !isAnimating.current && handlePrev(),
            tolerance: 10,
        })
    })

    const handleNext = () => {
        if (scrolled.current < panels.current.length - 1) {
            scrolled.current++;
            animateToPanel(1);
        }
    };

    const handlePrev = () => {
        if (scrolled.current > 0) {
            scrolled.current--;
            animateToPanel(-1);
        }
    };
    const animateToPanel = (direction) => {
        isAnimating.current = true;

        const targetPanel = panels.current[scrolled.current];
        const exitPanel = direction > 0 ? panels.current[scrolled.current - 1] : panels.current[scrolled.current + 1]


        let tl = gsap.timeline({
            onComplete: () => {
                isAnimating.current = false;
            },
        })
        if (exitPanel === panels.current[0]) {
            const selector = gsap.utils.selector(exitPanel);
            tl.to(selector("*"), {
                yPercent: 100,
                opacity: 0,
                stagger: 0.01,
            })
        }
        if (exitPanel === panels.current[1]) {
            const selector = gsap.utils.selector(exitPanel);
            tl.to(selector('h2 .w'), {
                opacity: 0,
                yPercent: 100,
                stagger: 0.01,
                duration: 0.4,
            })
            tl.to(selector('p .w'), {
                opacity: 0,
                yPercent: 100,
                stagger: 0.01,
                duration: 0.4,
            }, "<")
            tl.to(selector(".about_img"), {
                y: 100,
                opacity: 0,
                duration: 0.4,
            }, "<")
        }
        if (exitPanel === panels.current[3]) {
            let selector = gsap.utils.selector(exitPanel);
            tl.to(selector('.box'), {
                opacity: 0,
                yPercent: 100,
            })
            tl.to(selector('.box > *'), {
                y: 100,
                opacity: 0,
                ease: "back.inOut",
                stagger: 0.05,
                duration: 1,
            }, "<")
        }

        tl.to(window, {
            scrollTo: targetPanel,
            // ease: 'back(0.5)',
            ease: "power4.inOut",
            duration: exitPanel === panels.current[1] ? 0.1: 1,
        })


        if (targetPanel === panels.current[0]) {
            let selector = gsap.utils.selector(targetPanel);
            tl.fromTo(selector('*'), {
                opacity: 0,
                yPercent: 100,
            }, {
                opacity: 1,
                yPercent: 0,
            })
        }

        if (targetPanel === panels.current[1]) {
            let selector = gsap.utils.selector(targetPanel);
            tl.fromTo(selector('h2 .w'), {
                opacity: 0,
                yPercent: 100,
            }, {
                opacity: 1,
                yPercent: 0,
                stagger: 0.01,
            })
            tl.fromTo(selector('p .w'), {
                opacity: 0,
                yPercent: 100,
            }, {
                opacity: 1,
                yPercent: 0,
                stagger: 0.01,
            }, "<")
            tl.fromTo(selector('.about_img'), {
                y: 100,
                opacity: 0,
            }, {
                y: 0,
                opacity: 1,
                ease: "back.inOut",
                duration: 1.6,
            }, "0")
        }



        if (targetPanel === panels.current[2]) {
            let selector = gsap.utils.selector(targetPanel);
            tl.from(selector('h2 .w'), {
                opacity: 0,
                yPercent: 100,
                stagger: 0.01,
            })
            tl.from(selector('.box'), {
                y: 100,
                opacity: 0,
                ease: "back.inOut",
                stagger: 0.05,
                duration: 1,
            }, "<")
        }

        if (targetPanel === panels.current[3]) {
            let selector = gsap.utils.selector(targetPanel);
            tl.fromTo(selector('.box'), {
                opacity: 0,
                yPercent: 100,
            }, {
                opacity: 1,
                yPercent: 0,
            })
            tl.fromTo(selector('.box > *'), {
                y: 100,
                opacity: 0,
            }, {
                y: 0,
                opacity: 1,
                ease: "back.inOut",
                stagger: 0.05,
                duration: 1,
            }, "<")
        }

    };
    return (
        <div className='app'>
            <header className="header">
                <h2>Logo</h2>
                <button type="button">Login</button>
            </header>
            <Banner />
            <About />
            <More />
            <Service />
            <Info />
        </div>
    )
}

export default Application
