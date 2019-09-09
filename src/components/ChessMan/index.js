import React from 'react';
import classnames from 'classnames';

import styles from './styles.css';

const ChessMan = props => {
  const { className, style, children, ...others } = this.props;
  return (
    <li {...others} className={classnames(styles.component, className)} style={style}>
      {children}
    </li>
  )
}

export default ChessMan;