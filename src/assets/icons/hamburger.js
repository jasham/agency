
import * as React from 'react';

function Hamburger(props) {
  return (
    <svg viewBox="0 0 100 80" width="40" height="40" {...props}>
        <rect width="100" height="20" {...props.fill}></rect>
        <rect y="30" width="100" height="20"  {...props.fill} ></rect>
        <rect y="60" width="100" height="20" {...props.fill} ></rect>
    </svg>
 );
}

export default Hamburger;
