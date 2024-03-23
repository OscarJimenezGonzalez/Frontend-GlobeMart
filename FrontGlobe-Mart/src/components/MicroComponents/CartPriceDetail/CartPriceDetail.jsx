import { Box, Typography } from "@mui/material";

export default function CartPriceDetail({ label, value, valueColor, labelColor, valueWeigth }) {

    return (

        <Box height={12} display={"flex"} flexDirection={"column"} mt={2}>
            <Box minHeight={20} display={"flex"} flexDirection={"row"} justifyContent={"end"}>
                <Box minWidth={150} display={"flex"} flexDirection={"row"} justifyContent={"end"} mr={1}>
                    <Box width={90} display={"flex"} flexDirection={"row"} justifyContent={"end"} alignItems={"center"} >
                        <Typography color={labelColor}>{label}:</Typography>
                    </Box>
                    <Box minWidth={85} display={"flex"} flexDirection={"row"} justifyContent={"end"} alignItems={"center"} pr={1}>
                        <Typography color={valueColor} fontWeight={valueWeigth}>{value} €</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}