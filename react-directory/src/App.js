import React, { Component } from 'react';
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import API from "./utils/API";
import SearchBar from "./components/SearchBar";

class App extends Component {
  state = {
    result: [],
    originalResult: [],
    search: ""
  };

  componentDidMount() {
    this.searchEmployees();
  }

  searchEmployees = () => {
    API.search()
      .then(res => this.setState({ result: res.data.results , originalResult: res.data.results}))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });

    let filteredEmployees = this.state.originalResult.filter(employee => {
      return employee.name.first.toLowerCase().includes(value.toLowerCase()) || employee.name.last.toLowerCase().includes(value.toLowerCase())
    })
    this.setState({
      result: filteredEmployees
    })
  };

  // sort in acending order
  handleFormSubmit = event => {
    event.preventDefault();
    let acending=this.state.result.sort((a,b) => {
      return a.name.last.localeCompare(b.name.last)
    })
    this.setState({
      result: acending
    })
  };

  render() {
    return (
      <Wrapper>
        <Title>Employee Directory</Title>
        {console.log(this.state.result)}
        <SearchBar handleFormSubmit={this.handleFormSubmit} handleInputChange={this.handleInputChange}></SearchBar>
        {/* // Map over employees and render EmployeeCard components */}
        {this.state.result.length > 0 ? this.state.result.map((employee,index) => {
          return (
            <EmployeeCard
              key={employee.index}
              name={employee.name.first + " " + employee.name.last}
              image={employee.picture.large}
              role={employee.email}
              office={employee.location.city}
            />
          )
        })
          : ""}
      </Wrapper>
    );
  }
}

export default App;
