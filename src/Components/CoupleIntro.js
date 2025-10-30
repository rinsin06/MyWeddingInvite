import { Favorite, Instagram, LinkedIn } from "@mui/icons-material";
import { Avatar, Box, IconButton, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function CoupleIntro() {
    return (
        <Box
            id="couple"
            sx={{
                py: 10,
                px: 2,
                textAlign: "center",
                background: "linear-gradient(to bottom, #fff, #faf5f0)",
            }}
            component={motion.div}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
        >
            <Typography
                variant="h4"
                sx={{
                    fontFamily: "'Great Vibes', cursive",
                    fontWeight: 600,
                    mb: 6,
                    color: "#3e2a1e",
                }}
            >
                Meet the Couple
            </Typography>

            <Stack
                direction={{ xs: "column", md: "row" }}
                justifyContent="center"
                alignItems="center"
                spacing={6}
            >




                {/* Groom Card */}
                <motion.div whileHover={{ scale: 1.03 }}>
                    <Box
                        sx={{
                            background: "#fff",
                            borderRadius: "24px",
                            boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
                            p: 4,
                            maxWidth: 300,
                            mx: "auto",
                            border: "1px solid #f3e5d7",
                        }}
                    >
                        <Avatar
                            src="/me.jpg"
                            alt="Groom"
                            sx={{
                                width: 160,
                                height: 190,
                                mb: 2,
                                mx: "auto",
                                border: "4px solid #d4a373",
                            }}
                        />
                        <Typography
                            variant="h6"
                            sx={{ fontWeight: 600, color: "#3e2a1e", mb: 1,fontFamily: "'Great Vibes', cursive",
                                fontSize:"1.8rem"
                             }}
                        >
                            Rinsin
                        </Typography>

                        <Stack direction="row" justifyContent="center" spacing={1}>
                            <IconButton
                                href="https://www.instagram.com/rinsinrahim/"
                                target="_blank"
                                sx={{ color: "#E1306C" }}
                            >
                                <Instagram />
                            </IconButton>
                            <IconButton
                                href="https://www.linkedin.com/in/rinsin-rahim/"
                                target="_blank"
                                sx={{ color: "#1877F2" }}
                            >
                                <LinkedIn />
                            </IconButton>
                        </Stack>
                    </Box>
                </motion.div>
                {/* Heart Icon */}
                <Favorite
                    sx={{
                        fontSize: 40,
                        color: "#d4a373",
                        my: { xs: 3, md: 0 },
                    }}
                />
                {/* Bride Card */}
                <motion.div whileHover={{ scale: 1.03 }}>
                    <Box
                        sx={{
                            background: "#fff",
                            borderRadius: "24px",
                            boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
                            p: 4,
                            maxWidth: 300,
                            mx: "auto",
                            border: "1px solid #f3e5d7",
                        }}
                    >
                        <Avatar
                            src="/her2.jpg"
                            alt="Bride"
                            sx={{
                                width: 160,
                                height: 190,
                                mb: 2,
                                mx: "auto",
                                objectFit: "cover",       // ✅ shows the full image
                                backgroundColor: "#fffaf5", // ✅ soft ivory background (matches theme)
                                border: "4px solid #f6d9c3",
                            }}
                        />
                        <Typography
                            variant="h6"
                            sx={{ fontWeight: 600, color: "#3e2a1e", mb: 1 ,fontFamily: "'Great Vibes', cursive",
                                fontSize:"1.8rem"
                            }}
                        >
                            Riya
                        </Typography>

                        <Stack direction="row" justifyContent="center" spacing={1}>
                            <IconButton
                                href="https://www.instagram.com/riya_mariyaa/"
                                target="_blank"
                                sx={{ color: "#E1306C" }}
                            >
                                <Instagram />
                            </IconButton>
                            <IconButton
                                href="https://www.linkedin.com/in/riya-vijayan/"
                                target="_blank"
                                sx={{ color: "#1877F2" }}
                            >
                                <LinkedIn />
                            </IconButton>
                        </Stack>
                    </Box>
                </motion.div>
            </Stack>
            {/* --- Hashtag --- */}
            <Typography
                variant="h6"
                sx={{
                    mt: 6,
                    color: "#B8860B",
                    fontFamily: "'Great Vibes', cursive",
                    fontSize: "2rem",
                    textAlign: "center",
                    opacity: 0.9,
                }}
            >
                #RinRiya
            </Typography>
        </Box>
    );
}
