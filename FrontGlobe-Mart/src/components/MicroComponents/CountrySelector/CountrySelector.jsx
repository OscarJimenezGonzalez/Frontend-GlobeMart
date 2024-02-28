import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { countries } from '../../../auxStr/countries';

export default function CountrySelector({ selectedCountry }) {
    const [country, setCountry] = React.useState('');

    const handleChange = (event) => {
        setCountry(event.target.value);
        selectedCountry(event.target.value);
    };

    const renderCountries = () => {

        return (

            <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={country}
                onChange={handleChange}
                onSelect={selectedCountry}
                MenuProps={{
                    anchorOrigin: {
                        vertical: 'bottom',
                        horizontal: 'left',
                    },
                    transformOrigin: {
                        vertical: 'top',
                        horizontal: 'left',
                    },
                    PaperProps: {
                        style: {
                            maxHeight: 150,
                        },
                    },
                }}
            >
                <MenuItem value="">
                    <em>Select Country ...</em>
                </MenuItem>

                {countries.map((country, index) => {

                    return <MenuItem key={index} value={country.name}>{country.name}
                    </MenuItem>

                })}

            </Select >

        )

    }

    return (
        <div>
            <FormControl variant="standard" sx={{ my: 2, minWidth: "100%" }}>
                <InputLabel id="countrySelectLabel">Country *</InputLabel>

                {renderCountries()}

            </FormControl>
        </div>
    );
}
