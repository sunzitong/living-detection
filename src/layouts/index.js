import React from 'react';
import styles from './index.less';

class BasicLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div className={styles.basicLayout}>
        {children}
      </div>
    );
  }
}

export default BasicLayout;
