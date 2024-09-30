"use client";

import React from "react";
import { Toaster } from "react-hot-toast";

const ToasterProvider = () => {
  return (
    <>
      {/* This needs to be called from a component so that it can use their hooks before rendering */}
      <Toaster />
    </>
  );
};

export default ToasterProvider;
