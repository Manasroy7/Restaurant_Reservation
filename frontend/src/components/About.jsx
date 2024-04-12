import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi"

const About = () => {
    return (
        <section className="about" id="about">
            <div className="container">
                <div className="banner">
                    <div className="top">
                        <h1 className="heading">ABOUT US</h1>
                        <p>The only thing we're serious about is food.</p>
                    </div>
                    <p className="mid">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem praesentium obcaecati accusamus iusto suscipit labore vitae necessitatibus, sed ducimus tempore deserunt, veritatis debitis, unde officiis quidem? Vel, nisi rerum! Dolores, aspernatur recusandae. Ducimus ut cupiditate praesentium, quidem aperiam quia et inventore, expedita at rem quas, alias quae odit officia! Ipsam?</p>
                    <Link to={"/"}>
                        Explore Menu
                        <span>
                            <HiOutlineArrowNarrowRight/>
                        </span>
                    </Link>
                </div>
                <div className="banner">
                    <img src="/about.png" alt="about" />
                </div>
            </div>
        </section>
    )
};


export default About;