import React, { useState, useEffect } from 'react';
import { CircularProgress, TextField } from '@material-ui/core';

export default function LoadingTextField() {

    const [loading, setLoading] = useState(true);
    // const [data, setData] = useState('');

    useEffect(() => {
        // Simular carga de datos desde la base de datos
        setTimeout(() => {
            // setData('Datos cargados desde la base de datos');F
            setLoading(false);
        }, 2000); // Simulación de tiempo de carga de 2 segundos
    }, []);

    return (
        <div>
            {loading ? (
                <CircularProgress />
            ) : (
                <TextField
                    label="Datos de la base de datos"
                    variant="outlined"
                    value={data}
                    fullWidth
                    InputProps={{
                        readOnly: true,
                    }}
                />
            )}
        </div>
    );
}

