import React, { PureComponent } from 'react';
import classnames from 'classnames';

import styles from './styles.css';

export default class ChessBoard extends PureComponent {
  render() {
    const { className, style, children, ...props } = this.props;
    return (
      <ul
        {...props}
        className={classnames(styles.component, className)}
        style={style}
      >
        {children}
      </ul>
    );
  }
}
