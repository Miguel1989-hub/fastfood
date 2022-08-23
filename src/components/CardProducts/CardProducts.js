import { Paper, Box, styled, Typography } from "@mui/material";
import { images } from "../../assets/index"

const ImgCard = styled('img')(({ theme }) => ({
    marginTop: "0.8rem"
}));

const BoxCard = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
}));

const CardProducts = () => {
    return (
        <Paper elevation={3} sx={{ height: "200px", width: "180px", borderRadius: "8px", marginTop: "3rem" }}>
            <BoxCard>
                <ImgCard src={images.burger} />
                <Box>
                    <Typography sx={{textAlign: "center", fontWeight: "bold",  marginTop: "0.3rem"}}>Smash da casa</Typography>
                    <Typography variant="body2">2x hamburguer 200g</Typography>
                    <Typography  variant="body2" sx={{textAlign: "center", fontWeight: "bold",  marginTop: "1rem"}}>R$ 30,50</Typography>
                </Box>
            </BoxCard>
        </Paper>
    )
}


export default CardProducts;