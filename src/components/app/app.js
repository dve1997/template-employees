import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import "./app.css";

function App() {
  const dataEmpl = [
    { name: "Denisov V.", salary: 1000, id: 1 },
    { name: "Denisova D.", salary: 1500, id: 2 },
    { name: "Zalaldinov O.", salary: 2000, id: 3 },
    { name: "Zalaldinova V.", salary: 2500, id: 4 },
  ];

  return (
    <div className="app">
      <AppInfo />

      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>

      <EmployeesList data={dataEmpl} />
      <EmployeesAddForm />
    </div>
  );
}

export default App;
