// src/Components/Wishes.js
import { Box, Button, Paper, Stack, TextField, Typography } from "@mui/material";
import { addDoc, collection, getDocs, serverTimestamp } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";

export default function Wishes() {
  const [name, setName] = useState("");
  const [wish, setWish] = useState("");
  const [wishes, setWishes] = useState([]);

  const loadWishes = async () => {
    const snapshot = await getDocs(collection(db, "wishes"));
    setWishes(snapshot.docs.map(doc => doc.data()));
  };

  useEffect(() => {
    loadWishes();
  }, []);

  const sendWish = async () => {
    if (!name.trim() || !wish.trim()) return;
    await addDoc(collection(db, "wishes"), {
      name: name.trim(),
      wish: wish.trim(),
      createdAt: serverTimestamp(),
    });
    setName("");
    setWish("");
    loadWishes();
  };

  return (
    <Box sx={{ maxWidth: 500, mx: "auto" }}>
      <Typography variant="h5" sx={{ mb: 3, fontWeight: 600, color: "#FF69B4" }}>
        Leave Your Wishes 💌
      </Typography>

      <Stack spacing={2}>
        <TextField
          label="Your Name"
          variant="outlined"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Your Wish"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          value={wish}
          onChange={(e) => setWish(e.target.value)}
        />
        <Button
          variant="contained"
          onClick={sendWish}
          sx={{
            py: 1.5,
            fontWeight: "bold",
            background: "linear-gradient(45deg, #FF69B4, #FFB6C1)",
            color: "white",
            borderRadius: 2,
            boxShadow: "0 6px 20px rgba(255,105,180,0.5)",
            "&:hover": { boxShadow: "0 8px 25px rgba(255,105,180,0.7)" },
          }}
        >
          Send Wish
        </Button>
      </Stack>

      <Box sx={{ mt: 4 }}>
        {wishes.map((w, i) => (
          <Paper
            key={i}
            elevation={3}
            sx={{
              p: 2,
              mb: 2,
              borderRadius: 2,
              background: "linear-gradient(145deg, #FFF0F5, #FFE4E1)",
            }}
          >
            <Typography fontWeight="bold">{w.name}:</Typography>
            <Typography>{w.wish}</Typography>
          </Paper>
        ))}
      </Box>
    </Box>
  );
}
