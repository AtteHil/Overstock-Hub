"use client";
import { Box, Grid2 } from "@mui/material";
import OfferTemplate from "./offerTemplate";
import finnishCountyList from "./finnishCountyList";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
export default function Offers() {
    const offers = [];
    const dropDownItems = [];

    for (let i = 0; i < 15; i++) {
        offers.push(<OfferTemplate />)
    }
    for (let j = 0; j < finnishCountyList.length; j++) {
        dropDownItems.push(finnishCountyList[j])
    }

    return (
        <Grid2 container spacing={2}>
            <Grid2 sx={{ mt: 12 }} size={4}>{offers}</Grid2>
            <Grid2 sx={{ mt: 12 }} size={4}>
                <Autocomplete
                    id="county-select"
                    sx={{
                        width: 300,
                        "& .MuiOutlinedInput-root": {
                            backgroundColor: "#f0f0f0", // Background color of input
                            "&:hover": {
                                backgroundColor: "#e0e0e0", // Hover color of input
                            },
                            "&.Mui-focused fieldset": {
                                borderColor: "#1976d2", // Border color when focused
                            },
                        },
                        // Styles for the dropdown menu
                        "& .MuiAutocomplete-paper": {
                            backgroundColor: "#fafafa", // Background color of the dropdown
                            color: "#000", // Text color in the dropdown
                        },
                        // Styles for individual dropdown options
                        "& .MuiAutocomplete-option": {
                            color: "#000", // Text color of dropdown options
                            "&[aria-selected='true']": {
                                backgroundColor: "#cfe8fc", // Background color of selected option
                            },
                            "&:hover": {
                                backgroundColor: "#e3f2fd", // Hover background color for options
                            },
                        },
                        // Styles for the popper (autocomplete container)
                        "& .MuiAutocomplete-popper": {
                            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)", // Custom shadow for dropdown
                        },
                    }}

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