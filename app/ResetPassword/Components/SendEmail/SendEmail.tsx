import InputItem from "@/app/Components/InputItem/InputItem";
import styles from "./SendEmail.module.scss";
import Image from "next/image";
import Button from "@/app/Components/Button/Button";
import { SubmitHandler, useForm } from "react-hook-form";
type Inputs = {
  Email: string;
};

const SendEmail = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <div className={styles.content}>
      <div className={styles.titles}>
        <div className={styles.titleWrapper}>
          <Image src={"/Logo/Logo.svg"} width={40} height={40} alt="logo" />
          <h1 className={styles.title}>Welcome to H-vpn</h1>
        </div>
        <p className={styles.subText}>
          Please enter your email to reset password
        </p>
      </div>

      <div className={styles.inputs}>
        <p className={styles.inputsTitle}>Reset password</p>
        <InputItem
          label="Email"
          register={register("Email", { required: true })}
        />
        <Button typeSubmit type={"Fill"}>
          Send
        </Button>
      </div>
    </div>
  );
};

export default SendEmail;
