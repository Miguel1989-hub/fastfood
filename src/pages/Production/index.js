import { Container, Stack, Box, Divider, Typography } from "@mui/material";
import NavBar from "../../components/Navbar";

const Production = () => {
    return (
        <>
        <NavBar />
        <Container maxWidth="md">
            <Stack
                direction={{ xs: "column",sm:"row"}}
                divider={<Divider sx={{border:{xs:"solid 0.6px"}}} inset orientation={{sm:"vertical"}}  flexItem    />}
                spacing={2}
                sx={{marginTop: "1rem"}}
            >
                <Box sx={{ width:{xs: "100%", sm:"50%"}}}>
                    <Typography
                        variant="h3"
                        sx={{fontWeight: "bold"}}
                    >
                        Preparando:
                    </Typography>
                    <Typography variant="h4" sx={{marginTop:"1rem", fontWeight: "bold", color: "#a9a9a9"}}>Ricardo</Typography>
                    <Typography variant="h4" sx={{marginTop:"1rem", fontWeight: "bold", color: "#a9a9a9"}}>Fernando</Typography>
                    <Typography variant="h4" sx={{marginTop:"1rem", fontWeight: "bold", color: "#a9a9a9"}}>Luiza</Typography>
                    <Typography variant="h4" sx={{marginTop:"1rem", fontWeight: "bold", color: "#a9a9a9"}}>Bruna</Typography>
                </Box>
                <Box sx={{ width:{xs:"100%", sm:"50%"}, paddingLeft:{xs:"0", sm:"5rem"}}}>
                <Typography
                        variant="h3"
                        sx={{fontWeight: "bold"}}
                    >
                        Pronto:
                    </Typography>
                    <Typography variant="h4" sx={{marginTop:"1rem", fontWeight: "bold", color: "#2e7d32"}}>Camila</Typography>
                </Box>
            </Stack>
        </Container>
    </>
    )
}

export default Production;