import React from 'react';
import PropTypes from 'prop-types';

export default function Button(props) {
  const {
    buttonName, wide, color, clickHandler,
  } = props;

  return (
    <button
      style={{ width: wide, backgroundColor: color }}
      type="button"
      className="btn"
      onClick={clickHandler}
    >
      {buttonName}
    </button>
  );
}

Button.propTypes = {
  wide: PropTypes.string,
  color: PropTypes.string,
  buttonName: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

Button.defaultProps = {
  wide: '25%',
  color: '#ddd',
};
