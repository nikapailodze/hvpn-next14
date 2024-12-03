import styles from "./SearchComponent.module.scss"
import AsideSearch from "./Components/AsideSearch/AsideSearch"
import TabSelector from "./Components/TabSelector/TabSelector";
import LocationList from "./Components/LocationList/LocationList";
import { useState } from "react";

const SearchComponent = () => {
    const [isPremiumActive, setisPremiumActive] = useState(true)

    const onPremiumClick = () => {
        setisPremiumActive(!isPremiumActive)
    }
    const onFreeClick = () => {
        setisPremiumActive(!isPremiumActive)
    }

    return (
        <div className={styles.container}>
            <AsideSearch />
            <TabSelector
                isPremiumActive={isPremiumActive}
                onPremiumClick={onPremiumClick}
                onFreeClick={onFreeClick}
            />
            <LocationList type={isPremiumActive}/>
        </div>
    )
}
export default SearchComponent;