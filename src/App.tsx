import React from "react";
import { Grid, Paper, Button, Typography } from "@mui/material";
import photo from "./photo.png";

const LanguageSelection: React.FC = () => {
  return (
    <Grid container spacing={0} sx={{ height: "100vh" }}>
      {/* Left Split */}
      <Grid item xs={12} sm={6}>
        <Paper
          elevation={0}
          sx={{
            backgroundColor: "#AAAAAA",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "end",
            height: "100%",
          }}
          style={{
            backgroundImage: `url(${photo})`,
            backgroundPosition: "center center",
          }}
        >
          <Typography variant="h4" component="h1" color="white">
            Fiona and Andres
          </Typography>
          <Typography variant="h5" component="h2" color="white" mt={2} mb={200}>
            Please select your language
          </Typography>
        </Paper>
      </Grid>

      {/* Right Split */}
      <Grid item xs={12} sm={6}>
        <Paper
          elevation={0}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <Typography variant="h5" component="h2" mb={4}>
            Select Language
          </Typography>
          <Button
            variant="outlined"
            color="primary"
            size="large"
            sx={{ width: "80%", my: 2 }}
          >
            <img
              src="https://flagcdn.com/h20/ie.png"
              height="18"
              alt="Ireland"
              style={{ marginRight: 10 }}
            />
            English
          </Button>
          <Button
            variant="outlined"
            color="primary"
            size="large"
            sx={{ width: "80%" }}
          >
            <img
              src="https://flagcdn.com/h20/es.png"
              height="20"
              alt="Spain"
              style={{ marginRight: 10 }}
            />
            Español (Spanish)
          </Button>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default LanguageSelection;
