import {
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
  Divider,
  CircularProgress,
} from "@mui/material";
import { useEffect, useState } from "react";
import { ref, push, set, onValue } from "firebase/database";
import { db } from "../firebase";

export default function Wishes() {
  const [name, setName] = useState("");
  const [wish, setWish] = useState("");
  const [wishes, setWishes] = useState([]);
  const [loading, setLoading] = useState(false);

  // 🧠 Fetch all wishes in real-time
  useEffect(() => {
    const wishesRef = ref(db, "wishes");
    onValue(wishesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const wishesArray = Object.entries(data)
          .map(([id, value]) => ({ id, ...value }))
          .sort((a, b) => b.createdAt - a.createdAt);
        setWishes(wishesArray);
      } else {
        setWishes([]);
      }
    });
  }, []);

  // 💌 Send a new wish
  const sendWish = async () => {
    if (!name.trim() || !wish.trim()) return;
    setLoading(true);

    const wishesRef = ref(db, "wishes");
    const newWishRef = push(wishesRef);
    await set(newWishRef, {
      name: name.trim(),
      wish: wish.trim(),
      createdAt: Date.now(),
    });

    setName("");
    setWish("");
    setLoading(false);
  };

  return (
    <Box
      sx={{
        maxWidth: 700,
        mx: "auto",
        py: 6,
        px: { xs: 3, md: 5 },
        textAlign: "center",
        backgroundColor: "#ffffff",
        borderRadius: 4,
        boxShadow: "0 4px 25px rgba(0,0,0,0.05)",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          mb: 4,
          fontFamily: "'Playfair Display', serif",
          color: "#B99732",
          fontWeight: 700,
          letterSpacing: 1,
        }}
      >
        Leave Your Wishes 💍
      </Typography>

      {/* Input Section */}
      <Stack spacing={2} sx={{ mb: 4 }}>
        <TextField
          label="Your Name"
          variant="outlined"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: 3,
              background: "#FAFAFA",
              "& fieldset": { borderColor: "#E0E0E0" },
              "&:hover fieldset": { borderColor: "#C9A74A" },
              "&.Mui-focused fieldset": { borderColor: "#C9A74A" },
            },
          }}
        />
        <TextField
          label="Your Wish"
          variant="outlined"
          fullWidth
          multiline
          rows={3}
          value={wish}
          onChange={(e) => setWish(e.target.value)}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: 3,
              background: "#FAFAFA",
              "& fieldset": { borderColor: "#E0E0E0" },
              "&:hover fieldset": { borderColor: "#C9A74A" },
              "&.Mui-focused fieldset": { borderColor: "#C9A74A" },
            },
          }}
        />
        <Button
          variant="contained"
          onClick={sendWish}
          disabled={loading}
          sx={{
            py: 1.3,
            fontWeight: "bold",
            fontFamily: "'Poppins', sans-serif",
            background: "linear-gradient(135deg, #EADCA6, #C9A74A)",
            color: "#3A3A3A",
            borderRadius: 3,
            boxShadow: "0 6px 20px rgba(201,167,74,0.25)",
            "&:hover": {
              background: "linear-gradient(135deg, #E6D28A, #B99732)",
              boxShadow: "0 8px 25px rgba(201,167,74,0.35)",
            },
          }}
        >
          {loading ? <CircularProgress size={22} sx={{ color: "#3A3A3A" }} /> : "Send Wish"}
        </Button>
      </Stack>

      <Divider sx={{ mb: 3 }} />

      {/* Display Section */}
      <Box sx={{ textAlign: "left", px: 1, maxHeight: "400px", overflowY: "auto" }}>
        {wishes.length === 0 ? (
          <Typography sx={{ color: "#777", textAlign: "center" }}>
            No wishes yet. Be the first to share your blessing! ✨
          </Typography>
        ) : (
          wishes.map((w) => (
            <Paper
              key={w.id}
              elevation={0}
              sx={{
                p: 2.5,
                mb: 2,
                borderRadius: 3,
                background: "#FAFAFA",
                border: "1px solid rgba(201,167,74,0.25)",
                boxShadow: "0 1px 6px rgba(0,0,0,0.04)",
                transition: "all 0.25s ease",
                "&:hover": { transform: "translateY(-2px)", background: "#fff" },
              }}
            >
              <Typography
                sx={{
                  color: "#3A3A3A",
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: "bold",
                  mb: 0.5,
                }}
              >
                {w.name}
              </Typography>
              <Typography sx={{ color: "#6B6B6B" }}>{w.wish}</Typography>
            </Paper>
          ))
        )}
      </Box>
    </Box>
  );
}
