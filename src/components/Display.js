import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

function Display(props) {
  const { result } = props; // destructoring
  const text = useRef(null);
  useEffect(() => {
    const { result } = props; // destructoring
    const node = text.current;
    node.style.fontSize = '40px';
    const width = node.scrollWidth;
    const overflowWidth = width - 320;
    if (result) {
      const resultLength = result.length;
      if (overflowWidth > 0 && resultLength > 16) {
        node.style.fontSize = '30px';
      }
    }
  });

  return (
    <div className="display">
      <span ref={text} id="text">{result}</span>
    </div>
  );
}

export default Display;
Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: null,
};
