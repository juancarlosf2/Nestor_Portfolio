import React from "react";
import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
        @font-face {
            font-family: 'Morganite';
            font-style: normal;
            font-display: swap;
            font-weight: 500;
            src: "../assets/fonts/Morganite-Medium.ttf"
        }
        @font-face {
            font-family: 'Morganite';
            font-style: normal;
            font-display: swap;
            font-weight: 600;
            src: "../assets/fonts/Morganite-SemiBold.ttf"
        }
        @font-face {
            font-family: 'Morganite';
            font-style: normal;
            font-display: swap;
            font-weight: 700;
            src: "../assets/fonts/Morganite-Bold.ttf"
        }
        @font-face {
            font-family: 'Karla', sans-serif;
            font-style: normal;
            font-display: swap;
            font-weight: 400;
            src: "../assets/fonts/Karla-Regular.ttf";
            unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
        }
        @font-face {
            font-family: 'Poppins', sans-serif;
            font-style: normal;
            font-display: swap;
            font-weight: 400;
            src: @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
       `}
  />
);

export default Fonts;
