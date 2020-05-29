import React, { PureComponent } from 'react';
import classnames from 'classnames';

import styles from './styles.css';

export default class Board extends PureComponent {
  render() {
    const { className, style, children, ...props } = this.props;
    return (
      <div className={styles.component}>
        <ul {...props} className={classnames(className)} style={style}>
          {children} ChessBoard11
        </ul>
      </div>
    );
  }
}
