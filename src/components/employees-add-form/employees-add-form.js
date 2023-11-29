import { Component } from "react/cjs/react.production.min";

import "./employees-add-form.css";

class EmployeesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      salary: "",
    };
  }

  onInputsChange = (e) => {
    this.setState((state) => ({
      [e.target.name]: e.target.value,
    }));
  };

  render() {
    const { name, salary, onCreateEmployee } = this.props;
    const { name: nameValue, salary: salaryValue } = this.state;

    return (
      <div className="app-add-form">
        <h3>Добавьте нового сотрудника</h3>
        <form className="add-form d-flex">
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="Как его зовут?"
            name="name"
            value={name}
            onChange={this.onInputsChange}
          />
          <input
            type="number"
            className="form-control new-post-label"
            placeholder="З/П в $?"
            name="salary"
            value={salary}
            onChange={this.onInputsChange}
          />

          <button
            type="submit"
            className="btn btn-outline-light"
            onClick={(e) => {
              e.preventDefault();
              onCreateEmployee(nameValue, salaryValue);
              document.querySelector("form").reset();
            }}
          >
            Добавить
          </button>
        </form>
      </div>
    );
  }
}

export default EmployeesAddForm;
