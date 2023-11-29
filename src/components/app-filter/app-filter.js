import { Component } from "react/cjs/react.development";

import "./app-filter.css";

class AppFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeBtn: "all",
    };
  }

  onToggleActive = (e) => {
    const btn = document.querySelectorAll(".btn");

    btn.forEach((btn) => {
      btn.classList.remove("active");
    });

    e.target.classList.add("active");

    const listEmpl = document
      .querySelector(".active")
      .getAttribute("data-toggle");
    this.setState({
      activeBtn: listEmpl,
    });
    this.props.onSearchActiveBtn(listEmpl);
  };

  render() {
    return (
      <div className="btn-group">
        <button
          type="button"
          className="btn btn-outline-light active"
          onClick={this.onToggleActive}
          data-toggle="all"
        >
          Все сотрудники
        </button>
        <button
          type="button"
          className="btn btn-outline-light"
          onClick={this.onToggleActive}
          data-toggle="rise"
        >
          На повышение
        </button>
        <button
          type="button"
          className="btn btn-outline-light"
          onClick={this.onToggleActive}
          data-toggle="more"
        >
          З/П больше 1000$
        </button>
      </div>
    );
  }
}

export default AppFilter;
