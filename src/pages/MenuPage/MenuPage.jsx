import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { HistoryPage } from '../HistoryPage';
import { ValutaPage } from '../ValutaPage';
import { ConvectorPage } from '../ConvectorPage';
import { CalculatorPage } from '../CalculatorPage';
import { IconUSD, IconCount, IconHistory, IconConv } from '../../ui/icon';

export const MenuPage = () => {
  return (
    <Tabs h="100%">
      <TabList h="8%">
        <Tab id="calculator">
          <IconCount />
        </Tab>
        <Tab id="convector">
          <IconConv />
        </Tab>
        <Tab id="valuta">
          <IconUSD />
        </Tab>
        <Tab id="history">
          <IconHistory />
        </Tab>
      </TabList>

      <TabPanels h="82%">
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
