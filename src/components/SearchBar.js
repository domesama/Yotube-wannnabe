import React, { Component } from "react";

export class SearchBar extends Component {
  state = {
    term: "",
  };
  render() {
    const onUserSubmit = (event) => {
      event.preventDefault();
      this.props.userHasSubmmited(this.state.term);
    };
    return (
      <div className="search-bar ui segment">
        <form action="" className="ui form" onSubmit={onUserSubmit}>
          <div className="field">
            <label htmlFor=""> Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
