// src/components/WeddingScheduleBook.jsx
import React, { useState } from "react";
import {
  Box,
  Typography,
  useMediaQuery,
  Button,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import SwipeableViews from "react-swipeable-views";

const pages = [
  {
    title: "Pre-Wedding Reception",
    date: "December 28, 2025",
    venue: "Tony Vilasam",
    events: [
      { time: "4:00 PM", event: "Guest Arrival & Welcome Drinks" },
      { time: "6:30 PM", event: "Madhuram Veppu (traditional sweet giving)" },
      { time: "7:30 PM", event: "Dinner & Celebration" },
      { time: "8:30 PM", event: "The Groom & Friends Entry" },
      { time: "9:30 PM", event: "Music & Dance" },
    ],
    gradient: "linear-gradient(135deg, #fffdf6 0%, #fff8e6 100%)",
  },
  {
    title: "Wedding Ceremony",
    date: "December 29, 2025",
    venue: "St. Joseph's Roman Catholic Church",
    events: [
      { time: "10:30 AM", event: "Bride & Groom Arrival" },
      { time: "12:00 PM", event: "Holy Wedding Mass" },
      { time: "1:30 PM", event: "Wedding Lunch" },
      { time: "3:30 PM", event: "Photo Session & Send-Off" },
    ],
    gradient: "linear-gradient(135deg, #fffdf6 0%, #f8f8ff 100%)",
  },
];

const flipVariants = {
  enter: { rotateY: 90, opacity: 0 },
  center: { rotateY: 0, opacity: 1 },
  exit: { rotateY: -90, opacity: 0 },
};

const WeddingScheduleBook = () => {
  const [page, setPage] = useState(0);
  const isMobile = useMediaQuery("(max-width:900px)");

  const nextPage = () => setPage((p) => (p + 1) % pages.length);
  const prevPage = () => setPage((p) => (p - 1 + pages.length) % pages.length);

  return (
    <Box
      sx={{
        py: 10,
        background: "linear-gradient(180deg, #FFFFFF 0%, #FAFAFA 100%)",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          mb: 6,
          fontWeight: 600,
          fontFamily: "'Great Vibes', cursive",
          color: "#2F3A56",
          letterSpacing: 1,
        }}
      >
        Celebration Schedule
      </Typography>

      {/* --- Mobile Version --- */}
      {isMobile ? (
        <>
          <Box
            sx={{
              perspective: 1000,
              width: "85%",
              maxWidth: 380,
              position: "relative",
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={page}
                variants={flipVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.8 }}
                style={{
                  borderRadius: 20,
                  overflow: "hidden",
                  background: pages[page].gradient,
                  padding: "24px 16px",
                  boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
                  transformOrigin: "center",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: "'Great Vibes', cursive",
                    fontSize: "2rem",
                    color: "#B8860B",
                    mb: 1,
                    textAlign: "center",
                  }}
                >
                  {pages[page].title}
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    color: "#444",
                    mb: 2,
                    textAlign: "center",
                  }}
                >
                  {pages[page].date} • {pages[page].venue}
                </Typography>

                {pages[page].events.map((e, i) => (
                  <Typography
                    key={i}
                    variant="body1"
                    sx={{
                      fontFamily: "'Playfair Display', serif",
                      mb: 1.5,
                      color: "#2F3A56",
                    }}
                  >
                    <b>{e.time}</b> — {e.event}
                  </Typography>
                ))}

                <Typography
                  variant="body2"
                  sx={{
                    mt: 3,
                    fontStyle: "italic",
                    color: "#A67C00",
                    fontFamily: "'Great Vibes', cursive",
                    fontSize: "1.1rem",
                    textAlign: "center",
                  }}
                >
                  “A moment to remember forever.”
                </Typography>
              </motion.div>
            </AnimatePresence>
          </Box>

          {/* --- Clickable Dots --- */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: 2,
              gap: 1.5,
            }}
          >
            {pages.map((_, idx) => (
              <Box
                key={idx}
                onClick={() => setPage(idx)}
                sx={{
                  width: idx === page ? 14 : 10,
                  height: idx === page ? 14 : 10,
                  borderRadius: "50%",
                  backgroundColor: idx === page ? "#B8860B" : "#D3C09F",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  "&:hover": {
                    transform: "scale(1.2)",
                    backgroundColor: "#B8860B",
                  },
                }}
              />
            ))}
          </Box>
        </>
      ) : (
        /* --- Desktop Swipe Layout --- */
        <Box sx={{ width: "70%", maxWidth: 900 }}>
          <SwipeableViews
            index={page}
            onChangeIndex={(index) => setPage(index)}
            enableMouseEvents
          >
            {pages.map((p, idx) => (
              <Box
                key={idx}
                sx={{
                  background: p.gradient,
                  borderRadius: 6,
                  boxShadow: "0 12px 40px rgba(0,0,0,0.1)",
                  p: 6,
                  textAlign: "center",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontFamily: "'Great Vibes', cursive",
                    color: "#B8860B",
                    mb: 1,
                  }}
                >
                  {p.title}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    color: "#2F3A56",
                    mb: 3,
                  }}
                >
                  {p.date} • {p.venue}
                </Typography>

                {p.events.map((e, i) => (
                  <Typography
                    key={i}
                    variant="body1"
                    sx={{
                      fontFamily: "'Playfair Display', serif",
                      color: "#333",
                      mb: 1.2,
                    }}
                  >
                    <b>{e.time}</b> — {e.event}
                  </Typography>
                ))}
              </Box>
            ))}
          </SwipeableViews>

          <Box
            sx={{ display: "flex", justifyContent: "center", mt: 4, gap: 2 }}
          >
            <Button
              onClick={prevPage}
              startIcon={<ChevronLeftIcon />}
              sx={{ color: "#B8860B", fontWeight: 600 }}
            >
              Previous
            </Button>
            <Button
              onClick={nextPage}
              endIcon={<ChevronRightIcon />}
              sx={{ color: "#B8860B", fontWeight: 600 }}
            >
              Next
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default WeddingScheduleBook;
