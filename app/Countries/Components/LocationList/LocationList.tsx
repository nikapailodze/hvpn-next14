import LocationItem from '../LocationItem/LocationItem';
import styles from './LocationList.module.scss'

interface countries {
    countryFlag: string;
    country: string;
    locations: string;
    isPremium: boolean;
}

interface Props {
    type?: boolean;
    countries: countries[];
}

const LocationList = (props: Props) => {
    

    return (
        <div className={styles.content}>
            <div className={styles.container}>
                {props.countries.map((item, index) => (
                    <LocationItem
                        key={index}
                        id={index}
                        countryFlag={item.countryFlag}
                        isPremum={item.isPremium}
                        country={item.country}
                        locations={item.locations}
                    />
                ))}


            </div>
        </div>

    )
}

export default LocationList;