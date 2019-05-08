import React from 'react';
import { Button } from 'components';
import styles from './home.less';

class Home extends React.Component {
  render() {
    return (
      <div
        className={styles.container}
      >
        <div
          className={styles.top_container}
        >
          <div
            className={styles.img}
          />
          <div
            className={styles.desc}
          >
            正面平视手机、保证光线充足
            <br />
            请勿遮挡面部
          </div>
        </div>
        <div
          className={styles.bottom_container}
        >
          <div
            className={styles.prompt_box_text}
          >
            <div
              className={styles.prompt_box_text_number}
            >
              1
            </div>
            <div
              className={styles.prompt_box_text_content}
            >
              牢记验证码，点击开始录制
            </div>
            <div
              className={styles.prompt_box_text_border}
            />
          </div>
          <div
            className={styles.prompt_box_text}
          >
            <div
              className={styles.prompt_box_text_number}
            >
              2
            </div>
            <div
              className={styles.prompt_box_text_content}
            >
              开启前置摄像头，用普通话朗读数字
            </div>
            <div
              className={styles.prompt_box_text_border}
            />
          </div>
          <div
            className={styles.prompt_box_text}
          >
            <div
              className={styles.prompt_box_text_number}
            >
              3
            </div>
            <div
              className={styles.prompt_box_text_content}
            >
              完成录制，等待验证结果
            </div>
          </div>
          <Button
            text="下一步"
            wrapClassName={styles.button}
            onClick={() => {
              console.log(123);
            }}
          />
        </div>
      </div>
    );
  }
}

export default Home;
