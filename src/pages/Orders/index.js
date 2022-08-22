import { Typography, TextField, Container, Stack } from "@mui/material";
import CardCategories from "../../components/CardCategories";
import NavBar from "../../components/Navbar";
import { images } from "../../assets";



const Orders = () => {
    return (
        <>
            <NavBar />
            <Container maxWidth="md">
                <Typography
                    variant="h5"
                    sx={{ fontWeight: "bold", marginTop: "3rem" }}
                >
                    Seja Bem Vindo!
                </Typography>
                <TextField
                    hiddenLabel
                    id="filled-hidden-label-small"
                    placeholder="O que você procura?"
                    variant="filled"
                    size="small"
                    sx={{ marginTop: "1rem" }}
                />
                <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", marginTop: "3rem" }}
                >
                    Categorias
                </Typography>
                <Typography
                    variant="body2"
                    sx={{ marginTop: "0.3rem" }}
                >
                    Navegue por categoria
                </Typography>
                <Stack direction="row" sx={{justifyContent: "space-between", marginTop: "1rem"}}>
                    <CardCategories name="Combos" width="100px" height="100px" images={images.combo} />
                    <CardCategories name="Acompanhamentos"  width="100px" height="100px" images={images.fries} />
                    <CardCategories name="Bebidas" width="100px" height="100px" images={images.coca} />
                    <CardCategories name="Sobremesas"  width="100px" height="100px" images={images.iceCream} />
                </Stack>
            </Container>

        </>
    )
}

export default Orders;