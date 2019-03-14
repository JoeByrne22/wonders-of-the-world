import React from 'react';
import axios from 'axios';
import WondersBox from './WondersBox';

class WonderIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getWonders() {
    axios.get('/api/wonders')
      .then(res => this.setState({ wonders: res.data }));
  }

  handleDelete() {
    console.log('deleted');
  }

  componentDidMount() {
    axios.get('/api/wonders')
      .then(result => this.setState({ wonders: result.data }));
  }

  render() {
    return (
      <section className="section">
        {/* <h1 className="title">All the wonders</h1> */}
        <hr />
        <div className="box-container">
          {this.state.wonders && this.state.wonders.map(
            wonder => <WondersBox key={wonder._id} wonder={wonder}/>
          )}
        </div>
      </section>
    );
  }
}
export default WonderIndex;
