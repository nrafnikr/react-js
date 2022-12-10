// import { Routes } from 'react-router-dom';
import './news.css';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className='navbar'>
        
        <ul>
        <h3>News APP</h3>
          <Link style={{ textDecoration: 'none' }} to='/'><li>Home</li></Link>
          <Link style={{ textDecoration: 'none' }} to='/entertainment'><li>Entertainment</li></Link>
          <Link style={{ textDecoration: 'none' }} to='/sports'><li>Sports</li></Link>
          <Link style={{ textDecoration: 'none' }} to='/business'><li>Business</li></Link>
          <Link style={{ textDecoration: 'none' }} to='/science'><li>Science</li></Link>
          <Link style={{ textDecoration: 'none' }} to='/health'><li>Health</li></Link>
          <Link style={{ textDecoration: 'none' }} to='/technology'><li>Technology</li></Link>
        </ul>
      </nav>
    </>
  )
}

export default Navbar;