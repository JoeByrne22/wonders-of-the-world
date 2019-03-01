import React from 'react';
import axios from 'axios';
import WonderMap from '../common/Map';

export default class WonderShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    console.log('componentDidMount runs');
    axios.get(`/api/wonders/${this.props.match.params.id}`)
      .then(res => {
        console.log('axios fetches Data', this.state.wonder);
        this.setState({ wonder: res.data });
      });
  }

  handleDelete() {
    console.log('deleted sonnnnnnn');
    console.log('this is this.state.place._id', this.state.wonder._id);
    axios.delete(`/api/wonders/${this.state.wonder._id}`)
      .then(() => this.props.history.push('/'));
  }


  render() {
    const { wonder } = this.state;
    console.log('this is wonder', wonder);
    if(!wonder) return null;
    return (
      <section className="showBox">
        {wonder
          ?
          <div className="columns is-5">
            <h1> {wonder.name}</h1>
            <h1> {wonder.country}</h1>
            <img src={wonder.image} alt={wonder.name}/>
          </div>
          :
          <p>Please wait...</p>}
        <div className='leafet-container'>
          <WonderMap wonders={[ wonder ]} userPosition={null} />
        </div>
        <button onClick={this.handleDelete}>🗑</button>
      </section>
    );
  }
}
