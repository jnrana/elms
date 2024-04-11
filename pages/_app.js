import "../styles/bootstrap.min.css";
import "../styles/animate.min.css";
import "../styles/boxicons.min.css";
import "../styles/meanmenu.min.css";
import "../styles/flaticon.css";
import "../node_modules/react-modal-video/css/modal-video.min.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "react-tabs/style/react-tabs.css";
import "react-image-lightbox/style.css";
import "swiper/css/bundle";
import "../styles/style.css";
import "../styles/responsive.css";

import Layout from "../components/_App/Layout";

import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://hjsmhuupbsquatkbnssn.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhqc21odXVwYnNxdWF0a2Juc3NuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE4MDE2MzAsImV4cCI6MjAyNzM3NzYzMH0.sjJfLG0OGzaFzFywI-eFt160YtDzuZSt2qsrg07cLsk"
);

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
