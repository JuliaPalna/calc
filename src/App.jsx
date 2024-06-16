import './App.css';
import { MenuPage } from '../src/pages/MenuPage';
import { HistoryProvider } from './context/historyContext';
import { UnitProvider } from './context/unitContext';

function App() {
  return (
    <div className="App">
      <HistoryProvider>
        <UnitProvider>
          <MenuPage />
        </UnitProvider>
      </HistoryProvider>
    </div>
  );
}

export default App;
