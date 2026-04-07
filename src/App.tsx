import { Scene } from './components/canvas/Scene';
import { Navigation } from './components/html/Navigation';
import { LoadingScreen } from './components/html/LoadingScreen';
import { FloorIndicator } from './components/html/FloorIndicator';

function App() {
  return (
    <div className="w-full h-full">
      <LoadingScreen />
      <Scene />
      <Navigation />
      <FloorIndicator />
    </div>
  );
}

export default App;
