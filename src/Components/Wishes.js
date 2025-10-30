import CloseIcon from "@mui/icons-material/Close";
import {
  Alert,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  Paper,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { onValue, push, ref, set } from "firebase/database";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import PhotoUpload from "./PhotoUpload"; // ✅ Import PhotoUpload component

export default function Wishes() {
  const [open, setOpen] = useState(false);
  const [photoOpen, setPhotoOpen] = useState(false); // ✅ Photo upload dialog
  const [name, setName] = useState("");
  const [wish, setWish] = useState("");
  const [wishes, setWishes] = useState([]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  // Fetch wishes from Firebase in real-time
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

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setName("");
    setWish("");
  };

  const handlePhotoOpen = () => setPhotoOpen(true);
  const handlePhotoClose = () => setPhotoOpen(false);

  const sendWish = async () => {
    if (!name.trim() || !wish.trim()) return;

    const wishesRef = ref(db, "wishes");
    const newWishRef = push(wishesRef);
    await set(newWishRef, {
      name: name.trim(),
      wish: wish.trim(),
      createdAt: Date.now(),
    });

    handleClose();
    setSnackbarOpen(true);
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
      {/* Add Wish & Share Memories Buttons */}
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        justifyContent="center"
        sx={{ mb: 4 }}
      >
        <Button
          variant="contained"
          onClick={handleOpen}
          sx={{
            py: 1.3,
            px: 4,
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
         Drop a Wish ✨
        </Button>

        <Button
          variant="contained"
          onClick={handlePhotoOpen}
          sx={{
            py: 1.3,
            px: 4,
            fontWeight: "bold",
            fontFamily: "'Poppins', sans-serif",
            background: "linear-gradient(135deg, #F3E9B5, #D4AF37)",
            color: "#3A3A3A",
            borderRadius: 3,
            boxShadow: "0 6px 20px rgba(201,167,74,0.25)",
            "&:hover": {
              background: "linear-gradient(135deg, #E6D28A, #B99732)",
              boxShadow: "0 8px 25px rgba(201,167,74,0.35)",
            },
          }}
        >
          Share Your Memories 📸
        </Button>
      </Stack>

      <Divider sx={{ my: 4 }} />

      {/* Display Wishes */}
      <Box
        sx={{
          textAlign: "left",
          px: 1,
          maxHeight: "400px",
          overflowY: "auto",
        }}
      >
        {wishes.length === 0 ? (
          <Typography sx={{ color: "#777", textAlign: "center",fontFamily: "'Great Vibes', cursive", }}>
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
                transition: "transform 0.2s ease",
                "&:hover": { transform: "translateY(-2px)" },
              }}
            >
              <Typography
                sx={{
                  color: "#3A3A3A",
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: "bold",
                  mb: 0.5,
                }}
              >
                {w.name}
              </Typography>
              <Typography sx={{ color: "#6B6B6B",fontFamily: "'Great Vibes', cursive", }}>{w.wish}</Typography>
            </Paper>
          ))
        )}
      </Box>

      {/* Wish Popup */}
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            borderRadius: 4,
            p: 2,
            backgroundColor: "#fff",
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          },
        }}
      >
        <DialogTitle
          sx={{
            fontFamily: "'Playfair Display', serif",
            color: "#B99732",
            fontWeight: 700,
          }}
        >
          💌 Send Your Wish
        </DialogTitle>

        <DialogContent
          sx={{
            mt: 1,
            overflow: "visible",
            position: "relative",
            zIndex: 2,
            pb: 2,
          }}
        >
          <Stack spacing={3} sx={{ pt: 1 }}>
            <TextField
              label="Your Name"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
              InputLabelProps={{
                sx: {
                  backgroundColor: "#fff",
                  px: 0.5,
                  zIndex: 5,
                },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 3,
                  background: "#fff",
                  "& fieldset": { borderColor: "#E0E0E0" },
                  "&:hover fieldset": { borderColor: "#C9A74A" },
                  "&.Mui-focused fieldset": { borderColor: "#C9A74A" },
                },
              }}
            />

            <TextField
              label="Your Wish"
              fullWidth
              multiline
              rows={3}
              value={wish}
              onChange={(e) => setWish(e.target.value)}
              InputLabelProps={{
                sx: {
                  backgroundColor: "#fff",
                  px: 0.5,
                  zIndex: 5,
                },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 3,
                  background: "#fff",
                  "& fieldset": { borderColor: "#E0E0E0" },
                  "&:hover fieldset": { borderColor: "#C9A74A" },
                  "&.Mui-focused fieldset": { borderColor: "#C9A74A" },
                },
              }}
            />
          </Stack>
        </DialogContent>

        <DialogActions sx={{ pr: 3, pb: 2 }}>
          <Button onClick={handleClose} sx={{ color: "#666", fontWeight: "bold" }}>
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={sendWish}
            sx={{
              background: "linear-gradient(135deg, #EADCA6, #C9A74A)",
              color: "#3A3A3A",
              fontWeight: "bold",
              borderRadius: 3,
              "&:hover": {
                background: "linear-gradient(135deg, #E6D28A, #B99732)",
              },
            }}
          >
            Send Wish
          </Button>
        </DialogActions>
      </Dialog>

      {/* ✅ Photo Upload Popup */}
      <Dialog
        open={photoOpen}
        onClose={handlePhotoClose}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 4,
            background: "white",
            boxShadow: "0 6px 30px rgba(0,0,0,0.15)",
            position: "relative",
          },
        }}
      >
        <IconButton
          aria-label="close"
          onClick={handlePhotoClose}
          sx={{
            position: "absolute",
            right: 12,
            top: 12,
            color: "#555",
            zIndex: 1,
          }}
        >
          <CloseIcon />
        </IconButton>

        <DialogContent sx={{ mt: 2, mb: 2 }}>
           <PhotoUpload onClose={handlePhotoClose} />
        </DialogContent>
      </Dialog>

      {/* ✅ Snackbar for Success */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={2500}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setSnackbarOpen(false)}
          severity="success"
          variant="filled"
          sx={{
            backgroundColor: "#C9A74A",
            color: "#fff",
            fontWeight: "bold",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          Wish added successfully! 🎉
        </Alert>
      </Snackbar>
    </Box>
  );
}
