function Navbar(props) {
    return (
        <div>
            <h1>{props.navHeading}</h1>
            <ul>
                <a href="#">Home</a><br/>
                <a href="#">About</a><br/>
                <a href="#">Contact</a><br/>
                <a href="#">{props.navText}</a><br/>
            </ul>
        </div>
    )
}


export default Navbar;