import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const { name, onClick } = props;
  return (
    <>
      <button
        type="button"
        onClick={onClick}
      >
        {name}
      </button>
    </>

  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
