import { Typography, TextField, Container, Stack, Box } from "@mui/material";
import CardCategories from "../../components/CardCategories";
import NavBar from "../../components/Navbar";
import { images } from "../../assets";
import CardProducts from "../../components/CardProducts/CardProducts";



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
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 2 }} sx={{ alignItems: { xs: "center" }, justifyContent: "space-between", marginTop: "1rem" }}>
                    <CardCategories name="Combos" images={images.combo} />
                    <CardCategories name="Acompanhamentos" images={images.fries} />
                    <CardCategories name="Bebidas" images={images.coca} />
                    <CardCategories name="Sobremesas" images={images.iceCream} />
                </Stack>
                <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", marginTop: "3rem" }}
                >
                    Produtos
                </Typography>
                <Typography
                    variant="body2"
                    sx={{ marginTop: "0.3rem" }}
                >
                    Selecione um produto para adicionar ao seu pedido
                </Typography>
                <Box sx={{ display: "flex", justifyContent:{xs: "center", sm: "space-between"}, flexWrap: "wrap" }}>
                    <CardProducts />
                    <CardProducts />
                    <CardProducts />
                    <CardProducts />
                    <CardProducts />
                    <CardProducts />
                    <CardProducts />
                    <CardProducts />
                    <CardProducts />
                    <CardProducts />
                    <CardProducts />
                    <CardProducts />
                </Box>

            </Container>
        </>
    )
}

export default Orders;