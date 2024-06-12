import { Button, Wrap, WrapItem } from '@chakra-ui/react';

export function ListButtons({ array, onClick }) {
  return (
    <Wrap>
      {array.map((item) => {
        return (
          <WrapItem flexGrow={1} key={item}>
            <Button size="xl" variant="listbtn" onClick={onClick}>
              {item}
            </Button>
          </WrapItem>
        );
      })}
    </Wrap>
  );
}
