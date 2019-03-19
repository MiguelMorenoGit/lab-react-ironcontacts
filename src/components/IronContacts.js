import React,{ Component } from 'react';

class IronContacts extends Component {
  render() {
    return (
      <tr>
        <td><img src={this.props.pictureUrl}  alt=''/></td>
        <td>{this.props.name}</td> 
        <td>{this.props.popularity}</td>
      </tr>
    )
  }
}

export default IronContacts;