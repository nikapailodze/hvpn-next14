import { FreeCountriesInterface } from '@/global/interfaces';
import styles from './FreeCountry.module.scss'
import Image from 'next/image'



const FreeCountry = ({flag,country}:FreeCountriesInterface)=>{
    return(
        <div className={styles.container}>
            <Image src={flag} width={24} height={24} alt='country flag' />
            <p className={styles.text}>{country}</p>

        </div>
    )

}

export default FreeCountry;