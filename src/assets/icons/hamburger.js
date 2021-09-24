
import * as React from 'react';

function Hamburger(props) {
  return (
    <svg viewBox="0 0 100 80" width="40" height="40" {...props}>
        <rect width="100" height="10" {...props.fill}></rect>
        <rect y="20" width="100" height="10"  {...props.fill} ></rect>
        <rect y="40" width="100" height="10" {...props.fill} ></rect>
    </svg>
 );
}

export default Hamburger;
