import { Container, Stack, Box, Divider } from "@mui/material";
import NavBar from "../../components/Navbar";

const Kitchen = () => {
    return (
        <>
            <NavBar />
            <Container maxWidth="md">
                <Stack
                    direction="row"
                    divider={<Divider orientation="vertical"  flexItem    />}
                    spacing={2}
                    sx={{marginTop: "1rem"}}
                >
                    <Box sx={{ width: "50%" }}>
                        <h1>Preparando:</h1>
                        <h1>item1</h1>
                        <h1>item1</h1>
                        <h1>item1</h1>
                        <h1>item1</h1>
                    </Box>
                    <Box sx={{ width: "50%", paddingLeft: "5rem" }}>
                        <h1>Pronto:</h1>
                        <h1>item1</h1>
                        <h1>item1</h1>
                        <h1>item1</h1>
                        <h1>item1</h1>
                        <h1>item1</h1>
                    </Box>
                </Stack>
            </Container>
        </>
    )
}

export default Kitchen;