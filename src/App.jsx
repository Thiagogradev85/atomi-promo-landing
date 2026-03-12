import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LandingV1 from './pages/LandingV1';
import LandingV2 from './pages/LandingV2';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/v1" replace />} />
        <Route path="/v1" element={<LandingV1 />} />
        <Route path="/v2" element={<LandingV2 />} />
        <Route path="*" element={<Navigate to="/v1" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
