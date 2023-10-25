import React from "react";
import {
  Container,
  Grid,
  Paper,
  Typography,
  CssBaseline,
  Box,
} from "@mui/material";

const App: React.FC = () => {
  return (
    <Grid
      container
      spacing={0}
      sx={{ height: "100vh", backgroundColor: "black" }}
    >
      {/* Left Split - Ireland */}
      <Grid item xs={12} sm={6}>
        <Paper
          elevation={0}
          sx={{
            backgroundImage: 'url("img/wicklow.jpg")',
            backgroundSize: "cover",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            cursor: "pointer",
            ":hover": {
              backgroundBlendMode: "luminosity",
            },
          }}
          onClick={() => {
            window.location.href =
              "https://withjoy.com/andres-and-fiona-ireland";
          }}
        >
          <Typography variant="h3" component="h1" color="white" pt={20}>
            Ireland Wedding
          </Typography>
        </Paper>
      </Grid>

      {/* Right Split - Spain */}
      <Grid item xs={12} sm={6}>
        <Paper
          elevation={0}
          sx={{
            backgroundImage: 'url("img/valencia.jpg")',
            backgroundSize: "cover",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            cursor: "pointer",
            ":hover": {
              backgroundBlendMode: "luminosity",
            },
          }}
          onClick={() => {
            window.location.href = "https://withjoy.com/andres-and-fiona-spain";
          }}
        >
          <Typography variant="h3" component="h1" color="white" pt={20}>
            Spain Wedding
          </Typography>
        </Paper>
      </Grid>

      {/* Floating Message */}
      <Box
        sx={{
          position: "absolute",
          top: "20px", // Adjust the distance from the bottom as needed
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
          width: "80%", // Adjust the width as needed
          backgroundColor: "rgba(255, 255, 255, 0.7)", // Semi-transparent white background
          padding: "20px", // Add padding for spacing
          borderRadius: "4px", // Rounded corners
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)", // Add a subtle shadow
        }}
      >
        <Typography variant="h1" component="h1" fontFamily={"LoveLight"}>
          Fiona and Andrés
        </Typography>
        <Typography variant="h4" component="h2">
          Choose Your Destination
        </Typography>
        <Typography variant="body1" color="textSecondary">
          You can visit either or both weddings by clicking on the destinations
          above.
        </Typography>
      </Box>
    </Grid>
  );
};

export default App;
