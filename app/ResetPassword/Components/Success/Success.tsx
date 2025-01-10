import Button from '@/app/Components/Button/Button';
import styles from './Success.module.scss';
import Image from 'next/image';
import { IconEnum } from '@/global/Icon.enum';

const Success = ()=>{
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.imageWrapper}>
                    <Image src={IconEnum.Success} width={53} height={53} alt='success' />
                </div>
                <p className={styles.text}>Password has been changed successfully</p>
                <Button type={'Fill'}>Go to page</Button>
            </div>
        </div>
    )
}
export default Success;