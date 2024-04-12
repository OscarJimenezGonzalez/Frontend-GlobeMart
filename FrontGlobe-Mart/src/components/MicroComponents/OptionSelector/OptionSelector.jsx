import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function OptionSelector({ selectedOption, optionList, titleLabel }) {
    const [option, setOption] = React.useState('');

    const handleChange = (event) => {
        setOption(event.target.value);
        selectedOption(event.target.value);
    };

    const renderOptions = () => {

        return (

            <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={option}
                onChange={handleChange}
                onSelect={selectedOption}
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
                    <em>Select Option ...</em>
                </MenuItem>

                {optionList.map((option, index) => {

                    return <MenuItem key={index} value={option.name}>
                        {option.name}
                    </MenuItem>

                })}

            </Select >

        )

    }

    return (
        <div>
            <FormControl variant="standard" sx={{ minWidth: "100%" }}>
                <InputLabel id="countrySelectLabel">{titleLabel}</InputLabel>

                {renderOptions()}

            </FormControl>
        </div>
    );
}
