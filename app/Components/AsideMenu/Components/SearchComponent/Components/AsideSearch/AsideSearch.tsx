import { IconEnum } from '@/global/Icon.enum';
import styles from './AsideSearch.module.scss'
import Image from 'next/image';
import { useState } from 'react';

const AsideSearch = () => {
    const [inputValue, setInputValue] = useState("Search")
    const onInputChange = (e:any) => {
        setInputValue(e.target.value)
    }
    
    return (
        <div className={styles.container}>
            <Image src={IconEnum.Search} width={24} height={24} alt='search' />
            <input onChange={onInputChange} className={styles.containerSearch} type="text" value={inputValue} />
        </div>
    )
}

export default AsideSearch;