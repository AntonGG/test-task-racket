import React from "react";
import preloaderSvg from "../../images/preloader.svg";
import { PreloaderContainer } from "./styles";
const Preloader = () => {
  return (
    <PreloaderContainer>
      <img src={preloaderSvg} alt="Preloader" />
    </PreloaderContainer>
  );
};

export default Preloader;
