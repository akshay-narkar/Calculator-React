import PropTypes from 'prop-types';
import React from 'react';
import Button from './Button';

export default function ButtonPanel(props) {
  const renderInput = (buttonName) => {
    const { clickHandler } = props;
    const operators = ['-', '+', '÷', 'x'];
    if (operators.includes(buttonName) || buttonName === '=') {
      return (
        <Button
          clickHandler={() => { clickHandler(buttonName); }}
          buttonName={buttonName}
          color="#fd8d0e"
        />
      );
    } if (buttonName === '0') {
      return (
        <Button
          clickHandler={() => { clickHandler(buttonName); }}
          buttonName={buttonName}
          wide="50%"
        />
      );
    }
    return (
      <Button
        clickHandler={() => { clickHandler(buttonName); }}
        buttonName={buttonName}
      />
    );
  };

  return (
    <div className="button-panel">
      <div className="row">
        {renderInput('AC')}
        {renderInput('+/-')}
        {renderInput('%')}
        {renderInput('÷')}
      </div>
      <div className="row">
        {renderInput('7')}
        {renderInput('8')}
        {renderInput('9')}
        {renderInput('x')}
      </div>
      <div className="row">
        {renderInput('4')}
        {renderInput('5')}
        {renderInput('6')}
        {renderInput('-')}
      </div>
      <div className="row">
        {renderInput('1')}
        {renderInput('2')}
        {renderInput('3')}
        {renderInput('+')}
      </div>
      <div className="row">
        {renderInput('0')}
        {renderInput('.')}
        {renderInput('=')}
      </div>
    </div>
  );
}

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};
