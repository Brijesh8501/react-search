import React, {Component} from 'react'

class Header extends Component
{
    inputKeyword = (event) =>
{
    this.props.search(event.target.value)
}
    render() {
        return (
           <div className="Header-class">
            <span className="Header-title">SEARCH BAR</span>
            <div className="Keyword-div">
                <input type="text" name="Keyword" id="Keyword" onChange={this.inputKeyword}/>
            </div>
        </div>
    )
}
}
export default Header