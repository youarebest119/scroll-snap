import React from 'react'
import img from "../assets/images/about.jpg"
import { useGSAP } from '@gsap/react'
import SplitText from 'gsap-trial/SplitText'
import gsap from 'gsap'

const About = () => {
    useGSAP(() => {
        new SplitText(".about p", { linesClass: "l", charsClass: "c", wordsClass: "w" })
        new SplitText(".about h2", { linesClass: "l", charsClass: "c", wordsClass: "w" })
    })
    return (
        <section className='about'>
            <div className="in">
                <div className="left_box">
                    <h2>About</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati consequuntur eligendi itaque, ducimus, minus temporibus est, harum nostrum blanditiis quas qui dolore consectetur soluta molestias! Animi impedit earum ipsa incidunt!</p>
                </div>
                <div className="right_box">
                    <div className="about_img">
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
