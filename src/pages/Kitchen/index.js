import { Container, Stack, Box, Divider } from "@mui/material";
import CardKitchen from "../../components/CardKitchen";
import CardKitchenDone from "../../components/CardKitchenDone";
import NavBar from "../../components/Navbar";

const Kitchen = () => {
    return (
        <>
            <NavBar />
            <Container maxWidth="md">
                <Stack
                    direction={{ xs: "column",sm:"row"}}
                    divider={<Divider sx={{border:{xs:"solid 0.6px"}}} orientation={{sm:"vertical"}}  flexItem    />}
                    spacing={2}
                    sx={{marginTop: "1rem"}}
                >
                    <Box sx={{ width:{xs: "100%", sm:"50%"}}}>
                        <h1>Preparando:</h1>
                        <CardKitchen></CardKitchen>
                        <CardKitchen></CardKitchen>
                        <CardKitchen></CardKitchen>
                    </Box>
                    <Box sx={{ width:{xs:"100%", sm:"50%"}, paddingLeft:{xs:"0", sm:"5rem"}}}>
                        <h1>Pronto:</h1>
                        <CardKitchenDone></CardKitchenDone>
                    </Box>
                </Stack>
            </Container>
        </>
    )
}

export default Kitchen;