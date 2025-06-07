export const API_KEY = "AIzaSyA1BWx-JMHa7e7ZYV6BHNP25HeGlJ7WkyE";

export const value = (value) => {
    if (value >= 1000000) {
        return Math.floor(value / 1000000) + "M";
    }
    else if (value >= 1000) {
        return Math.floor(value / 1000) + "K";
    }
    else{
        return value;
    }
}
