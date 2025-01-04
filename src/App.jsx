import './App.css';
import { HistoryProvider } from './context/historyContext';
import { PhysicalQuntityProvider } from './context/physicalQuantityContext';
import { AppPage } from './pages/AppPage';

function App() {
  return (
    <div className="App">
      <HistoryProvider>
        <PhysicalQuntityProvider>
          <AppPage />
        </PhysicalQuntityProvider>
      </HistoryProvider>
    </div>
  );
}

export default App;
