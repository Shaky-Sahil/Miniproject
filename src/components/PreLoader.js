import React, { useEffect } from "react";
import { preLoaderAnim } from "../animations";
import "./PreLoader.css"

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <div className="preloader">
      <div className="texts-container">
        <span>XPLORE,</span>
        <span>Discover,</span>
        <span>Live.</span>
      </div>
    </div>
  );
};

export default PreLoader;