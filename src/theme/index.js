import { extendTheme } from '@chakra-ui/react';
import styles from './styles';
import { buttonTheme } from './components/ButtonTheme';
import { tabsTheme } from './components/TabsTheme';
import { inputTheme } from './components/InputTeme';
import { selectTheme } from './components/SelectTheme';
import { textTheme } from './components/TextTheme';

const overrides = {
  styles,
  components: {
    Button: buttonTheme,
    Tabs: tabsTheme,
    Input: inputTheme,
    Select: selectTheme,
    Text: textTheme,
  },
};

const theme = extendTheme(overrides);

export default theme;
