import Button from "@/app/Components/Button/Button";
import styles from "./Reset.module.scss";
import Image from "next/image";
const Reset = () => {
  return (
    <div className={styles.contianer}>
      <div className={styles.titles}>
        <div className={styles.titleWrapper}>
          <Image src={"/Logo/Logo.svg"} width={40} height={40} alt="logo" />
          <h1 className={styles.title}>H-VPN</h1>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.textsWrapper}>
          <p className={styles.defaultText}>
            Reset your H-VPN Account password
          </p>
          <div className={styles.mainContent}>
            <div className={styles.texts}>
              <p className={styles.defaultText}>Hi Olivia,</p>
              <p className={styles.defaultText}>
                Alicia has invited you to join the team on H-vpn.
              </p>
            </div>
            <Button type={"Fill"}>Reset password</Button>
            <div className={styles.texts}>
              <p className={styles.defaultText}>Thanks,</p>
              <p className={styles.defaultText}>The team</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className={styles.subText}>
          This email was sent to{" "}
          <a className={styles.purpleSubtext} href="">
            olivia@untitledui.com.
          </a>{" "}
          If you'd rather not receive this kind of email, you can{" "}
          <a className={styles.purpleSubtext} href="">unsubscribe</a> or{" "}
          <a className={styles.purpleSubtext} href="">manage your email preferences.</a>
        </p>
        <p className={styles.subText}>© 2077 Untitled UI, 100 Smith Street, Melbourne VIC 3000</p>
      </div>
    </div>
  );
};

export default Reset;
