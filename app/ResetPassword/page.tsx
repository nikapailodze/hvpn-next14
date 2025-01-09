"use client";
// import { useRecoilState } from "recoil";
import styles from "./page.module.scss";
// import { locationIsSelectedState } from "@/global/atoms";
import Image from "next/image";
import { IconEnum } from "@/global/Icon.enum";
// import { SubmitHandler, useForm } from "react-hook-form";
import InboxItem from "./Components/InboxItem/InboxItem";
import SendEmail from "./Components/SendEmail/SendEmail";
import Reset from "./Components/Reset/Reset";
import BackToLogin from "./Components/BackToLogin/BackToLogin";


export default function Home() {
  //   const [states] = useRecoilState(locationIsSelectedState)
  // const { register, handleSubmit } = useForm<Inputs>();
  // const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <div className={styles.page}>
      {/* <Reset/> */}
      {/* <SendEmail/>
      <InboxItem/> */}

     {/* <BackToLogin/> */}
    </div>
  );
}
