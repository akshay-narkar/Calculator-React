import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
      decimal: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const {
      next, decimal, total, operation,
    } = this.state;
    const calc = calculate(this.state, event.target.innerHTML);

    if (calc.operation1 == null && calc.next1 != null) {
      if (next == null) {
        if (calc.decimal) {
          this.setState(() => ({
            next: calc.next1,
            decimal: true,
          }

          ));
        } else {
          this.setState(() => ({
            next: calc.next1,
          }

          ));
        }
      } else if (calc.decimal) {
        if (decimal === null) {
          this.setState((state1) => ({
            next: state1.next + calc.next1,
            decimal: true,
          }
          ));
        }
      } else if (calc.nonoperation) {
        this.setState(() => ({
          next: (calc.next1).toString(),

        }
        ));
      } else if (total === next) {
        this.setState(() => ({
          next: calc.next1,

        }
        ));
      } else if (calc.total1 === calc.next1) {
        this.setState(() => ({
          total: calc.next1,
          next: calc.total1.toString(),
          operation: null,
          decimal: null,

        }
        ));
      } else {
        this.setState((state1) => ({
          next: state1.next + calc.next1,
        }

        ));
      }
    } else if (calc.operation1 == null && calc.next1 == null) {
      this.setState(() => ({
        total: null,
        next: null,
        operation: null,
        decimal: null,
      }

      ));
    } else if (calc.operation1 !== null) {
      if (calc.total1 && total && next !== '') {
        if (calc.decimal) {
          if (decimal === null) {
            this.setState((state1) => ({
              next: state1.next + calc.next1,
              decimal: true,
            }
            ));
          }
        } else {
          this.setState(() => ({
            total: calc.total1,
            operation: calc.operation1,
            next: calc.total1,
            decimal: null,
          }

          ));
        }
      } else if (calc.total1 && next !== '') {
        this.setState(() => ({
          total: calc.total1,
          operation: calc.operation1,
          next: '',
          decimal: null,

        }

        ));
      } else if (operation) {
        this.setState((state1) => ({
          next: state1.next + calc.next1,
          decimal: null,
        }
        ));
      } else {
        this.setState(() => ({
          operation: calc.operation1,
          next: calc.next1,
          decimal: null,

        }

        ));
      }
    }
  }

  render() {
    const { next } = this.state;
    return (
      <>
        <ButtonPanel onClick={this.handleClick} />
        <br />
        <Display result={next} />
      </>
    );
  }
}
export default App;
