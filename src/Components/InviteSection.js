import { Box, Fade, Typography } from "@mui/material";

const InviteSection = () => {
  return (
    <Fade in timeout={1200}>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 6, md: 10 },
          px: { xs: 3, md: 12 },
          py: { xs: 6, md: 10 },
          backgroundColor: "#ffffff",
          backgroundImage:
            "linear-gradient(135deg, #ffffff 0%, #faf8f6 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Left text section */}
        <Box
          sx={{
            maxWidth: "550px",
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontFamily: "'Great Vibes', cursive",
              color: "#b08d57", // muted gold
              mb: 1,
              fontSize: { xs: "1.8rem", md: "2.3rem" },
            }}
          >
            Join Our Celebration
          </Typography>

          <Typography
            variant="h3"
            sx={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 600,
              color: "#3e2723",
              mb: 3,
              fontSize: { xs: "1.9rem", md: "2.7rem" },
              letterSpacing: "0.5px",
            }}
          >
            Two Hearts, One Promise
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "#5d4037",
              fontFamily: "'Great Vibes', cursive",
              lineHeight: 1.8,
              fontSize: { xs: "1.4rem", md: "1.4rem" },
              maxWidth: "500px",
              mx: { xs: "auto", md: 0 },
            }}
          >
            We invite you to be a part of our most cherished day —
            the moment two souls promise to walk together through every sunrise and sunset.

            Your presence will make our celebration complete,
            as we weave laughter, memories, and dreams
            into the tapestry of our forever.

            Come, witness the beginning of our beautiful journey —
            where love meets eternity,
            and every heartbeat whispers “always.” 💖
          </Typography>
        </Box>

        {/* Right heart-shaped image */}
        <Box
          sx={{
            position: "relative",
            width: { xs: "250px", md: "380px" },
            height: { xs: "250px", md: "380px" },
            borderRadius: "50%",
            overflow: "hidden",
            boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
            border: "6px solid rgba(176, 141, 87, 0.25)", // soft gold border
            transition: "transform 0.4s ease, box-shadow 0.4s ease",
            "&:hover": {
              transform: "scale(1.04)",
              boxShadow: "0 12px 35px rgba(0,0,0,0.15)",
            },
          }}
        >
          <img
            src="/pexels-annetnavi-792777.jpg"
            alt="Couple"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "brightness(0.98)",
              transition: "transform 0.4s ease",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.08)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.transform = "scale(1.0)")
            }
          />
        </Box>
      </Box>
    </Fade>
  );
};

export default InviteSection;
