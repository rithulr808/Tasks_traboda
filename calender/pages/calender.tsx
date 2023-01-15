import * as React from 'react';
import dayjs, {Dayjs} from 'dayjs';
import TextField from '@mui/material/TextField';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {StaticDatePicker} from '@mui/x-date-pickers/StaticDatePicker';
import styles from "../styles/Home.module.css";

const isLeapYear = (date: any) => {
    const year = date.year();
    return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
}
type convertDateToHinduDate = { beginningDayOfMonth: any, daysOfHinduMonth: any,
}
const convertDateToHinduDate = (date: any): convertDateToHinduDate => {
    const beginningDayOfMonth = {
        0 : 21,
        1 : 20,
        2 : 22 + (isLeapYear(date) ? 1 : 0), /* 21 in leap years */
        3 : 21,
        4 : 22,
        5 : 22,
        6 : 23,
        7 : 23,
        8 : 23,
        9 : 23,
        10 : 22,
        11 : 22,
        }
    const daysOfHinduMonth = {
        0 : 30 + (isLeapYear(date) ? 1 : 0), /* 31 in leap years */
        1 : 31,
        2 : 31,
        3 : 31,
        4 : 31,
        5 : 31,
        6 : 30,
        7 : 30,
        8 : 30,
        9: 30,
        10 : 30,
        11 : 30,
    }
    return { beginningDayOfMonth, daysOfHinduMonth }
}



const ConvertDate = (date: any) => {

    const data =  date
    const beginningDayMonth =  convertDateToHinduDate(data).beginningDayOfMonth[data.month()]
    const dayHinduMonth = convertDateToHinduDate(data).daysOfHinduMonth[data.month()]
    const m = data.month() - 1 + (date.date() < beginningDayMonth ? -1 : 0)
    const month = m + (m < 1 ? 12 : 0)
    const year = data.year() - 78 + (data.month() < 2 || (data.month() === 2 && date.date() < beginningDayMonth) ? -1 : 0)
    const d = date.date() - beginningDayMonth
    const day = d + (d < 1 ?  dayHinduMonth  : 0) + 1

    const monthNames = [
        "Chaitra",
        "Vaisakha",
        "Jyaistha",
        "Asadha",
        "Shravana",
        "Bhadra",
        "Asvina",
        "Kartika",
        "Agrahayana",
        "Pausa",
        "Magha",
        "Phalguna",
    ]
    const dayNames = [
        "Raviãra",
        "Somavãra",
        "Mañgalvã",
        "Budhavãra",
        "Guruvãra",
        "Sukravãra",
        "Sanivãra",
    ]
    const monthName = monthNames[month - 1]
    const dayName =  dayNames[date.day()]

    return {
        day: day,
        month: month,
        year: year,
        monthName,
        dayName,
    }
}

const StaticDatePickerLandscape = () => {
    const [value, setValue] = React.useState<Dayjs | null>(dayjs('2022-12-02'));

    return (
        <div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StaticDatePicker
                orientation="landscape"
                openTo="day"
                value={value}
                // shouldDisableDate={isWeekend}
                onChange={(newValue) => {
                    setValue(newValue)
                    ConvertDate(newValue)
                    console.log(ConvertDate(newValue))
                }}
                renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>
        <p className={styles.card} style={{color:"black"}}>
         {ConvertDate(value).dayName},
            <br/>
            {ConvertDate(value).monthName} {ConvertDate(value).day}, {ConvertDate(value).year}
        </p>
        </div>

    );
}

export default StaticDatePickerLandscape;