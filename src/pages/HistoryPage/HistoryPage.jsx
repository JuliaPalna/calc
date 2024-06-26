import { List, ListItem } from '@chakra-ui/react';
import { ExpressionView } from '../../ui/ExpressionView';
import { useHistory } from '../../context/historyContext';

export function HistoryPage() {
  const { history } = useHistory();

  return (
    <List minH={500} maxH={500}>
      {history.map((item) => {
        return (
          <ListItem key={item.result}>
            <ExpressionView
              expressionUp={item.counting}
              expressionDown={item.result}
            />
          </ListItem>
        );
      })}
    </List>
  );
}
