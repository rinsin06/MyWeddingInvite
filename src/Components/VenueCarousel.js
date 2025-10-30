import RoomIcon from "@mui/icons-material/Room";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const venues = [
  {
    title: "Pre-Wedding Reception",
    time: "05 PM - 10 PM",
    location: "Tony Vilasam",
    googleMaps: "https://maps.app.goo.gl/9S5xUT1Q445ZB5Zi9?g_st=iw",
    image: "/Riya House.jpg",
    icon: "💍",
  },
  {
    title: "Wedding Ceremony",
    time: "12 PM - 01 PM",
    location: "St. Joseph's Roman Catholic Church",
    googleMaps: "https://maps.app.goo.gl/nx8yhP2PUYHtUwcU8",
    image:
      "https://content.jdmagicbox.com/v2/comp/kollam/u2/9999px474.x474.200928202426.y5u2/catalogue/st-joseph-s-church-thekkumbhagom-kollam-churches-xTKu0yxM8k-250.jpg",
    icon: "⛪",
  },
];

const slideVariants = {
  enter: { opacity: 0, x: 80 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -80 },
};

const VenueCarouselMUI = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isSmallScreen = useMediaQuery("(max-width:900px)");

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % venues.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + venues.length) % venues.length);
  };

  const handleDragEnd = (event, info) => {
    const swipe = info.offset.x;
    const swipeThreshold = 80; // Minimum swipe distance to trigger a change

    if (swipe < -swipeThreshold) {
      nextSlide();
    } else if (swipe > swipeThreshold) {
      prevSlide();
    }
  };

  const MapLink = ({ url }) => (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        marginTop: 14,
        color: "#B8860B",
        fontWeight: 600,
        textDecoration: "none",
        fontFamily: "'Poppins', sans-serif",
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
        background: "linear-gradient(180deg, #FFFFFF 0%, #FAFAFA 100%)",
        textAlign: "center",
        position: "relative",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          mb: 2,
          fontFamily: "'Great Vibes', cursive",
          color: "#B8860B",
          fontWeight: 500,
          fontSize: "2.8rem",
        }}
      >
        Our Wedding Venues
      </Typography>

      <Typography
        variant="subtitle1"
        sx={{
          mb: 6,
          fontFamily: "'Lora', serif",
          color: "#555",
          letterSpacing: 0.5,
        }}
      >
        Two hearts, two places — bound forever by love and memories.
      </Typography>

      {/* --- Mobile View --- */}
      {isSmallScreen ? (
        <Box sx={{ maxWidth: 360, mx: "auto", position: "relative" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={handleDragEnd}
              style={{ position: "relative", cursor: "grab" }}
            >
              <Card
                elevation={10}
                sx={{
                  borderRadius: 4,
                  background: "linear-gradient(145deg, #FFFFFF, #F7F7F7)",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
                  overflow: "hidden",
                }}
              >
                <CardMedia
                  component="img"
                  height="250"
                  image={venues[currentIndex].image}
                  alt={venues[currentIndex].title}
                  sx={{ objectFit: "cover" }}
                />
                <CardContent>
                  <Typography
                    variant="h5"
                    sx={{
                      color: "#B8860B",
                      fontWeight: 700,
                      fontFamily: "'Great Vibes', cursive",
                      mb: 0.5,
                    }}
                  >
                    {venues[currentIndex].title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#666",
                       fontSize:"1.0rem",
                     fontFamily: "'Playfair Display', serif",
                      mb: 0.5,
                    }}
                  >
                    {venues[currentIndex].time}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#666",
                      fontSize:"1.4rem",
                      fontFamily: "'Great Vibes', cursive",
                    }}
                  >
                    {venues[currentIndex].location}
                  </Typography>
                  <MapLink url={venues[currentIndex].googleMaps} />
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <Stack direction="row" spacing={1} justifyContent="center" sx={{ mt: 2 }}>
            {venues.map((_, i) => (
              <Box
                key={i}
                onClick={() => setCurrentIndex(i)}
                sx={{
                  width: currentIndex === i ? 14 : 10,
                  height: currentIndex === i ? 14 : 10,
                  borderRadius: "50%",
                  backgroundColor: currentIndex === i ? "#B8860B" : "#ccc",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              />
            ))}
          </Stack>

          {/* Arrows */}
          <IconButton
            onClick={prevSlide}
            sx={{
              position: "absolute",
              top: "40%",
              left: -15,
              color: "#B8860B",
            }}
          >
            <ArrowBackIosNewIcon />
          </IconButton>
          <IconButton
            onClick={nextSlide}
            sx={{
              position: "absolute",
              top: "40%",
              right: -15,
              color: "#B8860B",
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      ) : (
        /* --- Desktop Grid --- */
        <Box sx={{ position: "relative" }}>
          <Grid
            container
            spacing={5}
            justifyContent="center"
            alignItems="stretch"
            sx={{ maxWidth: 1100, mx: "auto" }}
          >
            {venues.map((venue, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card
                  elevation={10}
                  sx={{
                    borderRadius: 4,
                    background: "linear-gradient(145deg, #FFFFFF, #F7F7F7)",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                    height: "100%",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow: "0 14px 40px rgba(0,0,0,0.12)",
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
                        mb: 0.5,
                      }}
                    >
                      {venue.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#666",
                        fontFamily: "'Lora', serif",
                        mb: 0.5,
                      }}
                    >
                      {venue.time}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#666",
                        fontFamily: "'Lora', serif",
                      }}
                    >
                      {venue.location}
                    </Typography>
                    <MapLink url={venue.googleMaps} />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </Box>
  );
};

export default VenueCarouselMUI;
