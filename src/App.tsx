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
          py={1}
          style={{ fontSize: "80px" }}
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
          <Typography variant="h5" component="h2">
            Choose Your Destination(s)
          </Typography>
          <Typography variant="body1" color="textSecondary">
            You can visit either or both weddings by clicking on the
            destinations below.
          </Typography>
          <Separator />
          <Typography variant="h5" component="h2">
            Elige tu(s) destino(s)
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Puedes visitar cualquiera o ambas bodas haciendo clic en los
            destinos de abajo.
          </Typography>
        </Box>
      </div>
      <Grid item xs={12} sm={6}>
        <a
          className="link-unstyled"
          href="https://withjoy.com/andres-and-fiona-ireland"
        >
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
              textShadow:
                "0em 0em 1em #000, 0em 0em 1em #000, 0em 0em 1em #000",
              filter: "grayscale(100%) brightness(100%)",
              ":hover": {
                filter: "grayscale(0%) brightness(120%)",
              },
              borderRadius: 0,
            }}
          >
            <Typography
              className="title-section"
              variant="h4"
              component="h4"
              color="white"
              style={{ textShadow: "10px", textAlign: "center" }}
              fontFamily={"LoveLight"}
              pt={20}
            >
              24/08/2024
            </Typography>
            <Typography
              variant="h2"
              component="h2"
              color="white"
              style={{ textShadow: "10px", textAlign: "center" }}
              fontFamily={"LoveLight"}
            >
              Wedding in Ireland
            </Typography>
            <Separator color="white" />
            <Typography
              variant="h4"
              component="h4"
              color="white"
              style={{ textShadow: "10px", textAlign: "center" }}
              fontFamily={"LoveLight"}
              pb={20}
            >
              Boda en Irlanda
            </Typography>
          </Paper>
        </a>
      </Grid>

      {/* Right Split - Spain */}
      <Grid item xs={12} sm={6}>
        <a
          className="link-unstyled"
          href="https://withjoy.com/andres-and-fiona-spain"
        >
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
              textShadow:
                "0em 0em 1em #000, 0em 0em 1em #000, 0em 0em 1em #000",
              filter: "grayscale(100%) brightness(100%)",
              ":hover": {
                filter: "grayscale(0%) brightness(110%)",
              },
              borderRadius: 0,
            }}
          >
            <Typography
              className="title-section"
              variant="h4"
              component="h4"
              color="white"
              style={{ textShadow: "10px", textAlign: "center" }}
              fontFamily={"LoveLight"}
              pt={20}
            >
              31/08/2024
            </Typography>
            <Typography
              variant="h2"
              component="h2"
              color="white"
              style={{ textShadow: "10px", textAlign: "center" }}
              fontFamily={"LoveLight"}
            >
              Boda en España
            </Typography>
            <Separator color="white" />
            <Typography
              variant="h4"
              component="h4"
              color="white"
              style={{ textShadow: "10px", textAlign: "center" }}
              fontFamily={"LoveLight"}
              pb={20}
            >
              Wedding in Spain
            </Typography>
          </Paper>
        </a>
      </Grid>
    </Grid>
  );
};

export default App;
