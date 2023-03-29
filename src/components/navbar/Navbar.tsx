import React, {ChangeEvent, useEffect, useState} from 'react';
import styles from './Navbar.module.css';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import {Search, SearchIconWrapper, StyledInputBase} from './styled';
import Box from '@mui/material/Box/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {FormHelperText} from "@mui/material";
import {api} from "../../api/api";
import {observer} from "mobx-react";
import {booksStore} from "../../store/booksStore";


export const Navbar: React.FC = observer(() => {

    const [searchValue, setSearchValue] = useState('');




    const onTextChange = (e: ChangeEvent) => {
        setSearchValue((e.target as HTMLInputElement).value)
    }

    useEffect(() => {
        searchValue && api.getBooks(searchValue)
            .then((res) => {
                booksStore.setBooks(res.data.items.map((item: any) => ({
                    id: item.id,
                    coverLink: item.volumeInfo.imageLinks.thumbnail,
                    title: item.volumeInfo.title,
                    categories: item.volumeInfo.categories,
                    authors: item.volumeInfo.authors
                })))
            })
    }, [searchValue]);

    const options = [
        { value: "option1", label: "Option 1" },
        { value: "option2", label: "Option 2" },
        { value: "option3", label: "Option 3" }
    ];

    return (
        <div className={styles.navbarBlock}>
            <Typography sx={{color: 'white', textAlign: 'center'}} variant={'h1'}>
                Find your book
            </Typography>
            <Search>
                <SearchIconWrapper>
                    <SearchIcon/>
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Enter the title"
                    value={searchValue} onChange={(e) => onTextChange(e)}
                />
            </Search>
            <Box sx={{ minWidth: '25%', display: 'flex', gap: '15px' }}>
                <FormControl fullWidth>
                    <FormHelperText sx={{color: 'white'}}>Categories</FormHelperText>
                    <Select
                        defaultValue="option1"
                        sx={{ color: "white", backgroundColor: 'rgba(224,79,95, 0.2)',  "& .MuiSvgIcon-root": {
                                color: "white"
                            }}}
                    >
                        {options.map((option) => (
                            <MenuItem
                                key={option.value}
                                value={option.value}
                            >
                                {option.label}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl fullWidth>
                    <FormHelperText sx={{color: 'white'}}>Sort by</FormHelperText>
                    <Select
                        defaultValue="option1"
                        sx={{ color: "white", backgroundColor: 'rgba(255, 0, 0, 0.2)',  "& .MuiSvgIcon-root": {
                                color: "white"
                            }}}
                    >
                        {options.map((option) => (
                            <MenuItem
                                key={option.value}
                                value={option.value}
                            >
                                {option.label}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>
        </div>
    );
})


