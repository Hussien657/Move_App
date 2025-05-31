import React, { useState } from "react";
import InputField from "../components/InputField";
import ShowPasswordToggle from "../components/ShowPasswordToggle";
import ErrorMessage from "../components/ErrorMessage";
import { motion } from "framer-motion";

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    username: "",
    password: "",
    confirmPassword: ""
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const usernameRegex = /^\S+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&^#]).{8,}$/;

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.name) {
      newErrors.name = "Name is required";
    }

    if (!formData.username) {
      newErrors.username = "Username is required";
    } else if (!usernameRegex.test(formData.username)) {
      newErrors.username = "Username should not contain spaces";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (!passwordRegex.test(formData.password)) {
      newErrors.password =
        "Password must be at least 8 characters and include uppercase, lowercase, number, and symbol";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Registration successful:", formData);
    }
  };

  return (
    <div style={styles.page}>
      <motion.div
        className="register-box"
        style={styles.registerBox}
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-danger fw-bold text-center mb-4">📝 Register</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <InputField
            label="Email Address:"
            type="email"
            value={formData.email}
            onChange={handleChange}
            name="email"
          />
          {errors.email && <ErrorMessage message={errors.email} />}

          <InputField
            label="Name:"
            type="text"
            value={formData.name}
            onChange={handleChange}
            name="name"
          />
          {errors.name && <ErrorMessage message={errors.name} />}

          <InputField
            label="Username:"
            type="text"
            value={formData.username}
            onChange={handleChange}
            name="username"
          />
          {errors.username && <ErrorMessage message={errors.username} />}

          <InputField
            label="Password:"
            type={showPassword ? "text" : "password"}
            value={formData.password}
            onChange={handleChange}
            name="password"
          />
          {errors.password && <ErrorMessage message={errors.password} />}

          <InputField
            label="Confirm Password:"
            type={showPassword ? "text" : "password"}
            value={formData.confirmPassword}
            onChange={handleChange}
            name="confirmPassword"
          />
          {errors.confirmPassword && (
            <ErrorMessage message={errors.confirmPassword} />
          )}

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
            Register
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(to bottom, #0d0d0d, #1c1c1c)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontFamily: "Arial, sans-serif",
  },
  registerBox: {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "20px",
    padding: "30px",
    width: "100%",
    maxWidth: "450px",
    backdropFilter: "blur(10px)",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.6)",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
};

export default Register;


























// import React, { useState } from "react";
// import InputField from "../components/InputField";
// import ShowPasswordToggle from "../components/ShowPasswordToggle";
// import ErrorMessage from "../components/ErrorMessage";

// const Register = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     name: "",
//     username: "",
//     password: "",
//     confirmPassword: ""
//   });

//   const [showPassword, setShowPassword] = useState(false);
//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const validate = () => {
//     const newErrors = {};
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const usernameRegex = /^\S+$/;
//     const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&^#]).{8,}$/;

//     if (!formData.email) {
//       newErrors.email = "Email is required";
//     } else if (!emailRegex.test(formData.email)) {
//       newErrors.email = "Invalid email format";
//     }

//     if (!formData.name) {
//       newErrors.name = "Name is required";
//     }

//     if (!formData.username) {
//       newErrors.username = "Username is required";
//     } else if (!usernameRegex.test(formData.username)) {
//       newErrors.username = "Username should not contain spaces";
//     }

//     if (!formData.password) {
//       newErrors.password = "Password is required";
//     } else if (!passwordRegex.test(formData.password)) {
//       newErrors.password =
//         "Password must be at least 8 characters long and include uppercase, lowercase, digit, and special character";
//     }

//     if (!formData.confirmPassword) {
//       newErrors.confirmPassword = "Please confirm your password";
//     } else if (formData.confirmPassword !== formData.password) {
//       newErrors.confirmPassword = "Passwords do not match";
//     }

//     return newErrors;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const validationErrors = validate();
//     setErrors(validationErrors);

//     if (Object.keys(validationErrors).length === 0) {
//       console.log("Registration successful:", formData);
      
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <h2>Register</h2>
//       <form onSubmit={handleSubmit} style={styles.form}>
//         <InputField
//           label="Email Address:"
//           type="email"
//           value={formData.email}
//           onChange={handleChange}
//           name="email"
//         />
//         {errors.email && <ErrorMessage message={errors.email} />}

//         <InputField
//           label="Name:"
//           type="text"
//           value={formData.name}
//           onChange={handleChange}
//           name="name"
//         />
//         {errors.name && <ErrorMessage message={errors.name} />}

//         <InputField
//           label="Username:"
//           type="text"
//           value={formData.username}
//           onChange={handleChange}
//           name="username"
//         />
//         {errors.username && <ErrorMessage message={errors.username} />}

//         <InputField
//           label="Password:"
//           type={showPassword ? "text" : "password"}
//           value={formData.password}
//           onChange={handleChange}
//           name="password"
//         />
//         {errors.password && <ErrorMessage message={errors.password} />}

//         <InputField
//           label="Confirm Password:"
//           type={showPassword ? "text" : "password"}
//           value={formData.confirmPassword}
//           onChange={handleChange}
//           name="confirmPassword"
//         />
//         {errors.confirmPassword && (
//           <ErrorMessage message={errors.confirmPassword} />
//         )}

//         <ShowPasswordToggle
//           checked={showPassword}
//           onChange={() => setShowPassword(!showPassword)}
//         />

//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     width: "350px",
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

// export default Register;
