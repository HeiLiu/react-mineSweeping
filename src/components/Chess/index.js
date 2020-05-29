import React from 'react';
import classnames from 'classnames';

import styles from './styles.css';

const Chess = (props) => {
  const { className, style, children, ...others } = props;
  return (
    <li
      {...others}
      className={classnames(styles.component, className)}
      style={style}
    >
      {children} chess
    </li>
  );
};

export default Chess;
