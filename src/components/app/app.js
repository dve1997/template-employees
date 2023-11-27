import { Component } from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataEmpl: [
        { name: "Denisov V.", salary: 1000, id: 1 },
        { name: "Denisova D.", salary: 1500, id: 2 },
        { name: "Zalaldinov O.", salary: 2000, id: 3 },
        { name: "Zalaldinova V.", salary: 2500, id: 4 },
      ],
    };
    this.counter = 10;
  }

  removeEmployee = (id) => {
    this.setState(({ dataEmpl }) => {
      return { dataEmpl: dataEmpl.filter((item) => item.id !== id) };
    });
  };

  createEmployee = (name, salary) => {
    let employee = {
      name: name,
      salary: +salary,
      id: this.counter,
    };
    this.counter++;

    this.setState(({ dataEmpl }) => {
      const arr = [...dataEmpl];
      arr.push(employee);

      return { dataEmpl: arr };
    });
  };

  render() {
    return (
      <div className="app">
        <AppInfo />

        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>

        <EmployeesList
          data={this.state.dataEmpl}
          removeEmployee={this.removeEmployee}
        />
        <EmployeesAddForm createEmployee={this.createEmployee} />
      </div>
    );
  }
}

export default App;
