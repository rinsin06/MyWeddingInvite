// src/App.js
import { Box, Button, Container, Divider, Paper, Typography } from "@mui/material";
import { motion } from "framer-motion";
import PhotoUpload from "./Components/PhotoUpload";
import Wishes from "./Components/Wishes";

export default function App() {
  return (
    <Box sx={{ fontFamily: "Roboto, sans-serif" }}>
      {/* HERO SECTION */}
      <Box sx={{ position: "relative", minHeight: "100vh" }}>
        {/* Background Image */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage:
             `url("/pexels-annetnavi-792777.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 0,
          }}
        />

        {/* Gradient Overlay */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "linear-gradient(to bottom right, rgba(0,0,0,0.7), rgba(255,192,203,0.3))",
            zIndex: 1,
          }}
        />

        {/* Hero Content */}
        <Container
          maxWidth="md"
          sx={{
            position: "relative",
            zIndex: 2, // Above overlay
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
            textAlign: "center",
          }}
        >
          <motion.div initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <Typography
              variant="h4"
              sx={{ mb: 2, fontWeight: 300, letterSpacing: 2, color: "rgba(255,255,255,0.9)" }}
            >
              Together Forever
            </Typography>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2 }}>
            <Typography
              variant="h1"
              sx={{
                fontFamily: "'Dancing Script', cursive",
                fontSize: { xs: "3rem", md: "6rem" },
                color: "#FFB6C1",
                textShadow: "2px 2px 20px rgba(0,0,0,0.6)",
              }}
            >
              Rinsin & Riya
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            style={{ display: "flex", alignItems: "center", gap: 24, marginTop: 24 }}
          >
            <Typography variant="h6" sx={{ fontWeight: 600, color: "#FFE4E1" }}>
              DECEMBER
            </Typography>
            <Typography variant="h2" sx={{ fontWeight: "bold", color: "#FF69B4" }}>
              29
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 600, color: "#FFE4E1" }}>
              2025
            </Typography>
          </motion.div>

          {/* Venue Section */}
          <Box sx={{ textAlign: "center", mt: 6 }}>
            <Typography
              variant="h4"
              sx={{
                fontFamily: "'Dancing Script', cursive",
                color: "#FFD1DC",
                textShadow: "1px 1px 5px rgba(0,0,0,0.3)",
                mb: 1,
              }}
            >
              Venue
            </Typography>

            <Typography
              variant="h6"
              sx={{
                color: "rgba(255,255,255,0.9)",
                fontWeight: 500,
                mb: 3,
              }}
            >
              Thekum Bhagom, Kollam
            </Typography>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  maxWidth: 650,
                  mx: "auto",
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow: "0 10px 25px rgba(255,182,193,0.4)",
                }}
              >
                <img
                  src="https://maps.googleapis.com/maps/api/staticmap?center=Thekum+Bhagom+Kollam&zoom=15&size=700x350&scale=2&maptype=roadmap&markers=color:pink%7Clabel:L%7CThekum+Bhagom+Kollam&key=YOUR_API_KEY"
                  alt="Venue Map"
                  style={{
                    width: "100%",
                    height: "auto",
                    filter: "grayscale(10%) brightness(1.1)",
                  }}
                />

                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.6))",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      background: "linear-gradient(135deg, #FFB6C1, #FF69B4)",
                      color: "#fff",
                      fontWeight: 600,
                      textTransform: "none",
                      px: 4,
                      py: 1.5,
                      borderRadius: "30px",
                      boxShadow: "0 4px 12px rgba(255,182,193,0.6)",
                      "&:hover": {
                        background: "linear-gradient(135deg, #FF8FAB, #FF69B4)",
                      },
                    }}
                    onClick={() =>
                      window.open(
                        "https://share.google/YLAJ5qtzS1PVd5pDf",
                        "_blank"
                      )
                    }
                  >
                    💖 View Location
                  </Button>
                </Box>
              </Box>
            </motion.div>

            <Typography
              variant="body2"
              sx={{
                mt: 2,
                color: "rgba(255,255,255,0.8)",
                fontStyle: "italic",
              }}
            >
              Come celebrate this special day with us 🌸
            </Typography>
          </Box>


          <motion.div whileHover={{ scale: 1.08 }} style={{ marginTop: 32 }}>
            <Button
              href="#wishes"
              variant="contained"
              sx={{
                background: "linear-gradient(45deg, #FF69B4, #FFB6C1)",
                color: "white",
                px: 6,
                py: 1.5,
                borderRadius: "50px",
                fontWeight: "bold",
                boxShadow: "0 6px 20px rgba(255,105,180,0.5)",
                transition: "all 0.3s ease",
                "&:hover": { boxShadow: "0 8px 25px rgba(255,105,180,0.7)" },
              }}
            >
              RSVP / Send Wishes
            </Button>
          </motion.div>
        </Container>
      </Box>

      {/* WISHES & PHOTOS SECTION */}
      <Box
        id="wishes"
        sx={{
          position: "relative",
          zIndex: 2,
          backgroundColor: "#FFF0F5",
          color: "text.primary",
          py: { xs: 8, md: 12 },
        }}
      >
        <Container maxWidth="md" sx={{ textAlign: "center" }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              mb: 6,
              color: "#FF69B4",
              textShadow: "1px 1px 5px rgba(0,0,0,0.1)",
            }}
          >
            Share Your Memories & Wishes
          </Typography>

          {/* Photo Upload */}
          <Paper
            elevation={8}
            sx={{
              p: 4,
              mb: 6,
              borderRadius: "20px",
              background: "linear-gradient(145deg, #FFE4E1, #FFF0F5)",
            }}
          >
            <PhotoUpload />
          </Paper>

          <Divider sx={{ my: 6 }} />

          {/* Wishes */}
          <Paper
            elevation={6}
            sx={{
              p: 4,
              borderRadius: "20px",
              background: "linear-gradient(145deg, #FFF0F5, #FFE4E1)",
            }}
          >
            <Wishes />
          </Paper>
        </Container>
      </Box>
    </Box>
  );
}
