import { Box, Text, Button } from "@chakra-ui/react";

export default function ButtonApp({ variant, expression, onClick, icon }) {
  return (
    <Button variant={variant} key={`btn${expression}`} onClick={onClick}>
      {icon}
    </Button>
  );
}
