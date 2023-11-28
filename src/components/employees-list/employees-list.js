import { Component } from "react";

import EmployeesListItem from "../employees-list-item/employees-list-item";

import "./employees-list.css";

class EmployeesList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data, removeEmployee, onToggleProp } = this.props;

    let elements = data.map((item) => {
      return (
        <EmployeesListItem
          name={item.name}
          salary={item.salary}
          increase={item.increase}
          rise={item.rise}
          key={item.id}
          removeEmployee={() => removeEmployee(item.id)}
          onToggleProp={(e) =>
            onToggleProp(item.id, e.currentTarget.getAttribute("data-toggle"))
          }
        />
      );
    });

    return <ul className="app-list list-group">{elements}</ul>;
  }
}

export default EmployeesList;
