import React, { useState } from "react";
import {
  Box,
  Typography,
  Divider,
  Card,
  CardContent,
  Grid,
  IconButton,
  CardMedia,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import TrainIcon from "@mui/icons-material/Train";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import RoomIcon from "@mui/icons-material/Room";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import StayCarousel from "./StayCarousel";
import StayVote from "./StayVote";

export default function TravelSection() {
  const stayImages = [
    "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzN2eE_VFSVg6JYg1OD-ZM2LSFj1xyIRBak5U9V-uOCkVWVlYlgPnSJsb9WnjdknYl0QYvPEIljaXgkKZjo9we6E5BpN6bv6gnH5MkJOENg6EPzafdZ_oBE2EXA7eNAZSml1dd1jUnmXTyW=s1360-w1360-h1020-rw",
    "https://images.unsplash.com/photo-1560067174-894b1a33a46f?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1600585154603-0468eab2e1d8?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1000&q=80",
  ];

  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextImage = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % stayImages.length);
  };

  const prevImage = () => {
    setDirection(-1);
    setCurrent((prev) => (prev === 0 ? stayImages.length - 1 : prev - 1));
  };

  return (
    <Box
      id="travel"
      sx={{
        py: 10,
        px: 3,
        background: "linear-gradient(180deg, #FFFDF5 0%, #FFF8E7 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Title */}
      <Typography
        variant="h4"
        sx={{
          mb: 4,
          fontWeight: 700,
          fontFamily: "'Great Vibes', cursive",
          color: "#D4AF37",
          textAlign: "center",
          letterSpacing: 1,
          fontSize: { xs: "2rem", md: "2.5rem" },
        }}
      >
        Travel & Stay
      </Typography>

      <Typography
        variant="subtitle1"
        sx={{
          maxWidth: 800,
          textAlign: "center",
          color: "#6B5B3E",
          mb: 6,
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        Whether you’re flying in, riding the rails, or driving along Kerala’s
        scenic coast — here’s how you can join us with ease.
      </Typography>

      <Box sx={{ maxWidth: 900 }}>
        {/* --- Train --- */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <TrainIcon sx={{ color: "#B8860B", fontSize: 48 }} />
          <Typography
            variant="h5"
            sx={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              color: "#B8860B",
              mt: 2,
              mb: 1,
            }}
          >
            By Train
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "'Poppins', sans-serif",
              color: "#4B4B4B",
              lineHeight: 1.8,
            }}
          >
            The nearest station is <b>Kollam Junction</b>. From there, taxis and
            cabs are easily available. Follow the location provided on the venue section
            to reach both venues comfortably.
          </Typography>
        </Box>

        <Divider
          sx={{ width: "40%", mx: "auto", borderColor: "rgba(212,175,55,0.4)" }}
        />

        {/* --- Flight --- */}
        <Box sx={{ textAlign: "center", my: 6 }}>
          <FlightTakeoffIcon sx={{ color: "#B8860B", fontSize: 48 }} />
          <Typography
            variant="h5"
            sx={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              color: "#B8860B",
              mt: 2,
              mb: 1,
            }}
          >
            By Flight
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "'Poppins', sans-serif",
              color: "#4B4B4B",
              lineHeight: 1.8,
            }}
          >
            The nearest airport is{" "}
            <b>Trivandrum International Airport (TRV)</b>, about{" "}
            <b>2.5 hours</b> from Kollam. You can either:
          </Typography>

          <Box
            component="ul"
            sx={{
              listStyle: "none",
              p: 0,
              mt: 2,
              color: "#4B4B4B",
              fontFamily: "'Poppins', sans-serif",
              display: "inline-block",
              textAlign: "left",
            }}
          >
            <li>🚖 Book a <b>taxi</b> directly to Kollam.</li>
            <li>🚆 Catch a <b>local train or KSRTC bus</b> from Trivandrum.</li>
          </Box>

          <Typography
            variant="body1"
            sx={{
              fontFamily: "'Poppins', sans-serif",
              color: "#4B4B4B",
              mt: 2,
            }}
          >
            From Kollam, follow the location provided on the venue section
            to the wedding venue.
          </Typography>
        </Box>

        <Divider
          sx={{ width: "40%", mx: "auto", borderColor: "rgba(212,175,55,0.4)" }}
        />

        {/* --- Stay & Accommodation --- */}
        <Card
          elevation={10}
          sx={{
            mt: 6,
            borderRadius: 4,
            background: "linear-gradient(180deg, #FFFFFF 0%, #FFF8E7 100%)",
            boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
            overflow: "hidden",
          }}
        >
          <Grid container>
            {/* Image Carousel Section */}
           <StayCarousel/>

            {/* Text Section */}
            <Grid
              item
              xs={12}
              md={7}
              sx={{
                p: { xs: 3, md: 5 },
                display: "flex",
                alignItems: "center",
              }}
            >
              <CardContent sx={{ textAlign: "center" }}>
                <RoomIcon sx={{ color: "#B8860B", fontSize: 48 }} />
                <Typography
                  variant="h5"
                  sx={{
                    color: "#B8860B",
                    fontWeight: 700,
                    fontFamily: "'Playfair Display', serif",
                    mt: 2,
                    mb: 2,
                  }}
                >
                  La Villa – Thekkumbhagam, Kollam
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: "#4B4B4B",
                    lineHeight: 1.8,
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  For our guests traveling from afar, we’ve arranged a serene
                  stay at <b>La Villa, Thekkumbhagam, Kollam</b> — a cozy
                  retreat surrounded by the calm beauty of the backwaters.
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    mt: 2,
                    color: "#4B4B4B",
                    lineHeight: 1.8,
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  The venue is just a short drive away, ensuring comfort and
                  ease for your travel. View the location on{" "}
                  <a
                    href="https://share.google/6Zl1FsTkX0kxBzlm8"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "#D4AF37",
                      textDecoration: "none",
                      fontWeight: 600,
                    }}
                  >
                    Google Maps
                  </a>
                  .
                </Typography>
                <StayVote/>

                <Typography
                  variant="body2"
                  sx={{
                    mt: 3,
                    color: "#7A6E3E",
                    fontStyle: "italic",
                    fontFamily: "'Playfair Display', serif",
                  }}
                >
                  “Because every journey deserves a warm place to rest.” ✨
                </Typography>
              </CardContent>
            </Grid>
          </Grid>
        </Card>
      </Box>

      {/* Footer Quote */}
      <Typography
        variant="subtitle1"
        sx={{
          mt: 8,
          fontStyle: "italic",
          color: "#7A6E3E",
          fontFamily: "'Playfair Display', serif",
          textAlign: "center",
        }}
      >
        “No matter how far you travel, love will always guide you home.” 🕊️
      </Typography>
    </Box>
  );
}
