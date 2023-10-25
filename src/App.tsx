import React from "react";
import { Grid, Paper, Typography, Box } from "@mui/material";
import Separator from "./Separator";

const App: React.FC = () => {
  return (
    <Grid
      container
      spacing={0}
      sx={{ height: "100vh", backgroundColor: "black" }}
    >
      {/* Floating Message */}
      <div className="floating-message">
        <Typography
          variant="h1"
          component="h1"
          fontFamily={"StyleScript"}
          py={2}
          style={{ fontSize: "100px" }}
        >
          Fiona & Andrés
        </Typography>
        <Box
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.7)", // Semi-transparent white background
            padding: "20px", // Add padding for spacing
            borderRadius: "4px", // Rounded corners
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)", // Add a subtle shadow
          }}
        >
          <Typography variant="h4" component="h2">
            Choose Your Destination
          </Typography>
          <Typography variant="body1" color="textSecondary">
            You can visit either or both weddings by clicking on the
            destinations below.
          </Typography>
          <Separator />
          <Typography variant="h4" component="h2">
            Elige tu destino
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Puedes visitar cualquiera o ambos bodas haciendo clic en los
            destinos de abajo.
          </Typography>
        </Box>
      </div>
      <Grid item xs={12} sm={6}>
        <Paper
          elevation={0}
          sx={{
            backgroundImage: 'url("img/wicklow.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center left",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            cursor: "pointer",
            transition: "filter 0.3s ease-in-out",
            textShadow: "0em 0em 1em #000, 0em 0em 1em #000, 0em 0em 1em #000",
            filter: "grayscale(100%) brightness(100%)",
            ":hover": {
              filter: "grayscale(0%) brightness(120%)",
            },
          }}
          onClick={() => {
            window.location.href =
              "https://withjoy.com/andres-and-fiona-ireland";
          }}
        >
          <Typography
            className="title-section"
            variant="h1"
            component="h1"
            color="white"
            pt={20}
            style={{ textShadow: "10px", textAlign: "center" }}
            fontFamily={"LoveLight"}
          >
            Wedding in Ireland
          </Typography>
          <Separator color="white" />
          <Typography
            variant="h3"
            component="h3"
            color="white"
            style={{ textShadow: "10px", textAlign: "center" }}
            fontFamily={"LoveLight"}
            pb={20}
          >
            Boda en Irlanda
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
            backgroundPosition: "center center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            cursor: "pointer",
            transition: "filter 0.3s ease-in-out",
            textShadow: "0em 0em 1em #000, 0em 0em 1em #000, 0em 0em 1em #000",
            filter: "grayscale(100%) brightness(100%)",
            ":hover": {
              filter: "grayscale(0%) brightness(110%)",
            },
          }}
          onClick={() => {
            window.location.href = "https://withjoy.com/andres-and-fiona-spain";
          }}
        >
          <Typography
            variant="h1"
            component="h1"
            color="white"
            pt={20}
            className="title-section"
            style={{ textShadow: "10px", textAlign: "center" }}
            fontFamily={"LoveLight"}
          >
            Wedding in Spain
          </Typography>
          <Separator color="white" />
          <Typography
            variant="h3"
            component="h3"
            color="white"
            style={{ textShadow: "10px", textAlign: "center" }}
            fontFamily={"LoveLight"}
            pb={20}
          >
            Boda en España
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default App;
