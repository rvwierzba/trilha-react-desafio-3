import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Feed } from "./pages/feed";
import { Home } from './pages/home';
import { Login } from './pages/login';
import { SignupScreen } from './pages/SignupScreen';  // Importação da nova tela de cadastro
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/signup" element={<SignupScreen />} />  {/* Nova rota de cadastro */}
      </Routes>
    </Router>
  );
}

export default App;
