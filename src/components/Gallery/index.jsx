import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";

import products from "images/products.png";
import graphicDesign from "images/graphicdesign.jpg";
import businessCards from "images/businesscards.png";
import buttonBadges from "images/buttonbadges.jpg";
import printing from "images/printing.jpg";
import webDesign from "images/webdesign.jpg";
import socialMedia from "images/socialmedia.png";
import menuDesign from "images/menudesign.jpg";
import heatTransfer from "images/heattransfer.jpg";

const images = [
  {
    url: products,
    title: "Marketing Products",
    width: "40%",
  },
  {
    url: graphicDesign,
    title: "graphic Design",
    width: "20%",
  },
  {
    url: businessCards,
    title: "Business Cards",
    width: "40%",
  },
  {
    url: buttonBadges,
    title: "Button Badges",
    width: "38%",
  },
  {
    url: printing,
    title: "Printing",
    width: "38%",
  },
  {
    url: webDesign,
    title: "Web Design",
    width: "24%",
  },
  {
    url: socialMedia,
    title: "Social Media",
    width: "40%",
  },
  {
    url: menuDesign,
    title: "Menu Design",
    width: "20%",
  },
  {
    url: heatTransfer,
    title: "Heat Transfer",
    width: "40%",
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 200,
  [theme.breakpoints.down("sm")]: {
    width: "100% !important", // Overrides inline-style
    height: 100,
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    "& .MuiTypography-root": {
      border: "4px solid currentColor",
    },
  },
}));

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
});

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.5,
  transition: theme.transitions.create("opacity"),
}));

const ImageMarked = styled("span")(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  bottom: -2,
  left: "calc(50% - 9px)",
  transition: theme.transitions.create("opacity"),
}));

function Gallery() {
  return (
    <div className="container-gallery">
      <h2>all our brands and services</h2>
      <span className="under-line"></span>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          minWidth: 300,
          width: "100%",
          marginTop: "64px",
        }}
      >
        {images.map((image) => (
          <ImageButton
            focusRipple
            key={image.title}
            style={{
              width: image.width,
              height: "40vh",
            }}
          >
            <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <Image>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                sx={{
                  position: "relative",
                  fontWeight: "700",
                  fontSize: "1.125rem",
                  textTransform: "uppercase",
                  p: 4,
                  pt: 2,
                  pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                }}
              >
                {image.title}
                <ImageMarked className="MuiImageMarked-root" />
              </Typography>
            </Image>
          </ImageButton>
        ))}
      </Box>
    </div>
  );
}

export default Gallery;
