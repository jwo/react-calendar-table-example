import React, { Component } from 'react';
import './App.css';
import Calendar from './Calendar';
import leftPad from 'left-pad';

class App extends Component {

  constructor(props) {
    super(props)

    const today = new Date();

    const dateOfMonth = today.getDate();
    const monthOfYear = today.getMonth() + 1; // 0 based
    const year        = today.getFullYear();

    this.state = {
      day: dateOfMonth,
      month: monthOfYear,
      year: year
    }
  }

  render() {

    const end = 2020;
    const start = 1900;
    const yearRange = Array.from({length: (end - start)}, (v, k) => k + start);

    const formattedDate = [
      leftPad(this.state.year, 4, 0),
      leftPad(this.state.month, 2, 0),
      leftPad(this.state.day, 2, 0)
    ].join("-");

    return (
      <div className="App">
        <div className="App-header">
          <h2>Calendar Example in React</h2>
        </div>

        <form className="year-selection">
          <label htmlFor="month">Month</label>
          <select name="month" value={this.state.month} onChange={(e) => this.setState({month: e.target.value})}>
            <option value="01">01 - January</option>
            <option value="02">02 - February</option>
            <option value="03">03 - March</option>
            <option value="04">04 - April</option>
            <option value="05">05 - May</option>
            <option value="06">06 - June</option>
            <option value="07">07 - July</option>
            <option value="08">08 - August</option>
            <option value="09">09 - September</option>
            <option value="10">10 - October</option>
            <option value="11">11 - November</option>
            <option value="12">12 - December</option>
          </select>

          <label htmlFor="year">Year</label>

          <select name="year" value={this.state.year} onChange={(e) => this.setState({year: e.target.value})}>
            {yearRange.map( (year) => {
              return <option key={year} value={year}>{year}</option>
            })}
          </select>
        </form>
        <Calendar date={formattedDate}/>

        <footer>
          <p>Created by <a href="http://twitter.com/jwo">@jwo</a> for no real reason.</p>
          <p>On <a href="http://github.com/jwo/react-calendar-table-example">Github</a></p>
        </footer>
      </div>
    );
  }
}

export default App;
