import React, { Component } from 'react';
import moment from 'moment';
import MomentCalendarFactory from 'moment-calendar-2/src/api';

class Calendar extends Component {

  constructor(props) {
    super(props)

    window.moment = moment;

    this.state = {
      date: this.props.date
    }

    this.calendar = MomentCalendarFactory.getInstance();
  }

  componentWillReceiveProps(newProps){
    this.setState({
      date: newProps.date
    });
  }

  render() {

    this.calendar.setCurrentDate(this.state.date);
    const weeks = this.calendar.getWeeksTable(true);

    return <div className="calendar">
      {weeks.map( (days, i) => {
        return <div className="week" key={i}>
          {days.map( (day, di) =>{
            return <div className="day" key={di}>
              {day || "\u00a0"}
            </div>
          })}
        </div>
      })}
    </div>
  }
}

export default Calendar;
