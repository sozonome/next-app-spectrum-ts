import React from "react";
import { Grid, View } from "@adobe/react-spectrum";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import { Meta } from "./Meta";

const Layout = ({ children }) => {
  return (
    <Grid areas={["header header", "sidebar content", "footer footer"]}>
      <Meta />

      <Header />

      <Sidebar />
      <View gridArea="content">{children}</View>

      <Footer />
    </Grid>
  );
};

export default Layout;
