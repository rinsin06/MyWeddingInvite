import { Box, Container, Divider, Paper, Typography } from "@mui/material";
import { motion } from "framer-motion";
import FAQSection from "./Components/FAQSection";
import InviteSection from "./Components/InviteSection";
import OurStory from "./Components/ourstory";
import SideMenu from "./Components/SideMenu"; // ✅ Importing the Side Menu
import TravelSection from "./Components/TravelSection";
import VenueCarousel from "./Components/VenueCarousel";
import WeddingSchedule from "./Components/WeddingSchedule";
import Wishes from "./Components/Wishes";

export default function App() {
  const doodles = ["💍", "💖", "🌸", "✨", "🥂", "💫", "🎀", "🌷"];

  return (
    <Box sx={{ backgroundColor: "#FFFFFF", fontFamily: "'Quicksand', 'Poppins', sans-serif" }}>
      {/* ✅ Floating Side Menu */}
      <SideMenu />

      {/* HERO SECTION */}
      <Box id="hero" sx={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
        {/* Background Image */}
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.8 }}
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url("wedding.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "grayscale(25%) brightness(0.85)",
            zIndex: 0,
          }}
        />

        {/* Overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom right, rgba(0,0,0,0.6), rgba(47,58,86,0.4))",
            zIndex: 1,
          }}
        />

        {/* Floating Doodles */}
        {doodles.map((icon, i) => (
          <motion.div
            key={i}
            initial={{ y: "100vh", x: Math.random() * window.innerWidth }}
            animate={{
              y: ["100vh", "-10vh"],
              x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
              rotate: [0, 360],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 12 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
            style={{
              position: "absolute",
              fontSize: `${24 + Math.random() * 24}px`,
              zIndex: 2,
              color: "#D4AF37",
            }}
          >
            {icon}
          </motion.div>
        ))}

        {/* Sparkle Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`sparkle-${i}`}
            initial={{ y: "110vh", x: Math.random() * window.innerWidth, opacity: 0 }}
            animate={{
              y: ["110vh", "-10vh"],
              opacity: [0.1, 0.6, 0.1],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 8,
            }}
            style={{
              position: "absolute",
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              backgroundColor: "#D4AF37",
              zIndex: 1,
            }}
          />
        ))}

        {/* Hero Content */}
        <Container
          maxWidth="md"
          sx={{
            position: "relative",
            zIndex: 3,
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
              sx={{
                mb: 2,
                fontWeight: 300,
                letterSpacing: 3,
                color: "rgba(255,255,255,0.9)",
                fontFamily: "'Great Vibes', cursive",
              }}
            >
              Together Forever
            </Typography>
          </motion.div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <Typography
              variant="h1"
              sx={{
                fontFamily: "'Great Vibes', cursive",
                fontSize: { xs: "3.5rem", md: "6rem" },
                color: "#D4AF37",
                textShadow: "1px 1px 15px rgba(0,0,0,0.5)",
              }}
            >
              Rinsin & Riya
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            style={{ display: "flex", alignItems: "center", gap: 24, marginTop: 24 }}
          >
            <Typography variant="h6" sx={{ color: "rgba(255,255,255,0.9)", fontWeight: 600, }}>
              DECEMBER
            </Typography>
            <Typography variant="h2" sx={{ fontWeight: "bold", color: "#D4AF37" }}>
              29
            </Typography>
            <Typography variant="h6" sx={{ color: "rgba(255,255,255,0.9)", fontWeight: 600 }}>
              2025
            </Typography>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
            <Typography
              variant="body1"
              sx={{
                mt: 3,
                color: "rgba(255,255,255,0.9)",
                fontStyle: "italic",
                fontFamily: "'Quicksand', sans-serif",
                fontSize: "1.1rem",
              }}
            >
              “Come, celebrate the laughter, love, and the magic of forever with us.”
            </Typography>
          </motion.div>

        </Container>
      </Box>

      {/* INVITE & VENUE SECTIONS */}
      <Box id="invite" sx={{ backgroundColor: "#FFFFFF" }}>
        <InviteSection />

      </Box>

      <Box id="story" sx={{ backgroundColor: "#FFFFFF" }}>
        <OurStory />
      </Box>
      <Box id="venue">
        <VenueCarousel />
      </Box>

      <Box id="schedule" sx={{ backgroundColor: "#FFFFFF" }}>
        <WeddingSchedule />
      </Box>

      <Box id="travel" sx={{ backgroundColor: "#FFFFFF" }}>
        <TravelSection />
      </Box>

      {/* WISHES SECTION */}
      <motion.div
        id="wishes"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        style={{ backgroundColor: "#F8F8F9", padding: "6rem 0" }}
      >
        <Container maxWidth="md" sx={{ textAlign: "center" }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              mb: 6,
              color: "#2F3A56",
              fontFamily: "'Great Vibes', cursive",
              letterSpacing: 1,
            }}
          >
            Share Your Memories & Wishes
          </Typography>

          <Divider sx={{ my: 6, borderColor: "#D4AF37", width: "50%", mx: "auto" }} />

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
      </motion.div>
      <Box id="faq" sx={{ backgroundColor: "#FFFFFF" }}>
        <FAQSection />
      </Box>
    </Box>
  );
}
