import localFont from "next/font/local";
const nohemi = localFont({
  src: [
    {
      path: "../app/fonts/Nohemi-Black-BF6438cc565e67b.woff",
    },

    {
      path: "../app/fonts/Nohemi-Bold-BF6438cc577b524.woff",
    },
    {
      path: "../app/fonts/Nohemi-ExtraBold-BF6438cc5761ae2.woff",
    },
    {
      path: "../app/fonts/Nohemi-ExtraLight-BF6438cc581502c.woff",
    },
    {
      path: "../app/fonts/Nohemi-Light-BF6438cc5702321.woff",
    },
    {
      path: "../app/fonts/Nohemi-Medium-BF6438cc57ddecd.woff",
    },
    {
      path: "../app/fonts/Nohemi-Regular-BF6438cc579d934.woff",
    },
    {
      path: "../app/fonts/Nohemi-SemiBold-BF6438cc57db2ff.woff",
    },
    {
      path: "../app/fonts/Nohemi-Thin-BF6438cc57e2011.woff",
    },
  ],
  variable: "--font-nohemi",
});

export { nohemi };
