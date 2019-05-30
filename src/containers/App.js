import React, { Component } from 'react';
import CardList from '../components/cardList';
import SearchBox from '../components/SearchBox'
// import { cats } from './cats';
import Scroll from '../components/scroll'
import ErrorBoundry from '../components/ErrorBoundry'


class App extends Component {
    constructor(){
        super();
        this.state = {
            cats: [], 
            searchField : '', 
            suggestions:[]
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                return response.json()
        })
        .then(users =>{
            this.setState({cats:users})
        })
    }
    onSearchChange = (event) => {
        this.setState({
            searchField : event.target.value
        })
        this.setState({suggestions:''});
    }

    
    render() {
        const { cats, searchField } = this.state;
        const filteredCats = cats.filter(cats => {
            return cats.name.toLowerCase().includes(searchField.toLowerCase())
        })
        return !cats.length ?
            <h1>Loading</h1> :
            (
        <div className='tc'>
            <h1 className="tc">Cats Friends</h1>
            <SearchBox searchChange={this.onSearchChange} />
            <Scroll>
                <ErrorBoundry>
                <CardList cats={filteredCats}/>
                </ErrorBoundry>
            </Scroll>
        </div>
            )
}
}

export default App;