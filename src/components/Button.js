import React from 'react';
import styles from './button.less';

class Button extends React.Component {
  render() {
    const { text, wrapClassName, children, ...rest } = this.props;
    return (
      <div
        className={`${styles.container} ${wrapClassName}`}
        {...rest}
      >
        {text}
        {children}
      </div>
    );
  }
}

export default Button;
