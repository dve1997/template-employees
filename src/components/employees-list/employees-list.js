import { Component } from "react";

import EmployeesListItem from "../employees-list-item/employees-list-item";

import "./employees-list.css";

class EmployeesList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data, removeEmployee } = this.props;

    let elements = data.map((item) => {
      return (
        <EmployeesListItem
          name={item.name}
          salary={item.salary}
          key={item.id}
          removeEmployee={() => removeEmployee(item.id)}
        />
      );
    });

    return <ul className="app-list list-group">{elements}</ul>;
  }
}

export default EmployeesList;
