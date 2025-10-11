// src/Components/VenueSection.js
import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { motion } from "framer-motion";

export default function VenueSection() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        my: 6,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <Paper
          elevation={10}
          sx={{
            p: 5,
            borderRadius: "25px",
            background:
              "linear-gradient(145deg, rgba(255,240,245,0.95), rgba(255,228,225,0.95))",
            textAlign: "center",
            maxWidth: 600,
            mx: "auto",
            boxShadow:
              "0 8px 25px rgba(255,105,180,0.3), inset 0 0 20px rgba(255,192,203,0.4)",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              mb: 1,
              fontFamily: "'Dancing Script', cursive",
              fontWeight: "bold",
              color: "#FF69B4",
              textShadow: "1px 1px 5px rgba(0,0,0,0.15)",
            }}
          >
            Our Wedding Venue 💍
          </Typography>

          <Typography
            sx={{
              color: "#444",
              fontSize: "1.2rem",
              mb: 3,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
            }}
          >
            <LocationOnIcon sx={{ color: "#FF69B4" }} />
            Thekum Bhagom, Kollam
          </Typography>

          <Box
            sx={{
              overflow: "hidden",
              borderRadius: "20px",
              boxShadow: "0 4px 25px rgba(255,105,180,0.4)",
              border: "2px solid rgba(255,182,193,0.6)",
            }}
          >
            <iframe
              title="Wedding Venue"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.3824057329414!2d76.604547!3d8.905473999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05fdaaaab94a19%3A0xf36ed75d75f04789!2sThekkumbhagam%2C%20Kollam%2C%20Kerala!5e0!3m2!1sen!2sin!4v1696860929053!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: "none" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Box>
        </Paper>
      </motion.div>
    </Box>
  );
}
