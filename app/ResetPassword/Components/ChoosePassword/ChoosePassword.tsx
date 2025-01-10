import { IconEnum } from "@/global/Icon.enum";
import styles from "./ChoosePassword.module.scss";
import Image from "next/image";
import InputItem from "@/app/Components/InputItem/InputItem";
import { SubmitHandler, useForm } from "react-hook-form";
import Button from "@/app/Components/Button/Button";
import PasswordStrength from "@/app/Register/Components/PasswordStreng/PasswordStreng";
import BackToLogin from "../BackToLogin/BackToLogin";

type Inputs = {
  Password: string;
};

const ChoosePassword = () => {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <div className={styles.wrapper}>
      <div className={styles.titles}>
        <div className={styles.titleWrapper}>
          <Image src={"/Logo/Logo.svg"} width={40} height={40} alt="logo" />
          <h1 className={styles.title}>Welcome to H-vpn</h1>
        </div>
        <p className={styles.subText}>
          Please enter your email to reset password
        </p>
      </div>

      <form
        className={styles.formWrapper}
        onSubmit={handleSubmit(onSubmit)}
        action=""
      >
        <div className={styles.inputsWrapper}>
          <div className={styles.inputs}>
            <InputItem
              label="Password"
              register={register("Password", { required: true })}
            />
          </div>
          <PasswordStrength />
          <div className={styles.warningWrapper}>
            <Image src={IconEnum.Warning} width={24} height={24} alt="mark" />
            <p className={styles.warningText}>
              You’ll be logged out on all devices
            </p>
          </div>
        </div>

        <Button typeSubmit type={"Fill"}>
          Send
        </Button>

        <BackToLogin />
      </form>
    </div>
  );
};
export default ChoosePassword;
