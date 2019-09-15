import React from 'react';
import './App.css';
import Form from './components/Form';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: 'Ada',
      lastName: 'Lovelace',
      birdthDate: {
        day: 10,
        month: 12,
        year: 1815
      }
    }
    this.onChangeValue = this.onChangeValue.bind(this);
  }

  onChangeValue(event) {
    const atribute = event.currentTarget.getAttribute('name');
    const value = event.currentTarget.value;
    this.setState(prevState => {
      if ([atribute] !== 'birdthDate') {
        return {
          [atribute]: value
        }
      } else {
        return {
          birdthDate: {
            ...prevState.birthDate,
            day: value.day,
            year: value.year,
            month: value.month,
          }
        }
      }
    }
    )
  }

  render() {
    const { firstName, lastName, birdthDate } = this.state;
    const { day, month, year } = birdthDate;
    return (
      <div className="general--container">
        <Form onChangeValue={this.onChangeValue} firstName={firstName} lastName={lastName} day={day} month={month} year={year}/>
      </div>

    );
  }
}

export default App;
