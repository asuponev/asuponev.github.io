export const themeSettings = (mode) => {
  return {
    palette: {
      mode,
      ...(mode === "dark"
        ? {
          primary: {
            default: "#FFFFFF",
            main: "#FFFFFF",
          },
          background: {
            default: "#121F33",
            paper: "#192B45",
            card: "#192B45",
            skills: "#192B45",
            header: "rgba(18, 31, 51, 0.8)",
          },
          link: {
            color: "#2F80ED",
          },
        }
        : {
          primary: {
            default: "#000000",
            main: "#000000",
            alt: "#192B45"
          },
          background: {
            default: "#FFFFFF",
            card: "#F2F8FF",
            skills: "#F2F2F2",
            header: "rgba(255, 255, 255, 0.8)",
            footer: "#F2F8FF"
          },
          link: {
            color: "#2F80ED",
          },
        }),
    }
  };
};