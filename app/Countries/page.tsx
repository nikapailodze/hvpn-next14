'use client'
import { useRecoilState } from "recoil";
import styles from "./page.module.scss";
import { locationIsSelectedState } from "@/global/atoms";
import Search from "./Components/Search/Search";
import RecentConnection from "../Components/RecentConnection/RecentConnection";
import { useState } from "react";
import LocationList from "./Components/LocationList/LocationList";

interface Countries {
    countryFlag: string;
    country: string;
    locations: string;
    isPremium: boolean;
}


export default function Home() {
    const [states] = useRecoilState(locationIsSelectedState)
    const [isLocationSelected] = useState(true)


    const countriesData: Countries[] = [
        {
            countryFlag: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg', // Flag image URL
            country: 'United States',
            locations: 'North America',
            isPremium: true
        },
        {
            countryFlag: 'https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Australia.svg',
            country: 'Australia',
            locations: 'Oceania',
            isPremium: false
        },
        {
            countryFlag: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Canada.svg', // Flag image URL
            country: 'Canada',
            locations: 'North America',
            isPremium: true
        },
        {
            countryFlag: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg', // Flag image URL
            country: 'India',
            locations: 'Asia',
            isPremium: false
        },
        {
            countryFlag: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg', // Flag image URL
            country: 'United States',
            locations: 'North America',
            isPremium: true
        },
        {
            countryFlag: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg', // Flag image URL
            country: 'United States',
            locations: 'North America',
            isPremium: true
        },
        {
            countryFlag: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg', // Flag image URL
            country: 'United States',
            locations: 'North America',
            isPremium: true
        },
        {
            countryFlag: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Germany.svg',
            country: 'Germany',
            locations: 'Europe',
            isPremium: true
        },
        {
            countryFlag: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg', // Flag image URL
            country: 'United States',
            locations: 'North America',
            isPremium: true
        },
        {
            countryFlag: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg', // Flag image URL
            country: 'United States',
            locations: 'North America',
            isPremium: true
        },
        {
            countryFlag: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Flag_of_France.svg',
            country: 'France',
            locations: 'Europe',
            isPremium: true
        },
        {
            countryFlag: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg', // Flag image URL
            country: 'United States',
            locations: 'North America',
            isPremium: true
        },

    ];

    const countriesPremium: Countries[] = countriesData.filter(country => country.isPremium);
    const countriesFree: Countries[] = countriesData.filter(country => !country.isPremium);

    console.log('Premium Countries:', countriesPremium);
    console.log('Free Countries:', countriesFree);


    return (
        <div className={styles.page}>
            <Search />

            <div className={styles.recentConnectionContainer}>
                <h3 className={styles.containers}>Recent Connection</h3>

                <RecentConnection isLocationSelected={isLocationSelected} country="USA" locations="Locations 4"
                    countryFlag="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg" />
            </div>

            <div className={styles.containers}>
                <h3 className={styles.title}>Free</h3>
                <LocationList countries={countriesFree} />
            </div>
            <div className={styles.containers}>
                <h3 className={styles.title}>Premium</h3>
                <LocationList countries={countriesPremium} />
            </div>


        </div>
    );
}
