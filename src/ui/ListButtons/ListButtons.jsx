import { Button } from '@chakra-ui/react';

export const ListButtons = ({ array, onClick }) => {
  return array.map((item) => {
    return (
      <Button onClick={onClick} id={item.id} key={item.id}>
        {item.name}
      </Button>
    );
  });
};
