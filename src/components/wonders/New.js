import React from 'react';
import axios from 'axios';

class WonderNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit() {
    console.log('SUBMITTED');
    event.preventDefault();
    axios.post('/api/wonders', this.state)
      .then(() => this.props.history.push('/wonders'));
  }

  handleChange({ target: { name, value }}) {
    console.log('event.target.name is', event.target.name);
    console.log('this.state is ', this.state);
    this.setState({ [name]: value });
  }


  render() {
    return (
      <section>
        <form onSubmit={this.handleSubmit}>
          <label>What is your Wonder?</label>
          <input onChange={this.handleChange}
            value={this.state.name || ''}
            name="name"
          />
          <label >Add an Image: </label>
          <input onChange={this.handleChange}
            value={this.state.image || ''}
            name="image"
          />
          <button>SUBMIT</button>
        </form>
      </section>
    );
  }
}


export default WonderNew;
