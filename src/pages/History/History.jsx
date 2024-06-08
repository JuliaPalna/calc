import { List } from '@chakra-ui/react';
import { ExpressionView } from '../../ui/ExpressionView';

export function History({ history }) {
  return (
    <List>
      {history.map((item) => {
        console.log(item.counting);
        return (
          <ExpressionView
            expressionUp={item.counting}
            expressionDown={item.result}
          ></ExpressionView>
        );
      })}
    </List>
  );
}
