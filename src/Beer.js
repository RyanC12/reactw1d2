import React, { Component } from 'react'
import axios from 'axios'
import './beer.css'

export default class Beer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            beersObject: [],
            isActive: null,
            beersLiked: []
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
                <td><button style={this.state.beersLiked[i]? {background: 'orange'} : {background: "white"}} onClick={() => this.buttonValue(i)}>Like</button></td>
            </tr>)
        })
        return newBeer
    }

   

    buttonValue = (i, event) => {
        let newBeersLiked = this.state.beersLiked;
        newBeersLiked[i] = !newBeersLiked[i];
        newBeersLiked = this.state.beersLiked.slice(0, this.state.beersLiked.length)
        this.setState({
            beersLiked: newBeersLiked
        })

        console.log("index of", i)
        console.log("true or false", this.state.beersLiked)
        // const testing = event.target.id
        // console.log("beerId", this.state.beerId)
        // this.setState({
        //     beerId: event.target.id
        // })
      
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