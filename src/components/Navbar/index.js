import { AppBar, Box, Typography, Container, styled, Toolbar } from "@mui/material";
import { NavLink } from "react-router-dom";
import "./index.css";


const StyledToolBar = styled(Toolbar)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        padding:"1rem",
    },
}));



const NavBar = () => {
    return (
        <AppBar position="static">
            <Container>
                <StyledToolBar >
                    <Typography
                        variant="h4"
                        component="h1"
                        sx={{ fontWeight: "bold", padding: {xs: "1.5rem", sm: "0"} }}
                    >
                        FastFood
                    </Typography>
                    <Box>
                        <NavLink className={({ isActive }) => (isActive ? "link-active" : "link")} to="/">Pedidos</NavLink>
                        <NavLink className={({ isActive }) => (isActive ? "link-active" : "link")} to="/cozinha">Cozinha</NavLink>
                        <NavLink className={({ isActive }) => (isActive ? "link-active" : "link")} to="/saida" >Retirada</NavLink>
                    </Box>
                </StyledToolBar>
            </Container>
        </AppBar>
    )
};

export default NavBar;