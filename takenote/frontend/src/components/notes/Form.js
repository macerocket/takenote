import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { addNote } from '../../actions/notes';


export class Form extends Component {

  getCurrentDate = (separator='') => {

    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    
    return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`
  }
  
  state = { 
    name: "",
    private_flag: "",
    note: ""
  }

  static propTypes = {
    addNote: PropTypes.func.isRequired
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value});
  onSubmit = e => {
    e.preventDefault();
    const { name, private_flag, note } = this.state;
    const note_payload = { name:name, private:private_flag===""?"False":"True", notes:note };
    this.props.addNote(note_payload);


  }


  render() {
    const { name, private_flag, note} = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Take a new note!</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
          <span className="input-group-text">Name:</span>
            <input 
              id="name" 
              type="text" 
              name="name"
              className="form-control"
              onChange={this.onChange}
              value={this.name}
              // value={this.name === undefined ? this.getCurrentDate() + " // " : this.name }
            />
          </div>
          <div className="form-check">
            <label className="form-check-label" htmlFor="private_flag">Keep this note PRIVATE!</label>
            <input 
              id="private_flag" 
              type="checkbox" 
              name="private_flag"
              className="form-check-input"
              onChange={this.onChange}
              value={this.private_flag}
            />
          </div>
          <div className="form-group">
            <span className="input-group-text">Note:</span>
            <textarea 
              id="note" 
              name="note" 
              className="form-control"
              onChange={this.onChange}
              cols="50" 
              rows="10"
              value={this.note}></textarea>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

export default connect(null, { addNote })(Form);

