import localFont from "next/font/local";

const nohemi = localFont({
  src: [
    {
      path: "../../public/assets/font/Nohemi-Black-BF6438cc565e67b.woff",
    },

    {
      path: "../../public/assets/font/Nohemi-Bold-BF6438cc577b524.woff",
    },
    {
      path: "../../public/assets/font/Nohemi-ExtraBold-BF6438cc5761ae2.woff",
    },
    {
      path: "../../public/assets/font/Nohemi-ExtraLight-BF6438cc581502c.woff",
    },
    {
      path: "../../public/assets/font/Nohemi-Light-BF6438cc5702321.woff",
    },
    {
      path: "../../public/assets/font/Nohemi-Medium-BF6438cc57ddecd.woff",
    },
    {
      path: "../../public/assets/font/Nohemi-Regular-BF6438cc579d934.woff",
    },
    {
      path: "../../public/assets/font/Nohemi-SemiBold-BF6438cc57db2ff.woff",
    },
    {
      path: "../../public/assets/font/Nohemi-Thin-BF6438cc57e2011.woff",
    },
  ],
  variable: "--font-nohemi",
});

export { nohemi };
