import { RAWG_API_KEY, RAWG_BASE_API } from "../config/rawg";

export const getAllVideoGames = (fromDate: string, toDate: string) => {
    const api = `${RAWG_BASE_API}/games?key=${RAWG_API_KEY}&dates=${fromDate},${toDate}&ordering=released`;

    return fetch(api);
};

export const getUpcomingVideoGames = () => {
    var currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 1)
    const fromDate = getYYYYMMDD(currentDate);

    currentDate.setDate(currentDate.getDate() - 1)
    currentDate.setFullYear(currentDate.getFullYear() + 1);

    const toDate = getYYYYMMDD(currentDate);

    console.log(`From: ${fromDate}To:${toDate}`);

    return getAllVideoGames(fromDate, toDate);
};

const getYYYYMMDD = (date: Date) => {
    const d = date.getDate();
    const dd = minTwoDigits(d);

    const m = date.getMonth() + 1;
    const mm = minTwoDigits(m);

    const yyyy = date.getFullYear();

    return `${yyyy}-${mm}-${dd}`;
}

const minTwoDigits = (n: number) => {
    return ('0' + n).slice(-2);
}