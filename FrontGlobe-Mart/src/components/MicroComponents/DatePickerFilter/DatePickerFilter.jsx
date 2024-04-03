import React, { useState } from 'react';
import dayjs from 'dayjs';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TextField, Grid } from '@mui/material';

export default function DatePickerFilter() {
    const [value, setValue] = useState(dayjs('2022-04-17'));

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Grid container spacing={2} alignItems="center">
                <Grid item>
                    <DatePicker
                        label="Controlled picker"
                        value={value}
                        onChange={(newValue) => setValue(newValue)}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                variant="outlined"

                            />
                        )}
                    />
                </Grid>
            </Grid>
        </LocalizationProvider>
    );
}