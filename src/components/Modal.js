import React from 'react';
import { Button } from 'components';
import styles from './modal.less';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expiredCountdown: 300,
      ableCountdown: 3,
      code: '',
    };
  }

  componentDidMount() {
    this.runExpiredCountdown();
    this.runAbleCountdown();
    this.getVoiceSessionCode();
  }

  componentWillUnmount() {
    console.log('componentWillMount');
  }

  getVoiceSessionCode = () => {
    const { getVoiceSessionCode } = this.props;
    getVoiceSessionCode().then((data) => {
      this.setState({
        code: data.result.code,
      });
    });
  }

  runExpiredCountdown = () => {
    this.expiredInterval = setInterval(() => {
      const { expiredCountdown } = this.state;
      if (expiredCountdown === 0) {
        this.setState({
          expiredCountdown: 300,
          ableCountdown: 3,
        }, () => {
          this.runAbleCountdown();
        });
        this.getVoiceSessionCode();
        return;
      }
      this.setState({
        expiredCountdown: expiredCountdown - 1,
      });
    }, 1000);
  }

  runAbleCountdown = () => {
    this.ableInterval = setInterval(() => {
      const { ableCountdown } = this.state;
      if (ableCountdown === 0) {
        clearInterval(this.ableInterval);
        return;
      }
      this.setState({
        ableCountdown: ableCountdown - 1,
      });
    }, 1000);
  }

  removeModal = () => {
    clearInterval(this.expiredInterval);
    clearInterval(this.ableInterval);
    const layer = document.getElementById('layer');
    document.body.removeChild(layer);
  }

  render() {
    const { code } = this.state;
    const { expiredCountdown, ableCountdown } = this.state;
    return (
      <div
        className={styles.layer}
      >
        <div
          className={`${styles.mask} ${styles.layer}`}
        />
        <div
          className={styles.popup}
        >
          <div
            className={styles.title}
          >
            请牢记以下验证码
          </div>
          <div
            className={styles.content}
          >
            此验证码将于
            <span>{expiredCountdown}</span>
            秒后过期
            <br />
            用普通话朗读数字，视频时长
            <span>5-15</span>
            秒最佳
          </div>
          <div
            className={styles.number_content}
          >
            {
              code !== '' && code.split('').map((item, index) => {
                return (
                  <div
                    key={index}
                  >
                    {item}
                  </div>
                );
              })
            }
          </div>
          <Button
            text={ableCountdown > 0 ? `记住了，开始录制(${ableCountdown})` : '记住了，开始录制'}
            wrapClassName={`${styles.button} ${ableCountdown > 0 ? styles.disabled : ''}`}
          >
            <input
              type="file"
              accept="video/*"
              capture="camcorder"
              className={styles.camera_input}
              disabled={ableCountdown > 0}
              onChange={(event) => {
                console.log('event', event.target);
                console.log('event', event.target.files[0]);
                const reader = new FileReader();
                reader.readAsDataURL(event.target.files[0]);
                // 异步读取
                reader.onload = (e) => {
                  console.log(e);
                  console.log(e.target.result);
                };
              }}
            />
          </Button>
        </div>
        <div
          className={styles.close_button}
          onClick={() => {
            this.removeModal();
          }}
        />
      </div>
    );
  }
}

export default Modal;
