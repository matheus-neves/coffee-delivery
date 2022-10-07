import { CartLink } from '@src/components/CartLink';
import { CountButton } from '@src/components/CountButton';
import { ShoppingCartSimple } from 'phosphor-react';
import { useTheme } from 'styled-components';
import { CoffeeCardActionsContainer } from './styles';

export function Actions() {
  const { pallete } = useTheme();

  return (
    <CoffeeCardActionsContainer>
      <CountButton />
      <CartLink to={'#'} bgcolor={pallete['purple-700']}>
        <ShoppingCartSimple
          weight="fill"
          color={pallete['gray-200']}
          size={22}
        />
      </CartLink>
    </CoffeeCardActionsContainer>
  );
}
