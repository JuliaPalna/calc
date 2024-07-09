import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { HistoryPage } from '../HistoryPage';
import { ValutaPage } from '../ValutaPage';
import { ConvectorPage } from '../ConvectorPage';
import { CalculatorPage } from '../CalculatorPage';

export const MenuPage = () => {
  return (
    <Tabs h="100%" w={400} outline="1px solid red">
      <TabList h="5%">
        <Tab id="calculator">Calculator</Tab>
        <Tab id="convector">Convector</Tab>
        <Tab id="valuta">Valuta</Tab>
        <Tab id="history">History</Tab>
      </TabList>

      <TabPanels h="95%">
        <TabPanel h="100%">
          <CalculatorPage />
        </TabPanel>
        <TabPanel h="100%">
          <ConvectorPage />
        </TabPanel>
        <TabPanel h="100%">
          <ValutaPage />
        </TabPanel>
        <TabPanel h="100%">
          <HistoryPage />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
