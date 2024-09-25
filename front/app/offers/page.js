"use client";
import { Box, Grid2 } from "@mui/material";
import OfferTemplate from "./offerTemplate";
import finnishCountyList from "./finnishCountyList";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
export default function Offers(){
    const offers=[];
    const dropDownItems = [];

    for (let i = 0; i < 15; i++) {
            offers.push(<OfferTemplate/>)
        } 
    for(let j=0;j<finnishCountyList.length;j++){
        dropDownItems.push(finnishCountyList[j])
    }
    
    return(
        <Grid2 container spacing={2}>
            <Grid2 sx={{mt: 12}} size={4}>{offers}</Grid2>
            <Grid2 sx={{mt: 12}} size={4}>
            <Autocomplete
            id="county-select"
            sx={{ width: 300 }}
            options={finnishCountyList}
            autoHighlight
            getOptionLabel={(option) => option}
            renderOption={(props, option) => {
                const { key, ...optionProps } = props;
                return (
                <Box
                    key={key}
                    component="li"
                    sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
                    {...optionProps}
                >
                    
                    {option}
                </Box>
                );
            }}
            renderInput={(params) => (
                <TextField
                {...params}
                label="Choose a county"
                slotProps={{
                    htmlInput: {
                    ...params.inputProps,
                    autoComplete: 'new-password', // disable autocomplete and autofill
                    },
                }}
                />
            )}
            
    /></Grid2></Grid2>
        
        )
};