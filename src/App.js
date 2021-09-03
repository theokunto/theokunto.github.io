import { BottomNavigation } from './components/bottomNavigation';
import { WelcomePage } from './pages/welcomePages';
function App() {
  return (
    <div style={{display:'flex'}}>
      <WelcomePage/>
      <BottomNavigation/>
    </div>
  );
}

export default App;
