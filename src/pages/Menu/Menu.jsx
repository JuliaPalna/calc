import { createContext, useState } from 'react';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { History } from '../History';
import { Valuta } from '../Valuta';
import { Convector } from '../Convector';
import { Calculator } from '../Calculator';

export const HistoryContext = createContext(null);

export function Menu() {
  const [history, setHistory] = useState([]);

  return (
    <HistoryContext.Provider value={{ history, setHistory }}>
      <Tabs h="100%" w={400} outline="1px solid red">
        <TabList h="5%">
          <Tab id="calculator">Calculator</Tab>
          <Tab id="convector">Convector</Tab>
          <Tab id="valuta">Valuta</Tab>
          <Tab id="history">History</Tab>
        </TabList>

        <TabPanels h="95%">
          <TabPanel h="100%">
            <Calculator></Calculator>
          </TabPanel>
          <TabPanel h="100%">
            <Convector></Convector>
          </TabPanel>
          <TabPanel h="100%">
            <Valuta></Valuta>
          </TabPanel>
          <TabPanel h="100%">
            <History history={history}></History>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </HistoryContext.Provider>
  );
}
