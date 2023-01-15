import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import {ImMagicWand} from "react-icons/im";
import {useRouter} from "next/router";



const SearchBar = () => {
    const router = useRouter();
    const handleSearch = (e: any) => {
        e.preventDefault();
        router.push({
            pathname: '/characters',
            query: { name: e.target.value }
        })
    };


    return (
        <Paper
            elevation={0}
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 ,borderRadius: 5,  border: 1, borderColor: '#cbd5e1'}}
        >
            <IconButton sx={{ p: '10px' }} aria-label="menu">
                <ImMagicWand />
            </IconButton>
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Alohomora"
                inputProps={{ 'aria-label': 'search google maps' }}
                // onChange={(e) => handleSearch(e)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch(e)}
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
        </Paper>
    );
}
export  default  SearchBar;