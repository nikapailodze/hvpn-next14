import styles from './DropOption.module.scss'
import Image from 'next/image';

interface Props{
    image:string;
    title:string;
    onClick?: ()=>void;
}

const DropOption = ({image,title,onClick}:Props)=>{
    return (
        <button onClick={onClick} className={styles.container}>    
            <div className={styles.icon}>
                <Image src={image} width={20} height={20} alt='icon'/>
            </div>
            <div>
                <p>{title}</p>
            </div>
        </button>
    )
}

export default DropOption;