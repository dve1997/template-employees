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
        { name: "Denisov V.", salary: 1000, increase: true, rise: true, id: 1 },
        {
          name: "Denisova D.",
          salary: 1500,
          increase: false,
          rise: false,
          id: 2,
        },
        {
          name: "Zalaldinov O.",
          salary: 2000,
          increase: false,
          rise: false,
          id: 3,
        },
        {
          name: "Zalaldinova V.",
          salary: 2500,
          increase: false,
          rise: false,
          id: 4,
        },
      ],
    };
    this.idEmpl = 10;
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
      id: this.idEmpl,
    };
    this.idEmpl++;

    this.setState(({ dataEmpl }) => {
      const arr = [...dataEmpl];

      if (employee.name && employee.salary) {
        arr.push(employee);
      } else if (!document.querySelector(".error")) {
        const error = document.createElement("div");
        error.innerHTML = `Заполните поля`;
        error.classList.add("error");
        error.style.marginLeft = "20px";
        document.querySelector("form").append(error);
        setTimeout(() => error.remove(), 3000);
      }

      return { dataEmpl: arr };
    });
  };

  onToggleProp = (id, prop) => {
    this.setState(({ dataEmpl }) => ({
      dataEmpl: dataEmpl.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      }),
    }));
  };

  render() {
    const qauntityEmpl = this.state.dataEmpl.length;
    const qauntityEmplIncrease = this.state.dataEmpl.filter(
      (item) => item.increase === true
    ).length;

    return (
      <div className="app">
        <AppInfo
          qauntityEmpl={qauntityEmpl}
          qauntityEmplIncrease={qauntityEmplIncrease}
        />

        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>

        <EmployeesList
          data={this.state.dataEmpl}
          removeEmployee={this.removeEmployee}
          onToggleProp={this.onToggleProp}
        />
        <EmployeesAddForm createEmployee={this.createEmployee} />
      </div>
    );
  }
}

export default App;
