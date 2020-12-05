import React, { Component } from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';

class Habits extends Component {
  handleIncrement = (habit) => {
    this.props.onIncrement(habit);
  };

  handleDecrement = (habit) => {
    this.props.onDecrement(habit);
  };

  handleDelete = (habit) => {
    this.props.onDelete(habit);
  };

  handleAdd = (habit) => {
    this.props.onAdd(habit);
  };

  handleReset = (habit) => {
    this.props.onReset(habit);
  };

  render() {
    return (
      <>
        <HabitAddForm onAdd={this.handleAdd} />
        <ul>
          {this.props.habit.map((habit) => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
              onDelete={this.handleDelete}
            />
          ))}
        </ul>
        <button className="reset-button" onClick={this.props.onResetCount}>
          Counter Reset
        </button>
        <button className="reset-button" onClick={this.handleReset}>
          Reset all
        </button>
      </>
    );
  }
}

export default Habits;
