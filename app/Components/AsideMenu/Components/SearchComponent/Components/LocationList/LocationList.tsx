import LocationItem from '../LocationItem/LocationItem';
import styles from './LocationList.module.scss'
import Image from 'next/image'

interface Props {
    type: boolean
}

const LocationList = (props: Props) => {
    const countries = [
        {
            countryFlag: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg",
            country: "United States",
            locations: "8 Locations",
            isPremium: true,
        },
        {
            countryFlag: "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg",
            country: "France",
            locations: "8 Locations",
            isPremium: false,
        },
        {
            countryFlag: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg",
            country: "Germany",
            locations: "8 Locations",
            isPremium: true,
        },
        {
            countryFlag: "https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg",
            country: "India",
            locations: "8 Locations",
            isPremium: false,
        },
        {
            countryFlag: "https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg",
            country: "Brazil",
            locations: "8 Locations",
            isPremium: true,
        },
        {
            countryFlag: "https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg",
            country: "Brazil",
            locations: "8 Locations",
            isPremium: true,
        },
        {
            countryFlag: "https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg",
            country: "Brazil",
            locations: "8 Locations",
            isPremium: true,
        },
        {
            countryFlag: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg",
            country: "United States",
            locations: "8 Locations",
            isPremium: true,
        },
        {
            countryFlag: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg",
            country: "United States",
            locations: "8 Locations",
            isPremium: true,
        },
        {
            countryFlag: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg",
            country: "United States",
            locations: "8 Locations",
            isPremium: true,
        },


    ];

    const countriesFiltered = props.type ? countries.filter(item => item.isPremium == true) : countries.filter(item => item.isPremium == false)

    return (
        <div className={styles.content}>
            <div className={styles.container}>
                {countriesFiltered.map((item, index) => (
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