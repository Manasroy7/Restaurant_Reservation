import React from "react";
import {data} from "../restApi.json"

const Menu = () => {
    return (
        <section className="menu" id="menu">
            <div className="container">
                <div className="heading_section">
                    <h1 className="heading">POPULER DISHES</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla ex aperiam explicabo recusandae possimus architecto repellat, ea adipisci magnam asperiores?</p>
                </div>
                <div className="dishes_container">
                    {
                        data[0].dishes.map(element =>(
                            <div className="card" key={element.id}>
                                <img src={element.image} alt={element.title} />
                                <h3>{element.title}</h3>
                                <button>{element.category}</button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Menu;