import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import { mainTheme } from '../../../themes/mainTheme';
import { ThemeProvider as JoyThemeProvider } from '@mui/joy/styles';

export default function SelectMethodRadio({ titleLabel, options, sheetSize, selectedMethod }) {
    return (
        <JoyThemeProvider theme={mainTheme}>
            <FormControl>
                <FormLabel>{titleLabel}</FormLabel>
                <RadioGroup
                    overlay
                    name="member"
                    defaultValue="person1"
                    orientation="horizontal"
                    sx={{
                        gap: 2,
                    }}

                >
                    {options.map((option) => (
                        <Sheet
                            component="label"
                            key={option}
                            variant="outlined"
                            sx={{
                                p: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                boxShadow: 'sm',
                                borderRadius: 'md',
                                minWidth: sheetSize,
                            }}
                        >
                            <Radio
                                value={`person${option}`}
                                variant="soft"
                                sx={{
                                    mb: 2,
                                }}
                                onChange={() => selectedMethod(option)}
                            />
                            <Avatar alt={`${option}`} src={`/static/images/avatar/${option}.jpg`} />
                            <Typography level="body-sm" sx={{ mt: 1 }}>
                                {option}
                            </Typography>
                        </Sheet>
                    ))}
                </RadioGroup>
            </FormControl>
        </JoyThemeProvider>
    );
}
