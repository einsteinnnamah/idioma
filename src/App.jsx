import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import CreateAccount from './components/CreateAccount';
import Login from './components/Login';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/signup" element={<CreateAccount />} />
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Navigate to="/login" replace />} />
            </Routes>
        </Router>
    );
}

export default App; 