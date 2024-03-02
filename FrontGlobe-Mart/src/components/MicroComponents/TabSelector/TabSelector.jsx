import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Card from '@mui/material/Card';
import RelatedProductsCarousel from '../../ProductPageComponents/RelatedProductsCaroussel/RelatedProductsCaroussel';

export default function TabSelector({ itemList, sellerCompany }) {
    const [value, setValue] = React.useState(itemList[0].value);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const renderTabList = (itemList) => {

        return (

            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>

                    <TabList onChange={handleChange} aria-label="lab API tabs example">

                        {
                            itemList.map((item, index) => (

                                <Tab label={item.label} value={item.value} key={index} />

                            ))}

                    </TabList>

                </Box>

                {/* {
                    itemList &&

                    itemList.map((item, index) => (

                        <TabPanel value={item.value} key={index}>{sellerCompany.description}</TabPanel>

                    ))
                } */}


                <TabPanel value="1"><RelatedProductsCarousel></RelatedProductsCarousel></TabPanel>
                <TabPanel value="2">Shipping And Return Policy</TabPanel>
                <TabPanel value="3">{sellerCompany.description}</TabPanel>

            </TabContext>

        )

    }


    return (

        <Box sx={{ width: '100%', typography: 'body1' }}>

            {renderTabList(itemList)}

        </Box>



    )
}
