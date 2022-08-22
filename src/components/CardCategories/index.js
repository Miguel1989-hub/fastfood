import { Paper, styled, Typography, CardMedia } from "@mui/material";


const CardCategories = ({ name, images, width, height }) => {
    return (
        <Paper sx={{ height: "140px", width: "160px"}}>
            <CardMedia
                component="img" 
                alt="hamburguer e fritas"
                height={width}
                width={height}
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