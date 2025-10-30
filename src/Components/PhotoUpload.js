import { Alert, Box, Button, LinearProgress, Paper, Snackbar, TextField, Typography } from "@mui/material";
import { ref as storageRef, uploadBytes } from "firebase/storage";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { storage } from "../firebase";

export default function PhotoUpload({onClose}) {
  const [files, setFiles] = useState([]);
  const [name, setName] = useState("");
  const [uploading, setUploading] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const inputRef = useRef(null);

  const handleFileChange = (e) => {
    setFiles([...e.target.files]); // store multiple files
  };

  const uploadPhoto = async () => {
    if (files.length === 0 || !name.trim()) {
      alert("Please enter your name and choose one or more photos.");
      return;
    }

    setUploading(true);
    try {
      // Upload each file
      const uploadPromises = files.map((file) => {
        const uniqueName = `${Date.now()}_${file.name.replace(/\s+/g, "_")}`;
        const sRef = storageRef(storage, `photos/${uniqueName}`);
        return uploadBytes(sRef, file);
      });

      await Promise.all(uploadPromises);

      // Show success message
      setSuccessOpen(true);
      
      // Reset fields
      setName("");
      setFiles([]);
      if (inputRef.current) inputRef.current.value = "";
    } catch (err) {
      console.error("Upload error:", err);
      alert("Upload failed — please check console for details.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <>
      <Paper
        elevation={8}
        sx={{
          p: 4,
          maxWidth: 480,
          mx: "auto",
          borderRadius: 4,
          background: "linear-gradient(145deg, #FFFFFF, #F8F8F8)",
          textAlign: "center",
          boxShadow: "0 4px 30px rgba(0,0,0,0.08)",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            mb: 3,
            fontWeight: 600,
            color: "#2F3A56",
           fontFamily: "'Great Vibes', cursive",
          }}
        >
          Upload Your Photos 📸
        </Typography>

        <TextField
          label="Your Name"
          variant="outlined"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{
            mb: 3,
            "& .MuiOutlinedInput-root": {
              borderRadius: 3,
              backgroundColor: "white",
            },
          }}
        />

        <Box sx={{ position: "relative", mb: 3 }}>
          <Button
            variant="contained"
            fullWidth
            sx={{
              py: 1.5,
              fontWeight: "bold",
              borderRadius: 3,
              background: "linear-gradient(45deg, #EDEDED, #D4AF37)",
              color: "#1C1C1E",
              boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
              "&:hover": {
                background: "linear-gradient(45deg, #D4AF37, #EDEDED)",
                boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
              },
            }}
          >
            Choose Files
          </Button>
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            multiple
            onChange={handleFileChange}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              opacity: 0,
              cursor: "pointer",
            }}
          />
        </Box>

        {files.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Typography sx={{ mb: 1, color: "#555", fontWeight: 500 }}>
              Selected Photos:
            </Typography>
            {files.map((file, index) => (
              <Typography
                key={index}
                sx={{
                  fontSize: "0.9rem",
                  color: "#777",
                  mb: 0.5,
                  wordBreak: "break-all",
                }}
              >
                • {file.name}
              </Typography>
            ))}
          </motion.div>
        )}

        {uploading && <LinearProgress sx={{ mt: 2, mb: 2, borderRadius: 2 }} />}

        <Button
          variant="contained"
          onClick={uploadPhoto}
          disabled={uploading}
          fullWidth
          sx={{
            py: 1.5,
            fontWeight: "bold",
            borderRadius: 3,
            background: "linear-gradient(45deg, #D4AF37, #B8860B)",
            color: "white",
            boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
            "&:hover": {
              background: "linear-gradient(45deg, #B8860B, #D4AF37)",
              boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
            },
          }}
        >
          {uploading ? "Uploading..." : "Upload"}
        </Button>
      </Paper>

      {/* Success Snackbar */}
      <Snackbar
        open={successOpen}
        autoHideDuration={3000}
        onClose={() => setSuccessOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setSuccessOpen(false)}
          severity="success"
          sx={{
            width: "100%",
            fontWeight: "bold",
            borderRadius: "12px",
            background: "linear-gradient(45deg, #F9E79F, #D4AF37)",
            color: "#2F2F2F",
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          }}
        >
          🌸 Your photos have been uploaded successfully!
        </Alert>
      </Snackbar>
    </>
  );
}
