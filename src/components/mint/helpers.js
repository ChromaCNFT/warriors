export const dateEnd = new Date(2021, 11, 18, 1, 55, 30); // дата окончания

export const convertToTwoDigit = (num) => num > 9 ? String(num) : `0${num}`;

export const getDays = (ms) => {
    const days = Math.trunc(ms / (60000 * 60 * 24));
    return days
};

export const getHours = (ms) => {
    const min = ms / 60000;
    const days = Math.trunc(min / (60 * 24));
    const hours = Math.trunc(((min - days * 24 * 60)) / 60);
    return hours;
};

export const getMins = (ms) => {
    const min = ms / 60000;
    const days = Math.trunc(min / (60 * 24));
    const hours = Math.trunc(((min - days * 24 * 60)) / 60);
    const minutes = Math.trunc(min - days * 24 * 60 - hours * 60)
    return minutes;
};

export const getSecs = (ms) => {
    const secs = ms / 1000;
    const days = Math.trunc(secs / (60 * 60 * 24));
    const hours = Math.trunc(((secs - days * 24 * 60 * 60)) / (60 * 60));
    const minutes = Math.trunc((secs - days * 24 * 60 * 60 - hours * 60 * 60) / 60);
    const seconds = Math.trunc(secs - days * 24 * 60 * 60 - hours * 60 * 60 - 60 * minutes);
    return seconds;
}
