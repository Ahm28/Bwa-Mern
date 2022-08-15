import 'assets/scss/style.scss';
import LandingPage from 'pages/LandingPage';
import { Route, Routes } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
