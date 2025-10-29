// src/Components/PhotoUpload.js
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { ref as storageRef, uploadBytes } from "firebase/storage";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { storage } from "../firebase";

export default function PhotoUpload() {
  const [file, setFile] = useState(null);
  const [name, setName] = useState("");
  const [uploading, setUploading] = useState(false);
  const inputRef = useRef(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0] ?? null);
  };

  const uploadPhoto = async () => {
    if (!file || !name.trim()) {
      alert("Please enter your name and choose a file.");
      return;
    }

    setUploading(true);
    try {
      const uniqueName = `${Date.now()}_${file.name.replace(/\s+/g, "_")}`;
      const sRef = storageRef(storage, `photos/${uniqueName}`);
      await uploadBytes(sRef, file);

      alert("Photo uploaded successfully!");
      setName("");
      setFile(null);
      if (inputRef.current) inputRef.current.value = "";
    } catch (err) {
      console.error("Upload error:", err);
      alert("Upload failed — please check console for details.");
    } finally {
      setUploading(false);
    }
  };

  return (
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
          fontFamily: "'Playfair Display', serif",
        }}
      >
        Upload Your Photo 📸
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
          Choose File
        </Button>
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
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

      {file && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Typography sx={{ mb: 3, color: "#555" }}>{file.name}</Typography>
        </motion.div>
      )}

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
  );
}
