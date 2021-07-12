import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const { name } = props;
  return (
    <Fragment key="">
      <button type="button">{name}</button>
    </Fragment>

  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Button;
