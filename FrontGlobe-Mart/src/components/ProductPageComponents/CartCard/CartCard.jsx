import * as React from 'react';
import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Box, Typography } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom';
import QuantitySelector from '../../MicroComponents/QuantitySelector/QuantitySelector';
import Divider from '@mui/material/Divider';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { mainContext } from '../../../contexts/mainContext';
import Modal from '@mui/material/Modal';
import LoginModal from '../../MicroComponents/LoginModal/LoginModal';
import SuccessAddingProductModal from '../../MicroComponents/SuccessAddingProductModal/SuccessAddingProductModal';

export default function CartCard({ quantityAv, seller, addProductClick, onQuantityChange, sellerCompanyId }) {

    const [isFavorite, setIsFavorite] = useState(false);
    const [quantity, setQuantity] = useState(0);
    const [isAdded, setIsAdded] = useState(false);
    const { mainData, setMainData } = useContext(mainContext);

    const [openSuccess, setOpenSuccess] = useState(false);
    const handleOpenSuccess = () => setOpenSuccess(true);

    const [openLogin, setOpenLogin] = useState(false)
    const handleOpenLogin = () => setOpenLogin(true)

    // funcion que envía el cambio en la cantidad al componente padre (ProductPage)
    useEffect(() => {

        onQuantityChange(quantity)

    }, [quantity, quantityAv, onQuantityChange])
    // funcion que envía el cambio en la cantidad al componente padre (ProductPage)

    // función que recibe la cantidad del componente hijo (QuantitySelector)
    const handleQuantityChange = (newQuantity) => {
        setQuantity(newQuantity);
        console.log("newQuantity", newQuantity)
    };
    // función que recibe la cantidad del componente hijo (QuantitySelector)

    const handleAddProductClick = () => {

        if (localStorage.getItem("token")) {

            handleOpenSuccess()
            setIsAdded(true)
            setMainData(prevData => ({
                ...prevData,
                productQtyOnCart: prevData.productQtyOnCart + 1
            }))
            setTimeout(() => {

                setIsAdded(false)

            }, 3000)

        } else {
            handleOpenLogin()
        }

    }

    return (

        <Card sx={{
            minWidth: "100%",
            height: "85%",
            display: "flex",
            flexDirection: "column",
            alignContent: 'center',
            justifyContent: "space-between",
            alignItems: "center",
            pb: 2.5,
            pt: 2.5
        }}>

            <Box sx={{
                display: "flex",
                flexDirection: "column",
                alignContent: 'center',
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
                height: "50%",
                width: "80%"
            }}
            >
                {/* No uso el c.ternario para evitar la renderización de la consecuencia de la condicional aparece durante unos pocos segundos*/}

                <QuantitySelector
                    quantityAv={(quantityAv)}
                    onQuantityChange={handleQuantityChange}
                />
                {(quantityAv <= 3 && quantityAv > 0) && <Typography variant="caption" sx={{ color: "red", }}>Only {quantityAv} available</Typography>}
                <Typography sx={{ mx: 3, fontSize: "0.9rem", color: "primary.main", }}>
                    Sold by:&nbsp;
                    <Link to={`/SellerPage/${sellerCompanyId}`}>{seller}
                    </Link>
                </Typography>

            </Box>

            <Box sx={{
                display: "flex",
                flexDirection: "column",
                alignContent: 'center',
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
                height: "50%",
                width: "100%",
            }}
            >
                <Box onClick={handleAddProductClick} sx={{ width: "80%", height: "30%", }}>
                    <Button
                        onClick={addProductClick}
                        disabled={quantityAv <= 0}
                        variant="containedSecondary"
                        color="secondary"
                        sx={{
                            width: "100%",
                            height: "100%",
                        }}
                    >
                        {!isAdded && (
                            <Typography variant="button" color="white" sx={{ textTransform: 'none' }}>
                                {quantityAv > 0 ? "ADD TO CART" : "Out of stock"}
                            </Typography>
                        )}
                        {isAdded && <CheckCircleOutlineIcon sx={{ color: 'white', fontSize: "1.5rem" }} />}
                    </Button>
                </Box>
                <Divider sx={{ alignSelf: 'center', height: '1px', width: "75%" }} />
                <Button variant="outlined" sx={{ width: "80%", height: "30%", textTransform: 'none' }}>
                    A<span style={{ textTransform: 'lowercase' }}  >
                        dd to wish list</span></Button>
            </Box>

            <SuccessAddingProductModal
                openSuccess={openSuccess}
                closeSuccessModal={() => { setOpenSuccess(false) }}
            />

            <LoginModal
                openLogin={openLogin}
                closeLoginModal={() => { setOpenLogin(false) }}
            />

        </Card >

    );

}





