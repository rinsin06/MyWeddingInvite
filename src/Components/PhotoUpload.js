// src/Components/PhotoUpload.js
import React, { useState, useRef } from "react";
import { storage, db } from "../firebase";
import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { Box, Button, TextField, Typography, Paper } from "@mui/material";
import { motion } from "framer-motion";

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
      // const url = await getDownloadURL(sRef);

      // await addDoc(collection(db, "photos"), {
      //   name: name.trim(),
      //   url,
      //   createdAt: serverTimestamp(),
      // });

      alert("Photo uploaded!");
      setName("");
      setFile(null);
      if (inputRef.current) inputRef.current.value = "";
    } catch (err) {
      console.error("Upload error:", err);
      alert("Upload failed — check console for details.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <Paper
      elevation={6}
      sx={{
        p: 4,
        maxWidth: 450,
        mx: "auto",
        borderRadius: 3,
        background: "linear-gradient(145deg, #FFE4E1, #FFF0F5)",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h5"
        sx={{ mb: 3, fontWeight: 600, color: "#FF69B4" }}
      >
        Upload Your Photo 📸
      </Typography>

      <TextField
        label="Your Name"
        variant="outlined"
        fullWidth
        value={name}
        onChange={(e) => setName(e.target.value)}
        sx={{ mb: 3 }}
      />

      <Box sx={{ position: "relative", mb: 3 }}>
        <Button
          variant="contained"
          fullWidth
          sx={{
            py: 1.5,
            fontWeight: "bold",
            background: "linear-gradient(45deg, #FF69B4, #FFB6C1)",
            color: "white",
            borderRadius: 2,
            boxShadow: "0 4px 15px rgba(255,105,180,0.4)",
            "&:hover": { boxShadow: "0 6px 20px rgba(255,105,180,0.6)" },
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
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Typography sx={{ mb: 3 }}>{file.name}</Typography>
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
          background: "linear-gradient(45deg, #FFB6C1, #FF69B4)",
          color: "white",
          borderRadius: 2,
          boxShadow: "0 6px 20px rgba(255,105,180,0.5)",
          "&:hover": { boxShadow: "0 8px 25px rgba(255,105,180,0.7)" },
        }}
      >
        {uploading ? "Uploading..." : "Upload"}
      </Button>
    </Paper>
  );
}
