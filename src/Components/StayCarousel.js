import React, { useState } from "react";
import { Card, CardMedia, Box, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const StayCarousel = () => {
  const images = [
    "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzN2eE_VFSVg6JYg1OD-ZM2LSFj1xyIRBak5U9V-uOCkVWVlYlgPnSJsb9WnjdknYl0QYvPEIljaXgkKZjo9we6E5BpN6bv6gnH5MkJOENg6EPzafdZ_oBE2EXA7eNAZSml1dd1jUnmXTyW=s1360-w1360-h1020-rw",
    "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzuLIngFwgfdbmGkgrb1Ev8NbDyn_zSZFl1M0djGDP0Alw2fm0MNXK_wfuQywdRdR_MEDmG-OF_Nos7-WQkO3Ba4xK2dw5E3NmUj3bJLEBD7vucFs9p75cHTcNimQHLrrXY3ZosPV0HDpA=s1360-w1360-h1020-rw",
    "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSw1z5E-HVID3XeszpNeT3HrtLZCP5nABTeGMxIwoqm_ViCdYqMVVW7lMd9eazTSzVyxVcAhgctALVYKRqplQjJM2oxhzExkKCZ2Hr_zk6LPeRXNrNe7zfEloRafUO_C0ZVPr_ibCyocHj8t=s1360-w1360-h1020-rw",
    "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxmLoNIr1lSvE5BDjFChOob54yiXZcT9PSU3pd02VJEWTixPc8Ta8pgebF8Lq68-oQErLB9ixN1sVFq92hZO3x2KAC01yBQaG1I7aEgOkq9vC_WKXB67CKEmbvM-a2c7_iVgryzAflH2eiH=s1360-w1360-h1020-rw",
    "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSx7m_eIB2PZEXIqbzda8xfWaByuUjQDjN9000CKJquppchHlCa_gDhSCu6evJMrp5wYEX3gZQzBKeT7aMIqGNUMwJlPbtJLU_djThvLf8ZTRp_HactVYOzr8i6S3UMdBqc56hZ_qAZSqwHp=s1360-w1360-h1020-rw",
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = images.length;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalImages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === totalImages - 1 ? 0 : prev + 1));
  };

  // Swipe detection for mobile
  let touchStartX = 0;
  let touchEndX = 0;

  const handleTouchStart = (e) => {
    touchStartX = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e) => {
    touchEndX = e.changedTouches[0].screenX;
    if (touchStartX - touchEndX > 50) handleNext(); // swipe left
    if (touchEndX - touchStartX > 50) handlePrev(); // swipe right
  };

  return (
    <Card
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: 300, md: 400 },
        overflow: "hidden",
        borderRadius: 4,
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <CardMedia
        component="img"
        image={images[currentIndex]}
        alt="Stay Image"
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "opacity 0.4s ease-in-out",
        }}
      />

      {/* Left Arrow */}
      <IconButton
        onClick={handlePrev}
        sx={{
          position: "absolute",
          top: "50%",
          left: 10,
          transform: "translateY(-50%)",
          color: "white",
          backgroundColor: "rgba(0,0,0,0.3)",
          "&:hover": { backgroundColor: "rgba(0,0,0,0.5)" },
          display: { xs: "none", md: "flex" },
        }}
      >
        <ArrowBackIos />
      </IconButton>

      {/* Right Arrow */}
      <IconButton
        onClick={handleNext}
        sx={{
          position: "absolute",
          top: "50%",
          right: 10,
          transform: "translateY(-50%)",
          color: "white",
          backgroundColor: "rgba(0,0,0,0.3)",
          "&:hover": { backgroundColor: "rgba(0,0,0,0.5)" },
          display: { xs: "none", md: "flex" },
        }}
      >
        <ArrowForwardIos />
      </IconButton>

      {/* Dots Indicator */}
      <Box
        sx={{
          position: "absolute",
          bottom: 10,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          gap: 1,
        }}
      >
        {images.map((_, index) => (
          <Box
            key={index}
            onClick={() => setCurrentIndex(index)}
            sx={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              backgroundColor:
                index === currentIndex ? "white" : "rgba(255,255,255,0.5)",
              cursor: "pointer",
              transition: "background-color 0.3s",
            }}
          />
        ))}
      </Box>
    </Card>
  );
};

export default StayCarousel;
