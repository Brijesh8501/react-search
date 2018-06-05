import React, {Component} from 'react'
import Header from './header'
import JSON from './db.json';
import News from './data_part'

class Main extends Component
{
    state =
        {
         data:JSON,
            filtered:[]
        }
        getKeyword = (input)=>
        {
            let filteredData = this.state.data.filter((data)=>
            {
                return data.title.indexOf(input) > -1
            })
            this.setState({
                filtered:filteredData})
        }
    render() {
        return (
            <div>
                <Header search = {this.getKeyword}/>
                <News news = {this.state.filtered.length === 0 ? this.state.data : this.state.filtered}>
                    NEWS
                </News>
            </div>
        )
    }
}
export default Main;