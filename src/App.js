import React, { Component } from 'react';
import contacts from './data/contacts.json';
import IronContacts from './components/IronContacts';

class App extends Component {

  

  // state, declaramos el estado inicial, queremos mostrar solo los 5 primeros de la array de objetos,por eso  hacemos el slice
  state = {
    data: contacts.slice(0,5),
  }
  // renderList nos mostrara la lista en el estado que estemos por eso this.state......
  renderList(){
    return this.state.data.map((item, index) => {
      return <IronContacts 
        key={`id-${index}`} 
        pictureUrl={item.pictureUrl} 
        name={item.name} 
        popularity={item.popularity}
        index={index}
        removeActor={this.deleteActor}
      />
    })
  }

  addContact =()=> {
    const randomContact = contacts[Math.floor(Math.random()* contacts.length)];
    this.setState({
      data:[ ...this.state.data, randomContact]
    })
  }

  sortByName = () => {

    const sortArray = this.state.data.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)); 

    this.setState({
      data: sortArray
    })

  }

  sortByPopularity = () => {

    const sortPopulateArray = this.state.data.sort((a,b) => (a.popularity > b.popularity) ? -1 : ((b.popularity > a.popularity) ? 1 : 0)); 

    this.setState({
      data: sortPopulateArray
    })
    
  }

  deleteActor = (index) => {
    const deleteActor = [...this.state.data];
    console.log(deleteActor);
    deleteActor.splice(index,1);

    this.setState({
      data: deleteActor
    })
  }

  render() {
    return (
      <div>
        <h1>IronContacts</h1>
        <table>
          <tr>
            <th>Picture</th>
            <th>Name</th> 
            <th>Popularity</th>
          </tr>
          {this.renderList()}
        </table>
        <button onClick={this.addContact}>Add Random Actor</button>
        <button onClick={this.sortByName}>Sort by Name</button>
        <button onClick={this.sortByPopularity}>Sort by Popularity</button>
      </div>
    );
  }
}

export default App;
