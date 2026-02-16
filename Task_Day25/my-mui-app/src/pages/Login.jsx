import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  useTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Login() {
  const navigate = useNavigate();
  const theme = useTheme(); 

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email === "shiva9996@gmail.com" && password === "shiva9996") {
      localStorage.setItem("isAuth", "true");
      navigate("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "background.default", 
      }}
    >
      <Paper
        component={motion.div}
        whileHover={{ scale: 1.02 }}
        elevation={6}
        sx={{
          p: 5,
          width: 380,
          bgcolor: "background.paper",
          borderRadius: 3,
        }}
      >
        <Typography
          variant="h4"
          textAlign="center"
          gutterBottom
          color="primary"
        >
          Welcome Back
        </Typography>

        <Typography
          variant="body2"
          textAlign="center"
          mb={0}
          color="text.secondary"
        >
          Please login to continue
        </Typography>

        <Typography
          variant="body2"
          textAlign="center"
          mb={0}
          color="text.secondary"
        >
          shiva9996@gmail.com
        </Typography>

         <Typography
          variant="body2"
          textAlign="center"
          mb={3}
          color="text.secondary"
        >
  shiva9996
        </Typography>

        <TextField
          fullWidth
          label="Email Address"
          margin="normal"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          fullWidth
          type="password"
          label="Password"
          margin="normal"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          fullWidth
          variant="contained"
          size="large"
          sx={{ mt: 3, py: 1.2 }}
          component={motion.button}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          onClick={handleLogin}
        >
          Login
        </Button>
      </Paper>
    </Box>
  );
}

export default Login;
