import localFont from "next/font/local";
const nohemi = localFont({
  src: [
    {
      path: "./fonts/Nohemi-Black-BF6438cc565e67b.woff",
      weight: "900",
      style: "black",
    },

    {
      path: "./fonts/Nohemi-Bold-BF6438cc577b524.woff",
      weight: "700",
      style: "bold",
    },
    {
      path: "./fonts/Nohemi-ExtraBold-BF6438cc5761ae2.woff",
      weight: "800",
      style: "extrabold",
    },
    {
      path: "./fonts/Nohemi-ExtraLight-BF6438cc581502c.woff",
      weight: "200",
      style: "extralight",
    },
    {
      path: "./fonts/Nohemi-Light-BF6438cc5702321.woff",
      weight: "300",
      style: "light",
    },
    {
      path: "./fonts/Nohemi-Medium-BF6438cc57ddecd.woff",
      weight: "500",
      style: "medium",
    },
    {
      path: "./fonts/Nohemi-Regular-BF6438cc579d934.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Nohemi-SemiBold-BF6438cc57db2ff.woff",
      weight: "600",
      style: "black",
    },
    {
      path: "./fonts/Nohemi-Thin-BF6438cc57e2011.woff",
      weight: "100",
      style: "thin",
    },
  ],
  variable: "--font-nohemi",
});

export { nohemi };
