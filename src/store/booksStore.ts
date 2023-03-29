import {makeAutoObservable} from "mobx";

// let initArray: Book[] = toJS([])
//
// configure({
//     useProxies: "never"
// })

const mockedBooks = [{
    id: '123',
    coverLink: '123',
    title: '123',
    categories: ['123'],
    authors: ['123'],
}]

export class BooksStore {
    books:  Book[] = []

    constructor() {
        makeAutoObservable(this)
    }

    setBooks(books: Book[]) {
        console.log('InitialState', this.books)
        this.books = mockedBooks;
        console.log('ChangedState', this.books)
    }
}

export type Book = {
    id: string
    coverLink: string
    title: string
    categories: string[]
    authors: string[]
}

export const booksStore = new BooksStore();