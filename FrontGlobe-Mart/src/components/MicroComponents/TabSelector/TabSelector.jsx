import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Card from '@mui/material/Card';
import RelatedProductsCarousel from '../../ProductPageComponents/RelatedProductsCaroussel/RelatedProductsCaroussel';
import SellerProductCaroussel from '../../OtherComponents/SellerProductsCaroussel/SellerProductsCaroussel';
import LandingProducts from '../../LandingPageComponents/LandingProducts/LandingProducts';

export default function TabSelector({ itemList, element, sellerProducts }) {
    const [value, setValue] = React.useState(itemList[0].value);

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

                <TabPanel value="1" sx={{p: 12}}>
                    <LandingProducts
                        productList={(sellerProducts)}
                    ></LandingProducts>
                </TabPanel>
                <TabPanel value="2">{element.policy}</TabPanel>
                <TabPanel value="3">{element.description}</TabPanel>

            </TabContext>

        )

    }


    return (

        <Box sx={{ width: '100%', typography: 'body1' }}>

            {renderTabList(itemList)}

        </Box>



    )
}
