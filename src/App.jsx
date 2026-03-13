import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LandingV1 from './pages/LandingV1';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingV1 />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
