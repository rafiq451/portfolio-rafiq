import { Route, Routes } from 'react-router-dom';
// boostrap
import 'bootstrap/dist/css/bootstrap.min.css';
// icons
import GlobalStyle from './css/GlobalStyle';
// multi crousel
import 'react-multi-carousel/lib/styles.css';
import Home from './Pages/Home';
import Layout from './Layout/Layout';
function App() {
  return (
    <>
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
