import React from 'react';

class NewPlayListForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      warningMessage: null
    }
  }

  render() {
    const nameWarning = (<div className="alert alert-warning">Please enter a name</div>);
    const characterWarning = (<div className="alert alert-warning">Name cannot be more than 16 characters</div>)

    return (
    <div className="well">
      <form
        className="form-horizontal"
        onSubmit={this.props.onFormSubmit}
        >
        <fieldset>
          <legend>New Playlist</legend>
          <div className="form-group">
            <label className="col-xs-2 control-label">Name</label>
            <div className="col-xs-10">
              <input className="form-control" type="text" onChange={this.props.handleChange} value={this.props.inputValue} />
              {/* Character length validation */}
              {(this.props.inputValue.length > 16) ? characterWarning : null}
              {/* Name validation */}
              {(this.props.inputValue === '' && this.props.modified) ? nameWarning : null}
            </div>
          </div>
          <div className="form-group">
            <div className="col-xs-10 col-xs-offset-2">
              <button type="submit" className="btn btn-success" disabled={(!this.props.inputValue || this.props.inputValue.length > 16) ? 'disabled' : null}>Create Playlist</button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
    )
  }
}


export default NewPlayListForm
