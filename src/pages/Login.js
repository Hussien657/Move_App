import React, { useState } from "react";
import InputField from "../components/InputField";
import ShowPasswordToggle from "../components/ShowPasswordToggle";
import ErrorMessage from "../components/ErrorMessage";
import { motion } from "framer-motion";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Invalid email format";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Login successful:", { email, password });
    }
  };

  return (
    <div style={styles.page}>
      <motion.div
        className="login-box"
        style={styles.loginBox}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-danger fw-bold text-center mb-4">🔒 Login</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <InputField
            label="Email Address:"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <ErrorMessage message={errors.email} />}

          <InputField
            label="Password:"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <ErrorMessage message={errors.password} />}

          <ShowPasswordToggle
            checked={showPassword}
            onChange={() => setShowPassword(!showPassword)}
          />

          <motion.button
            type="submit"
            className="btn btn-danger fw-semibold mt-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Login
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(to bottom, #0f0f0f, #1a1a1a)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontFamily: "Arial, sans-serif",
  },
  loginBox: {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "20px",
    padding: "30px",
    width: "100%",
    maxWidth: "400px",
    backdropFilter: "blur(10px)",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.6)",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
};

export default Login;




























// import React, { useState } from "react";
// import InputField from "../components/InputField";
// import ShowPasswordToggle from "../components/ShowPasswordToggle";
// import ErrorMessage from "../components/ErrorMessage";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [errors, setErrors] = useState({});

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     console.log(email); 

//     const newErrors = {};
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if (!email) {
//       newErrors.email = "Email is required";
//     } else if (!emailRegex.test(email)) {
//       newErrors.email = "Invalid email format";
//     }

//     if (!password) {
//       newErrors.password = "Password is required";
//     } else if (password.length < 8) {
//       newErrors.password = "Password must be at least 8 characters long";
//     }

//     setErrors(newErrors);

//     if (Object.keys(newErrors).length === 0) {
//       console.log("Login successful:", { email, password });
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit} style={styles.form}>
//         <InputField
//           label="Email Address:"
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         {errors.email && <ErrorMessage message={errors.email} />}

//         <InputField
//           label="Password:"
//           type={showPassword ? "text" : "password"}
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         {errors.password && <ErrorMessage message={errors.password} />}

//         <ShowPasswordToggle
//           checked={showPassword}
//           onChange={() => setShowPassword(!showPassword)}
//         />

//         <button onClick={(e) => handleSubmit(e) } type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     width: "300px",
//     margin: "50px auto",
//     padding: "20px",
//     border: "1px solid #ddd",
//     borderRadius: "10px",
//     backgroundColor: "#f9f9f9"
//   },
//   form: {
//     display: "flex",
//     flexDirection: "column",
//     gap: "15px",
//   },
// };

// export default Login;
