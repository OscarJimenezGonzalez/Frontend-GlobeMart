import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import CustomerOrderCard from '../../OtherComponents/CustomerOrderCard/CustomerOrderCard';
import { Divider } from '@mui/material';

export default function TabSelectorCustomer({ orderList }) {

    const [value, setValue] = React.useState("1");
    const orderState = [{ label: "All Orders", value: "1" }, { label: "Payed Orders", value: "2" }, { label: "Shipped Orders", value: "3" }, { label: "Pending Payment", value: "4" }]

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const renderAllOrders = () => {

        if (orderList) {

            return (

                orderList.map((order) => {

                    let formatedDate = order.createdAt.slice(0, 10)

                    return (
                        < CustomerOrderCard

                            cartItemList={order.cartItems}
                            key={order.id}
                            orderId={order.id}
                            orderStatus={order.orderStatus}
                            isPayed={order.isPayed}
                            paymentMethod={order.paymentMethod}
                            totalPrice={order.totalPrice}
                            createdAt={formatedDate}
                            shippingAddress={order.shippingAddress}

                        />
                    )
                })

            )
        }

    }

    const renderPendingOrders = () => {

        if (orderList) {

            return (

                orderList.filter((order) => order.orderStatus !== "Completed").map((order) => {

                    let formatedDate = order.createdAt.slice(0, 10)

                    return (
                        < CustomerOrderCard

                            cartItemList={order.cartItems}
                            key={order.id}
                            orderId={order.id}
                            orderStatus={order.orderStatus}
                            isPayed={order.isPayed}
                            totalPrice={order.totalPrice}
                            createdAt={formatedDate}
                            shippingAddress={order.shippingAddress}
                        />
                    )
                })

            )

        }
    }
    const renderCompletedOrders = () => {

        if (orderList) {

            return (

                orderList.filter((order) => order.orderStatus === "Completed").map((order) => {

                    let formatedDate = order.createdAt.slice(0, 10)

                    return (
                        < CustomerOrderCard

                            cartItemList={order.cartItems}
                            key={order.id}
                            orderId={order.id}
                            orderStatus={order.orderStatus}
                            isPayed={order.isPayed}
                            totalPrice={order.totalPrice}
                            createdAt={formatedDate}
                            shippingAddress={order.shippingAddress}

                        />
                    )
                })

            )

        }
    }

    const renderTabList = () => {

        return (

            <TabContext value={value}>
                <Box sx={{ borderBottom: 0, borderColor: 'divider', mb: 1, ml: 4, mr: 10 }}>

                    <TabList onChange={handleChange} aria-label="lab API tabs example">

                        <Tab label="All Orders" value="1" />
                        <Tab label="Pending" value="2" />
                        <Tab label="Completed" value="3" />

                    </TabList>

                </Box>
                {/* <Divider sx={{ mb: '0%', mt: '-0.5%', mx: 4 }} /> */}
                <TabPanel value="1">{renderAllOrders()}



                </TabPanel>
                <TabPanel value="2">{renderPendingOrders()}</TabPanel>
                <TabPanel value="3">{renderCompletedOrders()}</TabPanel>

            </TabContext>

        )

    }

    return (

        <Box sx={{ width: '100%', typography: 'body1' }}>

            {renderTabList()}

        </Box>



    )
}
