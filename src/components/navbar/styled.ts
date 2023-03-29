import {alpha, InputBase} from "@mui/material";
import {styled} from '@mui/material/styles';

export const Search = styled('div')(({theme}) => ({
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.3),
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
        width: '30%',
    },
}));

export const SearchIconWrapper = styled('div')(({theme}) => ({
    padding: theme.spacing(0, 2),
    display: 'flex',
    alignItems: 'center',
    color: 'white',
    opacity: '0.6',
    ' &:hover': {
        cursor: 'pointer',
        opacity: '1',
    },
}));


export const StyledInputBase = styled(InputBase)(({theme}) => ({
    color: 'white',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

