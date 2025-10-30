import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import {
    Alert,
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Snackbar,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import { onValue, push, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { db } from "../firebase"; // adjust path as needed

const StayVote = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [vote, setVote] = useState("");
  const [votes, setVotes] = useState({ yes: 0, no: 0 });
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const votesRef = ref(db, "stayVotes");
    onValue(votesRef, (snapshot) => {
      const data = snapshot.val() || {};
      const yesCount = Object.values(data).filter((v) => v.vote === "yes").length;
      const noCount = Object.values(data).filter((v) => v.vote === "no").length;
      setVotes({ yes: yesCount, no: noCount });
    });
  }, []);

  const handleSubmit = () => {
    if (!name || !vote) {
      setAlertMsg("Please enter your name and select an option 💬");
      setAlertOpen(true);
      return;
    }

    setSubmitting(true); // disable form
    const votesRef = ref(db, "stayVotes");
    push(votesRef, { name, vote });

    // Close dialog smoothly before showing alert
    setTimeout(() => {
      setOpen(false);
      setSubmitting(false);
      setName("");
      setVote("");

      // Custom message based on vote
      const message =
        vote === "yes"
          ? `Thank you, ${name}! 💛 We're thrilled you'll be staying with us at La Villa. Your presence will make it even more special!`
          : `Thank you, ${name}! We’re thrilled you’ll be there to celebrate with us — even if you’re not staying, your love and support mean everything!`;

      setTimeout(() => {
        setAlertMsg(message);
        setAlertOpen(true);
      }, 400); // delay the alert slightly for a smoother feel
    }, 400);
  };

  return (
    <Box
      sx={{
        textAlign: "center",
        mt: 8,
        mb: 4,
        p: 3,
        borderRadius: 4,
        background: "linear-gradient(180deg, #FFF9E5 0%, #FFF3D0 100%)",
        boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontFamily: "'Playfair Display', serif",
          fontWeight: 700,
          color: "#B8860B",
          mb: 2,
        }}
      >
        Stay With Us? 🌙
      </Typography>

      <Typography
        variant="body1"
        sx={{
          color: "#4B4B4B",
          mb: 3,
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        Let us know if you’ll be joining us at La Villa — it helps us plan your cozy stay! 💛
      </Typography>

      <Button
        variant="contained"
        startIcon={<ThumbUpAltIcon />}
        sx={{
          background: "linear-gradient(135deg, #EADCA6, #C9A74A)",
          color: "#3A3A3A",
          fontWeight: "bold",
          borderRadius: 3,
          px: 3,
          py: 1,
          textTransform: "none",
          fontFamily: "'Poppins', sans-serif",
          "&:hover": {
            background: "linear-gradient(135deg, #E6D28A, #B99732)",
          },
        }}
        onClick={() => setOpen(true)}
      >
        Will you be staying with us?
      </Button>

      {/* Dialog */}
      <Dialog
        open={open}
        onClose={() => !submitting && setOpen(false)}
        PaperProps={{
          sx: {
            borderRadius: 4,
            p: 2,
            backgroundColor: "#fff",
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
            opacity: submitting ? 0.8 : 1,
            pointerEvents: submitting ? "none" : "auto",
            transition: "all 0.3s ease",
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
          🌙 Confirm Your Stay
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
              disabled={submitting}
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

            <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
              <Button
                variant={vote === "yes" ? "contained" : "outlined"}
                onClick={() => setVote("yes")}
                disabled={submitting}
                sx={{
                  borderRadius: 3,
                  px: 3,
                  fontWeight: "bold",
                  background: vote === "yes" ? "linear-gradient(135deg, #EADCA6, #C9A74A)" : "transparent",
                  color: vote === "yes" ? "#3A3A3A" : "#B99732",
                  borderColor: "#C9A74A",
                  "&:hover": {
                    background: "linear-gradient(135deg, #E6D28A, #B99732)",
                  },
                }}
              >
                Yes 🌙
              </Button>
              <Button
                variant={vote === "no" ? "contained" : "outlined"}
                onClick={() => setVote("no")}
                disabled={submitting}
                sx={{
                  borderRadius: 3,
                  px: 3,
                  fontWeight: "bold",
                  background: vote === "no" ? "linear-gradient(135deg, #EADCA6, #C9A74A)" : "transparent",
                  color: vote === "no" ? "#3A3A3A" : "#B99732",
                  borderColor: "#C9A74A",
                  "&:hover": {
                    background: "linear-gradient(135deg, #E6D28A, #B99732)",
                  },
                }}
              >
                No ❌
              </Button>
            </Box>
          </Stack>
        </DialogContent>

        <DialogActions sx={{ pr: 3, pb: 2 }}>
          <Button
            onClick={() => setOpen(false)}
            disabled={submitting}
            sx={{ color: "#666", fontWeight: "bold" }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={handleSubmit}
            disabled={submitting}
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
            {submitting ? "Submitting..." : "Submit"}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Live Vote Summary */}
      <Box
        sx={{
          mt: 4,
          display: "flex",
          justifyContent: "center",
          gap: 4,
          color: "#6B5B3E",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        <Typography variant="body1">✅ Staying: {votes.yes}</Typography>
        <Typography variant="body1">🚫 Not Staying: {votes.no}</Typography>
      </Box>

      {/* Thank You Snackbar Alert */}
      <Snackbar
        open={alertOpen}
        autoHideDuration={4000}
        onClose={() => setAlertOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setAlertOpen(false)}
          severity="success"
          sx={{
            background: "linear-gradient(135deg, #FFF8E1, #FAF3D1, #FFF8E1)",
            color: "#6B5E2C",
            borderRadius: 3,
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 500,
            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
          }}
        >
          {alertMsg}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default StayVote;
