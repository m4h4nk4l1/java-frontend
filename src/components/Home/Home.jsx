import './Home.css'
import React from 'react';
import {Link} from "react-router-dom"

const Home = () => {
return (
    <nav>
    <ul>
    <li>
        <Link to="/home" > Home </Link>
    </li>
    <li>
        <Link to="/employees"> Employees </Link>
    </li>
    <li>
        <Link to="/leave"> Leave </Link>
    </li>
    <li>
        <Link to="/events"> Events </Link>
    </li>
    </ul>
</nav>
    
)
}

export default Home;