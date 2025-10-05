import { useGSAP } from '@gsap/react'
import SplitText from 'gsap-trial/SplitText'
import React from 'react'

const More = () => {
    useGSAP(() => {
        new SplitText(".more h2", { linesClass: "l", charsClass: "c", wordsClass: "w" })
    })
    return (
        <section className='more'>
            <div className="in">
                <h2>More</h2>
                <div className="in_in">
                    <div className="box card_1">
                        <h3>More 1</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat optio eaque consequuntur, harum laborum quae dolorum quod officia modi at?</p>
                    </div>
                    <div className="box card_1">
                        <h3>More 2</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat optio eaque consequuntur, harum laborum quae dolorum quod officia modi at?</p>
                    </div>
                    <div className="box card_1">
                        <h3>More 3</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat optio eaque consequuntur, harum laborum quae dolorum quod officia modi at?</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default More
