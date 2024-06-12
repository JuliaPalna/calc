import './App.css';
import { MenuPage } from '../src/pages/MenuPage';
import { HistoryProvider } from './context/historyContext';

function App() {
  return (
    <div className="App">
      <HistoryProvider>
        <MenuPage />
      </HistoryProvider>
    </div>
  );
}

export default App;
