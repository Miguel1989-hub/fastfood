import { Container, Stack, Box, Divider, Typography, TextField, Radio, Button } from "@mui/material";
import ModalConfirm from "../../components/ModalConfirm";
import NavBar from "../../components/Navbar";

const Payment = () => {
    return (
        <>
            <NavBar />
            <Container maxWidth="md">
                <Stack
                    direction={{sx: "column", sm:"row"}}
                    sx={{ marginTop: "3rem", paddingRight: "2rem" }}
                >
                    <Box sx={{ width:{xs: "100%", sm:"50%" }}}>
                        <Typography
                            variant="h5"
                            sx={{ fontWeight: "bold", letterSpacing: "1px" }}
                        >
                            Pagamento:
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{ fontWeight: "bold", letterSpacing: "1px", marginTop: "2rem" }}
                        >
                            Resumo da compra
                        </Typography>
                        <Box sx={{ border: "solid 0.5px", borderColor: "#d3d3d3", borderRadius: "4px", marginTop: "1rem" }}>
                            <Stack
                                direction="column"
                                divider={<Divider variant="inset" sx={{ width: "70%", border: "dashed 0.5px", borderColor: "#d3d3d3" }} />}
                            >
                                <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ width: "70%", padding: "1rem", margin: "2px auto" }}>
                                    <Typography variant="body1" >1x smash da casa</Typography>
                                    <Typography variant="body1" >R$ 30,50</Typography>
                                </Stack>
                                <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ width: "70%", padding: "1rem", margin: "2px auto" }}>
                                    <Typography variant="body1" >Total do pedido:</Typography>
                                    <Typography variant="h5" sx={{ fontWeight: "bold" }} >R$ 30,50</Typography>
                                </Stack>
                            </Stack>
                        </Box>
                        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ marginTop: "1rem", width: "100%" }}>
                            <Stack direction="column" sx={{ width: "70%" }}>
                                <Typography variant="body2" sx={{ fontWeight: "bold" }} >Nome do cliente</Typography>
                                <TextField hiddenLabel variant="filled" size="small" />
                            </Stack>
                            <Stack direction="column" justifyContent="space-between" sx={{ width: "15%" }}>
                                <Typography variant="body2" sx={{ fontWeight: "bold" }} >Código:</Typography>
                                <TextField hiddenLabel variant="filled" size="small" />
                            </Stack>
                        </Stack>
                    </Box>
                    <Box sx={{ paddingLeft:{xs:"0", sm:"5rem" }, width:{xs: "100%", sm:"50%" }}}>
                        <Typography
                            variant="body2"
                            sx={{ fontWeight: "bold", letterSpacing: "1px", marginTop: "4rem" }}
                        >
                            Selecione a forma de pagamento:
                        </Typography>
                        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ border: "solid 0.5px", borderRadius: "4px", borderColor: "#d3d3d3", padding: "0.8rem", width: "100%", marginTop: "10px" }}>
                            <Typography variant="body1" sx={{ fontWeight: "bold" }}>Débito</Typography>
                            <Radio size="small" />
                        </Stack>
                        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ border: "solid 0.5px", borderRadius: "4px", borderColor: "#d3d3d3", padding: "0.8rem", width: "100%", marginTop: "10px" }}>
                            <Typography variant="body1" sx={{ fontWeight: "bold" }}>Crédito</Typography>
                            <Radio size="small" />
                        </Stack>
                        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ border: "solid 0.5px", borderRadius: "4px", borderColor: "#d3d3d3", padding: "0.8rem", width: "100%", marginTop: "10px" }}>
                            <Typography variant="body1" sx={{ fontWeight: "bold" }}>Dinheiro</Typography>
                            <Radio size="small" />
                        </Stack>
                        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ marginTop: "1rem", width: "100%" }}>
                            <Stack direction="column" sx={{ width: "45%" }}>
                                <Typography variant="body2" sx={{ fontWeight: "bold" }} >Valor entregue:</Typography>
                                <TextField hiddenLabel variant="filled" size="small" />
                            </Stack>
                            <Stack direction="column" justifyContent="space-between" sx={{ width: "45%" }}>
                                <Typography variant="body2" sx={{ fontWeight: "bold" }} >Troco:</Typography>
                                <TextField hiddenLabel variant="filled" size="small" />
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
                <Stack sx={{ margin: "3rem 0" }} justifyContent={{xs:"center", sm:"flex-end"}} alignItems={{xs: "center"}} direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 2 }}>
                    <Button variant="outlined" sx={{ width: "230px", borderRadius: "16px" }}>Cancelar</Button>
                    <ModalConfirm />
                </Stack>
            </Container >
        </>
    )
}

export default Payment;