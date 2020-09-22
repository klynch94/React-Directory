import React, { Component } from 'react';
import EmployeeCard from "./components/EmployeeCard";
import employees from "./employees.json";
import Wrapper from "./components/Wrapper";

class App extends Component {
  // setting state to all employees in array
  state = {
    employees
  };

  // Map over employees and render EmployeeCard components
  render() {
    return (
      <Wrapper>
        {/* <Title>Employees</Title> */}
        {this.state.employees.map(employee => (
          <EmployeeCard
            id={employee.id}
            key={employee.id}
            name={employee.name}
            image={employee.image}
            role={employee.role}
            office={employee.office}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
