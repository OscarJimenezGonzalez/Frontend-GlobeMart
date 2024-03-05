import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Typography } from '@mui/material';

export default function TabSelectorX({ itemList, product }) {
    const [value, setValue] = React.useState("1");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const renderTabList = (itemList) => {

        return (

            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>

                    <TabList onChange={handleChange} aria-label="lab API tabs example">

                        {
                            itemList.map((item, index) => (

                                <Tab label={item.label} value={item.value} key={index} />

                            ))}

                    </TabList>

                </Box>
                {/* {/* {console.log("proddsfdsfdsfuct", product)} */}
                <TabPanel value="1"><Typography variant="h7" color={"#666666"}>{product && product.productDescription}</Typography></TabPanel>
                <TabPanel value="2"><Typography variant="h7" color={"#666666"}>{product && product.sellerCompany.policy}</Typography></TabPanel>

            </TabContext>

        )

    }


    return (

        <Box sx={{ width: '100%', typography: 'body1' }}>

            {renderTabList(itemList)}

        </Box>



    )
}
