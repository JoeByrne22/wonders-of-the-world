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
          <div>
            <h2 className="showImg">This is <b>{wonder.name}</b> and it is located in <b>{wonder.country}</b></h2>
            <img className="showImg" src={wonder.image} alt={wonder.name}/>
          </div>
          :
          <p>Please wait...</p>}
        <div className='leaflet-container '>
          <WonderMap wonders={[ wonder ]} userPosition={null} />
        </div>
        <button className="deleteButton" onClick={this.handleDelete}>🗑</button>
      </section>
    );
  }
}
