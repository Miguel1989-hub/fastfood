import { Paper,Typography, CardMedia } from "@mui/material";


const CardCategories = ({ name, images, width, height }) => {
    return (
        <Paper sx={{ height: "110px", width: "180px"}}>
            <CardMedia
                component="img" 
                alt="hamburguer e fritas"
                image={images}
                sx={{textAlign: "center"}}
            />
            <Typography
            sx={{textAlign: "center", fontWeight: "bold"}}
            >
                {name}
            </Typography>
        </Paper>
    )
}

export default CardCategories;