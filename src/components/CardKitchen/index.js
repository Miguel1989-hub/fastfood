import { Paper, Typography, Box, IconButton } from "@mui/material";
import { Stack } from "@mui/system";
import { images } from "../../assets"
import CheckIcon from '@mui/icons-material/Check';
import CancelIcon from '@mui/icons-material/Cancel';



const CardKitchen = () => {
    return (
        <Paper sx={{ width: "375px", height: "100px", marginTop: "1rem" }} elevation={3}>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
                <img alt="#" src={images.burger} sx={{ width: "100px", height: "100px" }} />
                <Box>
                    <Typography sx={{ fontWeight: "bold" }} variant="subtitle1">201 - Ricardo</Typography>
                    <Typography variant="caption">1x smash da casa</Typography>
                </Box>
                <Box>
                    <IconButton >
                        <CheckIcon variant="rounded" color="primary" sx={{ marginRight: "0.4rem" }} />
                    </IconButton>
                    <IconButton >
                        <CancelIcon color="error" sx={{ marginRight: "0.4rem" }} />
                    </IconButton>
                </Box>
            </Stack>
        </Paper>
    )
}

export default CardKitchen;