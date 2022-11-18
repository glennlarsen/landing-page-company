import Head from "components/Head";
import Layout from "components/Layout";
import Hero from "components/Hero";
import Services from "components/Services";
import Gallery from "components/Gallery";
import About from "components/About";
import Subscribe from "components/Subscribe";
import Footer from "components/Footer";

function index() {
  return (
    <>
      <Head page="Home" description="This is a landing page for a company" />
      <Layout>
        <Hero />
        <Services />
        <Gallery />
        <About />
        <Subscribe />
        <Footer />
      </Layout>
    </>
  );
}

export default index;
