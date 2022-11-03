import {
  ActionsContainer,
  CartItemContainer,
  DeleteButton
} from '@components/CartItem/styles';
import { CartItemProps } from '@components/CartItem/types';
import { CounterButton } from '@src/components/CounterButton';
import { useCartContext } from '@src/contexts/CartContext';
import { Trash } from 'phosphor-react';
import { useTheme } from 'styled-components';

export function CartItem({ quantity, src, title, price, id }: CartItemProps) {
  const { pallete } = useTheme();

  const { increaseItemQuantity, decreaseItemQuantity, removeItemFromCart } =
    useCartContext();

  return (
    <CartItemContainer>
      <img src={src} alt={title} />
      <div>
        <h3>{title}</h3>
        <ActionsContainer>
          <CounterButton
            counter={quantity}
            onAddCounter={() => increaseItemQuantity(id)}
            onDecreaseCounter={() => decreaseItemQuantity(id)}
          />
          <DeleteButton onClick={() => removeItemFromCart(id)}>
            <Trash weight="regular" color={pallete['purple-500']} size={16} />
            <span>Remover</span>
          </DeleteButton>
        </ActionsContainer>
      </div>
      <strong>{price}</strong>
    </CartItemContainer>
  );
}
