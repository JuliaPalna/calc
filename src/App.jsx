import './App.css';
import { HistoryProvider } from './context/historyContext';
import { PhysicalQuntityProvider } from './context/physicalQuantityContext';
import { AppCalculator } from './ui/AppCalculator/AppCalculator';

function App() {
  return (
    <div className="App">
      <HistoryProvider>
        <PhysicalQuntityProvider>
          <AppCalculator />
        </PhysicalQuntityProvider>
      </HistoryProvider>
    </div>
  );
}

export default App;
