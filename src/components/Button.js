import React from 'react';
import PropTypes from 'prop-types';

export default function Button(props) {
  const {
    buttonName, isOperator, isZero, clickHandler,
  } = props;
  if (isOperator) {
    return (
      <button
        type="button"
        className="op-btn"
        onClick={clickHandler}
      >
        {buttonName}
      </button>
    );
  }
  return (
    <button
      type="button"
      className={isZero ? 'btn zero' : 'btn'}
      onClick={clickHandler}
    >
      {buttonName}
    </button>
  );
}

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  isZero: PropTypes.bool.isRequired,
  isOperator: PropTypes.bool.isRequired,
  clickHandler: PropTypes.func.isRequired,
};
