import { Component } from "react/cjs/react.development";

import "./search-panel.css";

class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
    };
  }

  onSearchTerm = (e) => {
    const term = e.target.value;
    this.setState({
      term: term,
    });
    this.props.onSearchTerm(term);
  };

  render() {
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="Найти сотрудника"
        value={this.state.term}
        onChange={this.onSearchTerm}
      />
    );
  }
}

export default SearchPanel;
