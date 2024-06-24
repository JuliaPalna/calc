import './App.css';
import { MenuPage } from '../src/pages/MenuPage';
import { HistoryProvider } from './context/historyContext';
import { PhysicalQuntityProvider } from './context/physicalQuantityContext';

function App() {
  return (
    <div className="App">
      <HistoryProvider>
        <PhysicalQuntityProvider>
          <MenuPage />
        </PhysicalQuntityProvider>
      </HistoryProvider>
    </div>
  );
}

export default App;
