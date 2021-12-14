import type { NextPage } from "next";
import dynamic from "next/dynamic";
import MyDocument from "./pdf/pdf_generator";

const PDFViewer = dynamic(() => import("./component/pdfviewer"), {
  ssr: false,
});

const Home: NextPage = () => {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <PDFViewer width="100%" height="800px">
          <MyDocument />
        </PDFViewer>
      </div>
    </div>
  );
};

export default Home;
