import {
  Actions,
  Container,
  Content,
  Footer,
  Header,
  Price
} from '@components/CoffeeCard/components';

import {
  CoffeeCardContextProps,
  CoffeeCardProviderProps
} from '@components/CoffeeCard/types';
import { createContext, useContext, useMemo } from 'react';

const CoffeeCardContext = createContext<CoffeeCardContextProps | undefined>(
  undefined
);

function Card({ children, data }: CoffeeCardProviderProps) {
  const { description, src, price, tags, title, id, formattedPrice } = data;

  const value = useMemo(
    () => ({
      id,
      description,
      src,
      price,
      tags,
      title,
      formattedPrice
    }),
    [description, id, price, src, tags, title, formattedPrice]
  );

  return (
    <CoffeeCardContext.Provider value={value}>
      <Container>{children}</Container>
    </CoffeeCardContext.Provider>
  );
}

export function useCoffeeCard() {
  const context = useContext(CoffeeCardContext);
  if (context === undefined) {
    throw new Error('useCoffeeCard must be used within a CoffeCardProvider');
  }
  return context;
}

Card.Header = Header;
Card.Content = Content;
Card.Footer = Footer;
Card.Price = Price;
Card.Actions = Actions;

export { Card };
