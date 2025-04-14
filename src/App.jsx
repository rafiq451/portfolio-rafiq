import { Route, Routes } from 'react-router-dom';
// boostrap
import 'bootstrap/dist/css/bootstrap.min.css';
// icons
import GlobalStyle from './css/GlobalStyle';
// multi crousel
import 'react-multi-carousel/lib/styles.css';
import Home from './Pages/Home';
import Layout from './Layout/Layout';
import { Helmet } from 'react-helmet';
function App() {
  return (
    <>
      <Helmet>
        <title>Portfolio muhammad Rafiq - Frontend Developer</title>
        <meta name="description" content="Portfolio Muhammad Rafiq, seorang Frontend Developer berpengalaman di React.js dan UI/UX." />
        <meta name="keywords" content="Portfolio Rafiq, Frontend Developer, React.js Developer, UI UX Designer" />
        <link rel="canonical" href="https://portfolio-rafiq.vercel.app" />
      </Helmet>
      <GlobalStyle />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
