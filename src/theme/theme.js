export const themeSettings = (mode) => {
  return {
    palette: {
      mode,
      ...(mode === "dark"
        ? {
          primary: {
            main: "#1E70EB",
          },
          background: {
            default: "#121F33",
            alt: "#495D7A"
          },
        }
        : {
          primary: {
            main: "#1E70EB",
          },
          background: {
            default: "#FFFFFF",
            alt: "#F9F9F9"
          },
        }),
    }
  };
};