const colors = {
    primaryColor: 'var(--primary-color)',
    textColorDark: '#222B33',
    textColorLight: '#3B4752',
    borderColor: '#CFD8E1',
    backgroundLight: '#F9FAFB',
    errorColor: 'red',
    googleButtonBackground: '#F8FAFC',
    googleButtonText: '#1E293B',
    passwordEyeColor: '#6D7B88',
    signInButtonBackground: '#50F89A',
    signInButtonText: '#005237',
  };
  
  const fonts = {
    primaryFontFamily: 'var(--font-family-primary)',
    secondaryFontFamily: 'Public Sans',
  };
  
  export const RegistrationStyles = {
    LogoBox: {
      display: "flex",
      flexDirection: "column",
      justifyContent: { md: "start", xs: "center" },
      alignItems: { md: "start", xs: "center" },
    },
  
    title: {
      fontSize: "4rem", fontFamily: fonts.primaryFontFamily, color: colors.textColorDark, fontWeight: 600, textAlign: { md: "start", xs: "center" }, letterSpacing: "-0.06em", lineHeight: 0.95,
    },
  
    subTitle: {
      fontFamily: fonts.secondaryFontFamily, color: colors.textColorLight, fontSize: "1.1rem", textAlign: { md: "start", xs: "center" }, pt: "0.2rem", padding: "0.6rem 0rem", fontWeight: 300,
    },
  
    inputStyleHtmlTextField: {
      borderRadius: "0.1rem",
      border: `1px solid ${colors.borderColor}`,
      width: "95%",
      padding: "0.8rem 0.6rem",
      color: colors.textColorLight,
      background: colors.backgroundLight,
      fontFamily: fonts.secondaryFontFamily,
      margin: "0.2rem 0rem 0.2rem 0rem",
      '& input::placeholder': {
        color: colors.textColorLight,
        opacity: 1,
        paddingLeft: "1rem",
      },
    },
  
    fieldBox: {
      width: { md: "450px", sm: "430px", xs: "100%" },
    },
  
    buttonBox: {
      display: 'flex', justifyContent: 'center', flexDirection: "column",
    },
  
    buttonStyle: {
      background: colors.primaryColor, color: "#FFFFFF", textTransform: "none", fontFamily: fonts.primaryFontFamily, fontWeight: 600, fontSize: "1rem", marginTop: "1.2rem", padding: "0.5rem", borderRadius: "4px",
      '&:hover': {
        background: '',
        color: "",
      },
      width: "100%",
    },
  
    googleButton: {
      background: colors.googleButtonBackground, color: colors.googleButtonText,
      border: `1px solid ${colors.borderColor}`,
      display: "flex", gap: "1rem",
      '&:hover': {
        background: '',
        color: "",
      },
    },
  
    linkStyle: {
      color: "#000000", fontWeight: 500,
      textDecoration: "underline",
      fontSize: "1rem", fontFamily: fonts.secondaryFontFamily, cursor: "pointer",
    },
  
    linkBox: {
      display: 'flex', justifyContent: 'center', padding: "2rem 1rem", alignItems: "center", gap: "0.1rem",
    },
  
    linksContainerBox: {
      display: "flex", justifyContent: "space-between", gap: "0.5rem", marginTop: "0.5rem",
    },
  
    checkBoxStyle: {
      height: 24, width: 24, marginTop: "0.8rem", cursor: "pointer",
    },
  
    checkBoxTypo: {
      marginTop: "0.2rem", paddingTop: "0.6rem", color: colors.textColorDark, fontWeight: 360, textAlign: "left",
    },
  
    ForgetPasswordLinkTypo: { fontWeight: 500, paddingTop: "1rem" },
  
    requiredStyle: { display: "flex", alignItems: "center", textAlign: "start", color: colors.errorColor, whiteSpace: "wrap" },
  
    inputLableStyle: {
      color: colors.textColorDark, fontFamily: fonts.secondaryFontFamily, fontWeight: 500, fontSize: "1rem",
    },
  
    inputLableMargin: {
      marginTop: "0.5rem",
    },
  
    passwordEyeBox: {
      position: 'absolute',
      color: colors.passwordEyeColor,
      top: 38,
      right: 20,
      cursor: 'pointer',
      opacity: '50%',
      display: 'flex',
      alignItems: 'center',
    },
  
    homeBoxStyle: {
      padding: "2rem", display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: "center",
    },
  
    loginPageFormGrid: {
      padding: { sm: "2rem", xs: "1rem" },
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "start",
    },
  
    LogoImageBox: {
      margin: "1rem 0rem 3rem 0rem",
    },
  
    forgetPasswordTypo: {
      color: "#000000",
      fontWeight: 500,
      textDecoration: "underline",
    },
  
    signInButton: {
      border: "1px solid #00E687",
      background: colors.signInButtonBackground,
      color: colors.signInButtonText,
    },
  
    linkTypo: {
      color: colors.textColorDark,
      fontWeight: 360,
      fontFamily: fonts.secondaryFontFamily,
    },
  };
  