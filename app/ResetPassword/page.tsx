"use client";
// import { useRecoilState } from "recoil";
import styles from "./page.module.scss";
// import { locationIsSelectedState } from "@/global/atoms";
import Image from "next/image";
import { IconEnum } from "@/global/Icon.enum";
import InputItem from "../Components/InputItem/InputItem";
import { SubmitHandler, useForm } from "react-hook-form";
import Button from "../Components/Button/Button";

type Inputs = {
  Email: string;
};
export default function Home() {
  //   const [states] = useRecoilState(locationIsSelectedState)
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <div className={styles.page}>
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
    </div>
  );
}
