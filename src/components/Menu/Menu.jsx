import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { History } from '../History';
import { Valuta } from '../Valuta';
import { Convector } from '../Convector';
import { Calculator } from '../Calculator';

export function Menu() {
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
          <Calculator></Calculator>
        </TabPanel>
        <TabPanel h="100%">
          <Convector></Convector>
        </TabPanel>
        <TabPanel h="100%">
          <Valuta></Valuta>
        </TabPanel>
        <TabPanel h="100%">
          <History></History>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}