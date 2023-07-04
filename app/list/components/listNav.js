'use client'
import styles from '../styles/listNav.module.scss'
// MUI
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';

export default function ListNav() {
    return (
        <section className={ styles.list_nav }>
            <Typography variant="h1" mt={10} mb={2} fontSize="2rem" fontWeight="500">골라봐, 오늘 할 게임</Typography>
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">정렬</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="sortOption"
                        defaultValue="좋아요순"
                    >
                        <MenuItem value={"좋아요순"}>좋아요순</MenuItem>
                        <MenuItem value={"발매순"}>발매순</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </section>
    )
}