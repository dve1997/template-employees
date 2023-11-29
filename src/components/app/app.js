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
          increase: true,
          rise: true,
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
      term: "",
      activeBtn: "all",
    };
    this.idEmpl = 10;
  }

  onRemoveEmployee = (id) => {
    this.setState(({ dataEmpl }) => {
      return { dataEmpl: dataEmpl.filter((item) => item.id !== id) };
    });
  };

  onCreateEmployee = (name, salary) => {
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

  onSearchEmpl = (items, term, activeBtn) => {
    if (term.length === 0 && activeBtn === "all") {
      return items;
    }

    if (term.length === 0 && activeBtn === "rise") {
      return items.filter((item) => {
        return item.rise === true;
      });
    }

    if (term.length === 0 && activeBtn === "more") {
      return items.filter((item) => {
        return item.salary > 1000;
      });
    }

    if (term.length !== 0 && activeBtn === "all") {
      return items.filter((item) => {
        return item.name.includes(term);
      });
    }

    if (term.length !== 0 && activeBtn === "rise") {
      return items.filter((item) => {
        if (item.name.includes(term) && item.rise === true) {
          return item;
        }
      });
    }

    if (term.length !== 0 && activeBtn === "more") {
      return items.filter((item) => {
        if (item.name.includes(term) && item.salary > 1000) {
          return item;
        }
      });
    }
  };

  onSearchTerm = (term) => {
    this.setState({
      term: term,
    });
  };

  onSearchActiveBtn = (activeBtn) => {
    this.setState({
      activeBtn: activeBtn,
    });
  };

  render() {
    const { dataEmpl, term, activeBtn } = this.state;
    const qauntityEmpl = this.state.dataEmpl.length;
    const qauntityEmplIncrease = this.state.dataEmpl.filter(
      (item) => item.increase === true
    ).length;
    const searchEmpl = this.onSearchEmpl(dataEmpl, term, activeBtn);

    return (
      <div className="app">
        <AppInfo
          qauntityEmpl={qauntityEmpl}
          qauntityEmplIncrease={qauntityEmplIncrease}
        />

        <div className="search-panel">
          <SearchPanel onSearchTerm={this.onSearchTerm} />
          <AppFilter onSearchActiveBtn={this.onSearchActiveBtn} />
        </div>

        <EmployeesList
          data={searchEmpl}
          onRemoveEmployee={this.onRemoveEmployee}
          onToggleProp={this.onToggleProp}
        />
        <EmployeesAddForm onCreateEmployee={this.onCreateEmployee} />
      </div>
    );
  }
}

export default App;
