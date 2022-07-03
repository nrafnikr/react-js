import React from "react"

class Footer extends React.Component{
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>
                <h5>Footer</h5>
                {this.props.paragraf()}
            </div>
        )
    }
}

export default Footer;