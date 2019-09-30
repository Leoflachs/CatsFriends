import React, { Component } from "react";
import { connect } from "react-redux";

import CardList from "../components/cardList";
import SearchBox from "../components/SearchBox";
// import { cats } from './cats';
import { setSearchField } from "../actions";
import Scroll from "../components/scroll";
import ErrorBoundry from "../components/ErrorBoundry";

// Pour le connect, il faut ajouter ces deux options qui vont retourner
const mapStateToProps = state => {
  return {
    searchField: state.searchField
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value))
  };
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      cats: []
    };
  }

  componentDidMount() {
    // console.log(this.props.store.getState());
    // on log le state du store passé en props
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        return response.json();
      })
      .then(users => {
        this.setState({ cats: users });
      });
  }

  render() {
    const { cats } = this.state;
    const { searchField, onSearchChange } = this.props;
    const filteredCats = cats.filter(cats => {
      return cats.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return !cats.length ? (
      <h1>Loading</h1>
    ) : (
      <div className="tc">
        <h1 className="tc">Cats Friends</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <CardList cats={filteredCats} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
// Il faut ajouter connect tout en bas dans l'export pour pouvoir utiliser la fonction connect
// Connect est une higher order function, qui retourne une autre fonction donc connect
// va se lancer et et cela va retourner une autre fonction qui va lancer la deuxième partie
// avec App en param

// Connect accepte 2 paramètre, mapStateToProps et mapDispatchToProps, en gros
// Le fichier APP est maintenant abonné au changement du redux store
