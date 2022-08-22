import { Typography, TextField, Container } from "@mui/material";
import NavBar from "../../components/Navbar";



const Orders = () => {
    return (
        <>
            <NavBar />
            <Container maxWidth="md">
                <Typography
                    variant="h5"
                    sx={{ fontWeight: "bold", marginTop: "3rem"}}
                >
                    Seja Bem Vindo!
                </Typography>
                <TextField
                    hiddenLabel
                    id="filled-hidden-label-small"
                    placeholder="O que você procura?"
                    variant="filled"
                    size="small"
                    sx={{marginTop: "1rem"}}
                />
                   <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", marginTop: "3rem"}}
                >
                    Categorias
                </Typography>
                <Typography
                    variant="body2"
                    sx={{  marginTop: "0.3rem"}}
                >
                    Navegue por categoria
                </Typography>
            </Container>
        </>
    )
}

export default Orders;