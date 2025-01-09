import { IconEnum } from '@/global/Icon.enum';
import styles from './BackToLogin.module.scss';
import Image from 'next/image';

const BackToLogin = () => {
  return (
    <div className={styles.signupWrapper}>
      <Image
        src={IconEnum.leftArrowPurple}
        width={20}
        height={20}
        alt="sign up"
      />
      <a className={styles.createAccontAncor} href="./Login">
        Back to log in
      </a>
    </div>
  );
};

export default BackToLogin;