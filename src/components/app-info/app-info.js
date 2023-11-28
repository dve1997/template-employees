import { Component } from "react/cjs/react.development";

import "./app-info.css";

class AppInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { qauntityEmpl, qauntityEmplIncrease } = this.props;

    return (
      <div className="app-info">
        <h1>Учет сотрудников в компании N</h1>
        <h2>Общее число сотрудников: {qauntityEmpl}</h2>
        <h2>Премию получат: {qauntityEmplIncrease}</h2>
      </div>
    );
  }
}

export default AppInfo;
