import axios from "axios";

const settings = {
    withCredentials: true,
    headers: {
        'API_KEY': 'AIzaSyC9bVF9aQg7SQNNM2rBOdQ3BePJJ9MfIhg'
    }
}
export const instance = axios.create({
    baseURL: 'https://www.googleapis.com/books/v1/',
    ...settings
})
