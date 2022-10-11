import CoffeeImg from '@assets/coffees/american-espresso.png';
import {
  ActionsContainer,
  CartItemContainer,
  DeleteButton
} from '@components/CartItem/styles';
import { CountButton } from '@components/CountButton';
import { Trash } from 'phosphor-react';
import { useTheme } from 'styled-components';

export function CartItem() {
  const { pallete } = useTheme();

  return (
    <CartItemContainer>
      <img src={CoffeeImg} alt="" />
      <div>
        <h3>Expresso Tradicional</h3>
        <ActionsContainer>
          <CountButton />
          <DeleteButton>
            <Trash weight="regular" color={pallete['purple-500']} size={16} />
            <span>Remover</span>
          </DeleteButton>
        </ActionsContainer>
      </div>
      <strong>$100.90</strong>
    </CartItemContainer>
  );
}
