// Components/OurStory.jsx
import React, { useState } from "react";
import { Box, Typography, Card, CardMedia, CardContent, IconButton } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";

const chapters = [
  {
    title: "Chapter 1: When Our Worlds Collided",
    text: `It all began with a simple hello — two paths crossing by chance, unaware that destiny had quietly begun to weave its golden thread. The first glance sparked something timeless, a connection that felt destined since forever.`,
    image: "/chapter1.png",
  },
  {
    title: "Chapter 2: From Strangers to Soulmates",
    text: `Conversations became laughter, laughter became comfort. Every shared moment, every small fight, every smile built a bond that grew deeper and gentler with time. It was love that felt like home.`,
    image: "/chapter2.png",
  },
  {
    title: "Chapter 3: The Journey So Far",
    text: `Through all of life’s ups and downs, we stood side by side — learning patience, forgiveness, and the quiet strength of being each other’s constant. Together, we found beauty even in chaos.`,
    image: "/chapter3.png",
  },
  {
    title: "Chapter 4: Forever Begins Here",
    text: `Now, with hearts full of love and gratitude, we begin our forever. We invite you to be a part of this new chapter — the celebration of love, laughter, and everything in between.`,
    image: "/chapter4.png",
  },
];

export default function OurStory() {
  const [page, setPage] = useState(0);

  const nextPage = () => {
    if (page < chapters.length - 1) setPage(page + 1);
  };

  const prevPage = () => {
    if (page > 0) setPage(page - 1);
  };

  return (
    <Box
      id="ourstory"
      sx={{
        py: 10,
        background: "linear-gradient(180deg, #FFFFFF 0%, #FFF9E6 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          mb: 4,
          fontWeight: 700,
          fontFamily: "'Great Vibes', cursive",
          color: "#D4AF37",
          textAlign: "center",
          letterSpacing: 1,
        }}
      >
        Our Story
      </Typography>

      <Box
        sx={{
          width: "90%",
          maxWidth: 900,
          position: "relative",
          perspective: 2000,
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ rotateY: 90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            exit={{ rotateY: -90, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{
              transformOrigin: "center right",
            }}
          >
            <Card
              elevation={8}
              sx={{
                borderRadius: 3,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                background: "linear-gradient(145deg, #FFFFFF, #F8F8F8)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
              }}
            >
              <CardMedia
                component="img"
                image={chapters[page].image}
                alt={chapters[page].title}
                sx={{
                  width: "100%",
                  height: { xs: 240, md: 380 },
                  objectFit: "contain",
                }}
              />
              <CardContent
                sx={{
                  px: { xs: 3, md: 6 },
                  py: { xs: 4, md: 5 },
                  textAlign: "center",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    color: "#B8860B",
                    fontWeight: 700,
                    mb: 2,
                    fontFamily: "'Playfair Display', serif",
                  }}
                >
                  {chapters[page].title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#4B4B4B",
                    lineHeight: 1.8,
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  {chapters[page].text}
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <IconButton
          onClick={prevPage}
          disabled={page === 0}
          sx={{
            position: "absolute",
            top: "50%",
            left: -20,
            transform: "translateY(-50%)",
            backgroundColor: "#fff",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            "&:hover": { backgroundColor: "#FFF5CC" },
          }}
        >
          <ArrowBackIosNew sx={{ color: "#B8860B" }} />
        </IconButton>

        <IconButton
          onClick={nextPage}
          disabled={page === chapters.length - 1}
          sx={{
            position: "absolute",
            top: "50%",
            right: -20,
            transform: "translateY(-50%)",
            backgroundColor: "#fff",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            "&:hover": { backgroundColor: "#FFF5CC" },
          }}
        >
          <ArrowForwardIos sx={{ color: "#B8860B" }} />
        </IconButton>
      </Box>

      <Typography
        variant="subtitle1"
        sx={{
          mt: 5,
          fontStyle: "italic",
          color: "#7A6E3E",
          fontFamily: "'Playfair Display', serif",
        }}
      >
        “Every love story is beautiful — but ours is our favorite.”
      </Typography>
    </Box>
  );
}
