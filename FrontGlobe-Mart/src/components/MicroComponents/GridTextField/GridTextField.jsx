import React from 'react'
import { TextField, Box, Typography } from '@mui/material'
import { useState } from 'react'


function GridTextField({ textfieldType, label, onInputChange, }) {

    const [valueSel, setValueSel] = useState("")

    const handleValueChange = (e) => {

        // console.log(e.target.value)
        setValueSel(e.target.value)
        onInputChange(e.target.value)

    }

    return (
        <>
            <TextField
                onChange={handleValueChange}
                variant={textfieldType}  // Outlined o standard
                required
                fullWidth
                name={label}
                label={label}
                type="string"
                id={label}  // Esto es lo que se ve en gris
                value={valueSel}
                // defaultValue={""}
                autoComplete="off"
                InputProps={{
                    style: {
                        fontSize: '14px',
                        paddingLeft: '1.5px',
                        height: '50px',
                        backgroundColor: 'white', // Establece el fondo en blanco
                    },
                }}
            />
        </>
    )
}

export default GridTextField