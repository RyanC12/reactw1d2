import React, { Component } from 'react'
import axios from 'axios'
import './beer.css'

export default class Beer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            beersObject: [],
            isActive: null
        }
    }

    componentDidMount = () => {
        axios.get(`https://api.punkapi.com/v2/beers`)
        .then(response => response.data)
        .then(res => this.setState({beersObject: res}))
    }
    sortBeer = () => {
        const newBeer = this.state.beersObject.map((beer, i) => {
            return (<tr>
                <td>{beer.name}</td>
                <td>{beer.tagline}</td>
                <td>{beer.first_brewed}</td>
                <td>{beer.discription}</td>
                <td><button key={i} style={this.state.isActive === i ? {background: 'orange'} : {background: "white"}} onClick={this.buttonValue.bind(this,beer.id)}>Like</button></td>
            </tr>)
        })
        return newBeer
    }

   

    buttonValue = (i) => {
        if(i === this.state.isActive){
            this.setState({
                isActive: null
            })
        }else{
            this.setState({
                isActive: i -1
            })
        }    
    }
 

    


    render() {
        return (
            <div>
                <table align="center" className="ordersTable">
                        <tr>
                            <th>Name</th>
                            <th>tagline</th>
                            <th>first_brewed</th>
                            <th>discription</th>
                        </tr>
                        {this.sortBeer()}
                    </table>
            </div>
        )
    }
}
