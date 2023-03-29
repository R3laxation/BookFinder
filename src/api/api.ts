import axios from "axios"


export const api = {
    getBooks(searchValue: string){
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchValue}&key=AIzaSyC9bVF9aQg7SQNNM2rBOdQ3BePJJ9MfIhg`)
    }
}