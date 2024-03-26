import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

export default function TabSelectorStandard({ itemList }) {
    const [value, setValue] = useState(itemList[0].key.toString());

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        {itemList.map((item, index) => (
                            <Tab label={item.label} value={item.key.toString()} key={index} />
                        ))}
                    </TabList>
                </Box>
                {itemList.map((item) => (
                    <TabPanel value={item.key.toString()} key={item.key}>
                        {item.rendering}
                    </TabPanel>
                ))}
            </TabContext>
        </Box>
    );
}