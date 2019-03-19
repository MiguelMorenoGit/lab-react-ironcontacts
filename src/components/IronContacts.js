import React,{ Component } from 'react';

class IronContacts extends Component {

  
  render() {
    return (
      <tr>
        <td><img src={this.props.pictureUrl}  alt=''/></td>
        <td>{this.props.name}</td> 
        <td>{this.props.popularity}</td>
        <td><button onClick={()=>this.props.removeActor(this.props.index)}>Delete</button></td>
      </tr>
    )
  }
}

export default IronContacts;