import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { Typography } from '@mui/material';
import Select from '@mui/material/Select';
import { useState, useEffect } from 'react';



export default function OptionSelectorBig({ itemList, defaultValue, label, handleOptionSelected }) {

    const [optionSel, setOptionSel] = useState("")

    const handleOptionChange = (event) => {

        setOptionSel(event.target.value)
        handleOptionSelected(event.target.value)
        return event.target.value

    }

    const optionListRender = (list) => {

        return (

            list.map((item) => {

                return (<MenuItem value={item.id} key={item.id} > <Typography variant='subtitle2'>{item.text}</Typography></MenuItem>)

            })

        )

    }

    return (

        <FormControl
            fullWidth

        >

            <InputLabel>{`${label}`}</InputLabel>
            <Select
                sx={{ height: 50, backgroundColor: "white" }}
                labelId={`status-select-label-${""}`}
                id={`status-select-${""}`}
                value={optionSel}
                label={label}
                onChange={(event) => {

                    console.log(event)
                    handleOptionChange(event)
                }}
                MenuProps={{
                    PaperProps: {
                        style: {
                            maxHeight: 215, 
                        },
                    },
                }}

            >

                {optionListRender(itemList)}

            </Select>

        </FormControl>

    )
}
