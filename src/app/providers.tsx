"use client";

import { ThemeProvider } from "@emotion/react";
import theme from "@/themes/theme";
import React from "react";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Providers;
