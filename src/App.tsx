import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import OnBoarding from './pages/Onboarding';
import SelectLocation from './pages/SelectLocation';
import JobStatus from './pages/JobStatus';
import Result from './pages/Result';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/onBoarding" element={<OnBoarding />} />
      <Route path="/onBoarding/location" element={<SelectLocation />} />
      <Route path="/onBoarding/status" element={<JobStatus />} />
      <Route path="/onBoarding/result" element={<Result />} />
    </Routes>
  );
}

export default App;
