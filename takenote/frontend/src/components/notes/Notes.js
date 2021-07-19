import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getNotes, deleteNote } from '../../actions/notes';



export class Notes extends Component {

  static propTypes = {
    notes: PropTypes.array.isRequired,
    getNotes: PropTypes.func.isRequired,
    deleteNote: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.getNotes();
  }

  render() {
    return (
      <Fragment>
        <h4>Your saved notes</h4>
        <table className="table table-bordered table-hover">
          <tbody>
            { this.props.notes.map(note => (
              <tr key={note.id} className={note.private_flag ? "private-note": "public-note"}>
                <td>
                  <span className=""><b>{note.name}</b></span>
                  <span className="float-end"><button onClick={this.props.deleteNote.bind(this, note.id)} className="btn btn-danger btn-sm">X</button></span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Private</th>
              <th>Created at</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            { this.props.notes.map(note => (
              <tr key={note.id}>
                <td>{note.id}</td>
                <td>{note.name}</td>
                <td>{note.private_flag}</td>
                <td>{note.created_at}</td>
                <td><button onClick={this.props.deleteNote.bind(this, note.id)} className="btn btn-danger btn-sm">Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table> */}
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  notes: state.notes.notes
});


export default connect(
  mapStateToProps, 
  { getNotes, deleteNote })
  (Notes);

