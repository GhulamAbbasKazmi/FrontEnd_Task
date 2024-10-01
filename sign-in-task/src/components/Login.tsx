import { useContext, useState } from "react";
import { Button, Typography, Alert,Box,InputLabel,} from "@mui/material";
import Grid from "@mui/material/Grid2";
import SignInImage from "../assets/SignInScreenImage.svg";
import Logo from "../assets/Logo.svg";
import { useFormik } from "formik";
import { RegistrationStyles } from "../components/Ui/Styles";
import Google from "../assets/google.svg";
import * as Yup from "yup";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const Login = () => {
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("AuthContext must be used within an AuthProvider");
  }

  const { login } = context;
  const [error, setError] = useState("");

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Username is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: async (values) => {
      try {
        await login(values.username, values.password);
        navigate("/home"); // Redirect to Home on successful login
      } catch (err) {
        setError("Invalid username or password");
      }
    },
  });

  return (
    <>
      <Grid container sx={{ height: "100vh" }}>
        <Grid
          size={{ xs: 12, sm: 12, md: 12, lg: 5 }}
          sx={RegistrationStyles.loginPageFormGrid}
        >
          <Box sx={{ ...RegistrationStyles.fieldBox, ...RegistrationStyles.LogoBox}}>
            <Box sx={RegistrationStyles.LogoImageBox}>
              <img src={Logo} alt="" />
            </Box>
            <Typography sx={RegistrationStyles.title}>
              Welcome <br /> back
            </Typography>
            <Typography sx={RegistrationStyles.subTitle}>
              You need to be signed in to access the project <br /> dashboard.
            </Typography>
          </Box>
          <form onSubmit={formik.handleSubmit} style={{ marginTop: "0rem" }}>
            <Box sx={RegistrationStyles.fieldBox}>
              <InputLabel
                sx={{
                  ...RegistrationStyles.inputLableStyle,
                  ...RegistrationStyles.inputLableMargin,
                }}
              >
                Email or username
              </InputLabel>  

              <div style={{ position: "relative" }}>
                <input
                className="placeholder-style"
                  style={RegistrationStyles.inputStyleHtmlTextField}
                  id="username"
                  placeholder="wesley.mendoza@example.com"
                  name="username"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur} // Call this to mark the field as touched
                />
                {formik.touched.username && formik.errors.username && (
                  <div style={{ color: "red", fontSize: "0.8rem" }}>
                    {formik.errors.username} {/* Display the error message */}
                  </div>
                )}
              </div>
            </Box>
            <Box sx={{ ...RegistrationStyles.fieldBox, position: "relative" }}>
              <InputLabel
                sx={{
                  ...RegistrationStyles.inputLableStyle,
                  ...RegistrationStyles.inputLableMargin,
                }}
              >
                Password
              </InputLabel>
    

              <div style={{ position: "relative" }}>
                <input
                className="placeholder-style"
                  style={{
                    ...RegistrationStyles.inputStyleHtmlTextField,
                    borderColor:
                      formik.touched.password && formik.errors.password
                        ? "red"
                        : undefined, // Change border color on error
                  }}
                  id="password"
                  name="password"
                  type={passwordVisible ? "text" : "password"}
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur} // Mark the field as touched
                  placeholder="Enter your password" // Placeholder for better UX
                />
                {formik.touched.password && formik.errors.password && (
                  <div style={{ color: "red", fontSize: "0.8rem" }}>
                    {formik.errors.password} {/* Display the error message */}
                  </div>
                )}
              </div>

              <Box
                sx={RegistrationStyles.passwordEyeBox}
                onClick={togglePasswordVisibility}
              >
                {passwordVisible ? <VisibilityOff /> : <Visibility />}
              </Box>
            </Box>
            {error && (
              <Alert severity="error" style={{ paddingTop: "10px" }}>
                {error}
              </Alert>
            )}

            <Box sx={RegistrationStyles.linksContainerBox}>
              <Box sx={{ display: "flex" }}>
              <input type="checkbox" id="myCheckbox" name="myCheckbox" style={RegistrationStyles.checkBoxStyle} />
                <Typography
                  sx={{...RegistrationStyles.subTitle,...RegistrationStyles.checkBoxTypo, paddingLeft:"0.5rem"}}>
                  Keep me signed in
                </Typography>
              </Box>

              <Typography
                sx={{...RegistrationStyles.subTitle, ...RegistrationStyles.checkBoxTypo,
                 ...RegistrationStyles.forgetPasswordTypo  }}>
                Forgot password?
              </Typography>
            </Box>

            <Box sx={RegistrationStyles.buttonBox}>
              <Button
                sx={{
                  ...RegistrationStyles.buttonStyle,
                 ...RegistrationStyles.signInButton
                }}
                type="submit"
              >
                Sign in
              </Button>
              <Button
                sx={{
                  ...RegistrationStyles.buttonStyle,
                  ...RegistrationStyles.googleButton,
                }}
              >
                <img src={Google} alt="Google" />
                Sign in with Google
              </Button>
            </Box>
            <Box sx={RegistrationStyles.linkBox}>
              <Typography
                sx={{
                  ...RegistrationStyles.subTitle,
                  ...RegistrationStyles.linkTypo,
                }}
              >
                Haven’t joined yet?
              </Typography>
              <Typography sx={RegistrationStyles.linkStyle}>
                {" "}
                Sign in
              </Typography>
            </Box>
          </form>
        </Grid>
        <Grid size={{ sm: 12, md: 12, lg: 7 }} sx={{ display: { sm: "flex", xs: "none" } }}
        >
          <img
            src={SignInImage}
            alt="SignInImage"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
