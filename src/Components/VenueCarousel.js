// VenueCarouselMUI.jsx
import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Grid,
  useMediaQuery,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import RoomIcon from "@mui/icons-material/Room";

const venues = [
  {
    title: "Pre-Wedding Reception",
    time: "05 PM - 10 PM",
    location: "Tony Vilasam",
    googleMaps: "https://maps.app.goo.gl/9S5xUT1Q445ZB5Zi9?g_st=iw",
    image: "/images/home_venue.jpg",
    icon: "💍",
  },
  {
    title: "Wedding Ceremony",
    time: "12 PM - 01 PM",
    location: "St. Michael's Church",
    googleMaps: "https://maps.app.goo.gl/akiYaTFzgapTfWKh9",
    image: "/images/church_venue.jpg",
    icon: "⛪",
  },
];

const slideVariants = {
  enter: { opacity: 0, x: 100 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
};

const VenueCarouselMUI = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isSmallScreen = useMediaQuery("(max-width:900px)");

  useEffect(() => {
    if (!isSmallScreen) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % venues.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isSmallScreen]);

  const MapLink = ({ url }) => (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        marginTop: 12,
        color: "#D4AF37",
        fontWeight: 600,
        textDecoration: "none",
        cursor: "pointer",
      }}
      whileHover={{ scale: 1.05, x: 5 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <RoomIcon sx={{ fontSize: 20, color: "#B8860B" }} />
      See on Map
    </motion.a>
  );

  return (
    <Box
      sx={{
        py: 10,
        background: "linear-gradient(180deg, #FFFFFF 0%, #F9F9F9 100%)",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          mb: 6,
          fontWeight: 600,
          fontFamily: "'Playfair Display', serif",
          color: "#2F3A56",
          letterSpacing: 1,
        }}
      >
        Our Wedding Venues
      </Typography>

      {/* --- Mobile Carousel --- */}
      {isSmallScreen ? (
        <Box
          sx={{
            maxWidth: 360,
            position: "relative",
            height: 420,
            margin: "0 auto",
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 1 }}
              style={{ position: "absolute", width: "100%" }}
            >
              <Card
                elevation={10}
                sx={{
                  borderRadius: 4,
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  background: "linear-gradient(145deg, #FFFFFF, #F5F5F5)",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
                }}
              >
                <CardMedia
                  component="img"
                  height="250"
                  image={venues[currentIndex].image}
                  alt={venues[currentIndex].title}
                  sx={{
                    objectFit: "cover",
                    borderTopLeftRadius: "16px",
                    borderTopRightRadius: "16px",
                  }}
                />
                <CardContent>
                  <Typography
                    variant="h5"
                    sx={{
                      color: "#B8860B",
                      fontWeight: 700,
                      fontFamily: "'Playfair Display', serif",
                    }}
                  >
                    {venues[currentIndex].title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#555", mt: 1 }}>
                    {venues[currentIndex].time}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#555" }}>
                    {venues[currentIndex].location}
                  </Typography>
                  <MapLink url={venues[currentIndex].googleMaps} />
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
        </Box>
      ) : (
        /* --- Desktop Grid --- */
        <Grid
          container
          spacing={5}
          justifyContent="center"
          alignItems="stretch"
          sx={{ maxWidth: 1100, margin: "0 auto" }}
        >
          {venues.map((venue, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card
                elevation={10}
                sx={{
                  borderRadius: 4,
                  background: "linear-gradient(145deg, #FFFFFF, #F5F5F5)",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                  height: "100%",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 12px 40px rgba(0,0,0,0.12)",
                  },
                }}
              >
                <Box sx={{ fontSize: 40, textAlign: "center", pt: 3 }}>
                  {venue.icon}
                </Box>
                <CardContent>
                  <Typography
                    variant="h5"
                    sx={{
                      color: "#B8860B",
                      fontWeight: 700,
                      fontFamily: "'Playfair Display', serif",
                    }}
                  >
                    {venue.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#555", mt: 1 }}>
                    {venue.time}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#555" }}>
                    {venue.location}
                  </Typography>
                  <MapLink url={venue.googleMaps} />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default VenueCarouselMUI;
