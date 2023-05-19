import localFont from "next/font/local";

const nohemi = localFont({
  src: [
    {
      path: "Nohemi-Black-BF6438cc565e67b.woff",
    },

    {
      path: "Nohemi-Bold-BF6438cc577b524.woff",
    },
    {
      path: "Nohemi-ExtraBold-BF6438cc5761ae2.woff",
    },
    {
      path: "Nohemi-ExtraLight-BF6438cc581502c.woff",
    },
    {
      path: "Nohemi-Light-BF6438cc5702321.woff",
    },
    {
      path: "Nohemi-Medium-BF6438cc57ddecd.woff",
    },
    {
      path: "Nohemi-Regular-BF6438cc579d934.woff",
    },
    {
      path: "Nohemi-SemiBold-BF6438cc57db2ff.woff",
    },
    {
      path: "Nohemi-Thin-BF6438cc57e2011.woff",
    },
  ],
  variable: "--font-nohemi",
});

export { nohemi };
