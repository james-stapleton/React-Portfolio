import React from 'react';

export default function Header (props) {

    const style = {
        color: "red"
    }

    return (
        <section className='heading row'>
        <h1 className='col'>James Stapleton</h1>
        <nav className='col'>

        

        <button onClick = {() => props.handleSection("about")}  >About Me</button>

        <button onClick = {() => props.handleSection("portfolio")}>Portfolio</button>

        <button onClick = {() => props.handleSection("contact")}>Contact</button>

        </nav>
    </section>
    )
}