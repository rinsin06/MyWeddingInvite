// Components/SideMenu.js
import { Box, IconButton, List, ListItem, ListItemText, Typography } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

const sections = [
    { id: "hero", label: "Home" },
    { id: "invite", label: "Invitation" },
    { id: "story", label: "Our Story" },
    { id: "venue", label: "Venue" },
    { id: "schedule", label: "Schedule" },
    { id: "travel", label: "Travel & Stay" },
    { id: "wishes", label: "Wishes" },
    { id: "faq", label: "FAQ" },
];

export default function SideMenu() {
    const [open, setOpen] = useState(false);

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
            setOpen(false);
        }
    };

    return (
        <>
            {/* Floating Toggle Button */}
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4 }}
            >
                <IconButton
                    onClick={() => setOpen(!open)}
                    sx={{
                        position: "fixed",
                        top: 24,
                        left: 24,
                        zIndex: 13000,
                        width: 56,
                        height: 56,
                        borderRadius: "50%", // ensures perfect circle
                        backgroundColor: "#fff",
                        color: "#D4AF37",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                        "&:hover": {
                            backgroundColor: "#fff7da",
                            transform: "scale(1.05)",
                            transition: "all 0.25s ease",
                        },
                    }}
                >
                    {open ? (
                        <CloseIcon sx={{ fontSize: 28 }} />
                    ) : (
                        <MenuIcon sx={{ fontSize: 28 }} />
                    )}
                </IconButton>
            </motion.div>


            {/* Menu Panel */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        key="menu"
                        initial={{ x: -260, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -260, opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        style={{
                            position: "fixed",
                            top: 0,
                            left: 0,
                            height: "100vh",
                            width: 240,
                            overflow: "hidden",
                            background: "linear-gradient(180deg, rgba(47,58,86,0.95), rgba(31,38,59,0.98))",
                            borderRight: "1px solid rgba(255,255,255,0.15)",
                            boxShadow: "4px 0 35px rgba(0,0,0,0.3)",
                            zIndex: 12000,
                            backdropFilter: "blur(20px)",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        {/* Soft Gold Glow */}
                        <Box
                            sx={{
                                position: "relative",
                                top: "10%",
                                left: "30%",
                                width: "120px",
                                height: "120px",
                                borderRadius: "50%",
                                background: "radial-gradient(circle, rgba(212,175,55,0.3), transparent 70%)",
                                filter: "blur(45px)",
                                zIndex: -1,
                            }}
                        />

                        {/* Floating Sparkles */}
                        {[...Array(10)].map((_, i) => (
                            <motion.div
                                key={i}
                                initial={{
                                    x: Math.random() * 240,
                                    y: Math.random() * window.innerHeight,
                                    opacity: 0,
                                }}
                                animate={{
                                    y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
                                    opacity: [0.2, 0.8, 0.2],
                                }}
                                transition={{
                                    duration: 10 + Math.random() * 10,
                                    repeat: Infinity,
                                }}
                                style={{
                                    position: "absolute",
                                    width: "6px",
                                    height: "6px",
                                    borderRadius: "50%",
                                    backgroundColor: "#FFD700",
                                    filter: "blur(2px)",
                                    zIndex: -1,
                                }}
                            />
                        ))}

                        {/* Heading */}
                        <Typography
                            variant="h6"
                            sx={{
                                color: "#FFD700",
                                fontFamily: "'Great Vibes', cursive",
                                fontSize: "1.8rem",
                                mb: 4,
                                letterSpacing: 2,
                            }}
                        >
                            Rinsin & Riya
                        </Typography>

                        {/* Menu Items */}
                        <List sx={{ width: "100%", px: 3 }}>
                            {sections.map((section, i) => (
                                <motion.div
                                    key={section.id}
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <ListItem
                                        onClick={() => scrollToSection(section.id)}
                                        sx={{
                                            py: 2,
                                            justifyContent: "center",
                                            borderRadius: "12px",
                                            mb: 1.2,
                                            position: "relative",
                                            cursor: "pointer",
                                            overflow: "hidden",
                                            "&:before": {
                                                content: '""',
                                                position: "absolute",
                                                inset: 0,
                                                background:
                                                    "linear-gradient(90deg, rgba(212,175,55,0.15), transparent)",
                                                transform: "translateX(-100%)",
                                                transition: "transform 0.5s ease",
                                            },
                                            "&:hover::before": {
                                                transform: "translateX(0%)",
                                            },
                                            "&:hover": {
                                                transform: "scale(1.05)",
                                                transition: "all 0.25s ease",
                                            },
                                        }}
                                    >
                                        <ListItemText
                                            primary={section.label}
                                            primaryTypographyProps={{
                                                color: "#FFD700",
                                                fontFamily: "'Poppins', sans-serif",
                                                fontWeight: 600,
                                                letterSpacing: 1,
                                                textAlign: "center",
                                            }}
                                        />
                                    </ListItem>
                                </motion.div>
                            ))}
                        </List>

                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
