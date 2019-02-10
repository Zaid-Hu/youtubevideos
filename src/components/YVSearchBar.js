import React from "react";

class YVSearchBar extends React.Component {
  state = { searchTerm: "" };

  onFormSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.searchTerm);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="ui field">
            <label>Enter a Search Term</label>
            <input
              value={this.state.searchTerm}
              type="text"
              onChange={e => this.setState({ searchTerm: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default YVSearchBar;
