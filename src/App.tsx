import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import OnBoarding from './pages/Onboarding';
import SelectLocation from './pages/SelectLocation';
import JobStatus from './pages/JobStatus';
import Result from './pages/Result';
import Chat from './pages/Chat';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/onBoarding" element={<OnBoarding />} />
      <Route path="/onBoarding/location" element={<SelectLocation />} />
      <Route path="/onBoarding/status" element={<JobStatus />} />
      <Route path="/onBoarding/result" element={<Result />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
  );
}

export default App;
