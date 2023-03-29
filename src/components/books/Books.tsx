import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea} from '@mui/material';
import Paper from '@mui/material/Paper';
import {booksStore, BooksStore} from "../../store/booksStore";
import {observer} from "mobx-react";


const books = [
    {
        id: 1,
        cover: '../../assets/cover.png',
        title: 'Harry Potter',
        category: 'fantasy',
        authors: ['Joanne Rowling']
    },
    {
        id: 2,
        cover: '../../assets/cover.png',
        title: 'Harry Potter',
        category: 'fantasy',
        authors: ['Joanne Rowling']
    },
    {
        id: 3,
        cover: '../../assets/cover.png',
        title: 'Harry Potter',
        category: 'fantasy',
        authors: ['Joanne Rowling']
    },
    {
        id: 4,
        cover: '../../assets/cover.png',
        title: 'Harry Potter',
        category: 'fantasy',
        authors: ['Joanne Rowling']
    },
    {
        id: 5,
        cover: '../../assets/cover.png',
        title: 'Harry Potter',
        category: 'fantasy',
        authors: ['Joanne Rowling']
    },
    {
        id: 6,
        cover: '../../assets/cover.png',
        title: 'Harry Potter',
        category: 'fantasy',
        authors: ['Joanne Rowling']
    },
]

export const Books: React.FC = observer(() => {

    console.log('first render', booksStore.books)

    const mappedCards = booksStore.books?.map(book => (
        <Grid item xs={4}>
            <Grid container justifyContent="center">
                <Paper elevation={3}>
                    <Card sx={{
                        width: 345, ':hover': {
                            transition: "all 0.2s ease",
                            boxShadow: 'rgba(224,79,95, 0.8) 6px 2px 16px 0px, rgba(224,79,95, 0.8) -6px -2px 16px 0px',
                            transform: "scale3d(1.06, 1.06, 1)",
                        },
                    }} key={book.id}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="250"
                                image={book.coverLink}
                                alt="cover"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {book.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    category: {book.categories}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    authors: {book.authors}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Paper>
            </Grid>
        </Grid>
    ))


    return (
        <>
            <Typography gutterBottom variant="h3" component="div"
                        sx={{textAlign: 'center'}}>
                What we have found:
            </Typography>
            <Grid container spacing={6}>
                {mappedCards}
            </Grid>
        </>
    );
});


