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

  resetState = () => {
    this.setState({
        name: "",
        private_flag: "",
        note: ""
      });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { name, private_flag, note } = this.state;
    const note_payload = { name:name, private_flag:private_flag==="checked"?"False":"True", notes:note };
    this.props.addNote(note_payload);
    this.setState({name: '', private_flag: '',note: ''});
  };
  

  render() {
    const { name, private_flag, note} = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Take a new note</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
          <span className="input-group-text">Give this note a name:</span>
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
            <p>{this.private_flag}</p>
          <div className="form-check py-2">
            <label className="form-check-label text-warning" htmlFor="private_flag"><b>Keep this note PRIVATE!</b></label>
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
            <span className="input-group-text">What do you want to jot down? (Markdown encouraged)</span>
            <textarea 
              id="note" 
              name="note" 
              className="form-control"
              onChange={this.onChange}
              cols="50" 
              rows="10"
              value={this.note}></textarea>
          </div>
          <div className="form-group pt-3">
            <button type="submit" className="btn btn-primary">Save this note for later, my dude!</button>
            <button type="reset" onClick={this.resetState} className="btn btn-primary">Reset</button>
          </div>
        </form>
      </div>
    )
  }
}

export default connect(null, { addNote })(Form);

