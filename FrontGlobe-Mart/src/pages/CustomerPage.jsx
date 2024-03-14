import React from 'react'
import { Box, Divider, Typography } from '@mui/material'
import CustomerOrderCard from '../components/OtherComponents/CustomerOrderCard/CustomerOrderCard'
import { useState, useEffect } from 'react';
import { getOwnOrders } from '../services/orderService';
import { getCartItemsFromOrder } from '../services/cartItemService';
import TabSelectorCustomer from '../components/MicroComponents/TabSelectorCutomerOrders/TabSelectorCustomer';

function CustomerPage() {

  const [orderList, setOrderList] = useState([]);
  const [cartItemList, setCartItemList] = useState([])
  const [infoFetched, setInfoFetched] = useState(false)

  useEffect(() => {

    const fetchData = async () => {

      try {

        const orderData = await getOwnOrders()

        if (!orderData || orderData.length === 0) {
          
          return console.log("No orders found")

        } else {
          
          setOrderList(orderData)
          setInfoFetched(true)
        
        }

      } catch (error) {
        console.log("No orders found", error)
      }

    }

    fetchData()

  }, [])

  useEffect(() => {

    const fetchData = async () => {

      if (orderList && orderList.length > 0) {
        // Usamos Promise.all para manejar múltiples llamadas asíncronas en paralelo
        const cartItemsPromises = orderList.map(order =>
          getCartItemsFromOrder(order.id)
        );

        try {
          const cartItemsArr = await Promise.all(cartItemsPromises);

          // Ahora que tenemos todos los cartItems, actualizamos cada objeto de orderList
          const updatedOrderList = orderList.map((order, index) => ({
            ...order,
            cartItems: cartItemsArr[index],
          }));

          // Y ahora actualizamos el estado una sola vez con el nuevo array
          setOrderList(updatedOrderList);

        } catch (error) {

          console.error("Error fetching cart items: ", error);

        }

      }

    };

    fetchData()

  }, [infoFetched])


  useEffect(() => {

    console.log(orderList)
    // console.log(cartItemList)

  }, [orderList])

  return (

    <Box sx={{ width: '100%', display: "flex", flexDirection: "column", p: 2 }}>

      <Typography variant="h6" color="primary" ml={1} sx={{ mb: 8 }}  > Customers Page </Typography>

      <Typography variant="tab" color={"orange"} ml={3} > My Orders </Typography>

      <Divider sx={{ mb: '2%', mt: '1%', mx: 3 }} />

      <TabSelectorCustomer

        orderList={(orderList)}

      />

      <Typography variant="tab" color={"orange"} ml={3} mt={8}> My Favourites </Typography>

      <Divider sx={{ mb: '2%', mt: '1%', ml: 3 }} />

    </Box>

  )
}

export default CustomerPage