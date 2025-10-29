import { Box, Button, Container, Divider, Paper, Typography } from "@mui/material";
import { motion } from "framer-motion";
import PhotoUpload from "./Components/PhotoUpload";
import Wishes from "./Components/Wishes";
import InviteSection from "./Components/InviteSection";
import VenueCarousel from "./Components/VenueCarousel";

export default function App() {
  return (
    <Box sx={{ fontFamily: "Inter, 'Playfair Display', serif", backgroundColor: "#FFFFFF" }}>
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
            backgroundImage: `url("/pexels-annetnavi-792777.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 0,
            filter: "grayscale(30%) brightness(0.8)",
          }}
        />

        {/* Elegant Overlay */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "linear-gradient(to bottom right, rgba(0,0,0,0.6), rgba(47,58,86,0.4))",
            zIndex: 1,
          }}
        />

        {/* Hero Content */}
        <Container
          maxWidth="md"
          sx={{
            position: "relative",
            zIndex: 2,
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
              variant="h5"
              sx={{ mb: 2, fontWeight: 300, letterSpacing: 3, color: "rgba(255,255,255,0.85)" }}
            >
              Together Forever
            </Typography>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2 }}>
            <Typography
              variant="h1"
              sx={{
                fontFamily: "'Playfair Display', serif",
                fontSize: { xs: "3rem", md: "6rem" },
                color: "#D4AF37",
                textShadow: "1px 1px 15px rgba(0,0,0,0.5)",
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
            <Typography variant="h6" sx={{ fontWeight: 600, color: "rgba(255,255,255,0.9)" }}>
              DECEMBER
            </Typography>
            <Typography variant="h2" sx={{ fontWeight: "bold", color: "#D4AF37" }}>
              29
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 600, color: "rgba(255,255,255,0.9)" }}>
              2025
            </Typography>
          </motion.div>

          {/* Subtext */}
          <Typography
            variant="body1"
            sx={{
              mt: 3,
              color: "rgba(255,255,255,0.85)",
              fontStyle: "italic",
              maxWidth: "600px",
            }}
          >
            “We can’t wait to celebrate our forever with you.”
          </Typography>

          {/* CTA Button */}
          <motion.div whileHover={{ scale: 1.05 }} style={{ marginTop: 40 }}>
            <Button
              href="#wishes"
              variant="contained"
              sx={{
                background: "linear-gradient(45deg, #D4AF37, #EADCA6)",
                color: "#2F3A56",
                px: 6,
                py: 1.4,
                borderRadius: "40px",
                fontWeight: "bold",
                fontSize: "1rem",
                letterSpacing: 1,
                boxShadow: "0 6px 20px rgba(212,175,55,0.3)",
                transition: "all 0.3s ease",
                "&:hover": {
                  background: "linear-gradient(45deg, #E6D28A, #C9A74A)",
                  boxShadow: "0 8px 25px rgba(212,175,55,0.5)",
                },
              }}
            >
              Send Wishes
            </Button>
          </motion.div>
        </Container>
      </Box>

      {/* INVITE & VENUE SECTIONS */}
      <Box sx={{ backgroundColor: "#FFFFFF", py: 8 }}>
        <InviteSection />
        <VenueCarousel />
      </Box>

      {/* WISHES & PHOTOS SECTION */}
      <Box
        id="wishes"
        sx={{
          position: "relative",
          zIndex: 2,
          backgroundColor: "#F8F8F9",
          color: "#1E1E1E",
          py: { xs: 8, md: 12 },
        }}
      >
        <Container maxWidth="md" sx={{ textAlign: "center" }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              mb: 6,
              color: "#2F3A56",
              fontFamily: "'Playfair Display', serif",
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
              background: "linear-gradient(145deg, #FFFFFF, #F3F3F3)",
              boxShadow: "0 5px 25px rgba(0,0,0,0.05)",
            }}
          >
            <PhotoUpload />
          </Paper>

          <Divider sx={{ my: 6, borderColor: "#D4AF37", width: "50%", mx: "auto" }} />

          {/* Wishes */}
          <Paper
            elevation={6}
            sx={{
              p: 4,
              borderRadius: "20px",
              background: "linear-gradient(145deg, #FFFFFF, #F4F4F4)",
              boxShadow: "0 5px 25px rgba(0,0,0,0.05)",
            }}
          >
            <Wishes />
          </Paper>
        </Container>
      </Box>
    </Box>
  );
}
