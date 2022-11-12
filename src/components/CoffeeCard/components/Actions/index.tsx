import { CounterButton } from '@src/components/CounterButton';
import { useCartContext } from '@src/contexts/CartContext';
import { ShoppingCartSimple, Spinner } from 'phosphor-react';
import { useCallback, useState } from 'react';
import { useTheme } from 'styled-components';
import { useCoffeeCard } from '../../context';
import { ActionButton, CoffeeCardActionsContainer } from './styles';

export function Actions() {
  const { pallete } = useTheme();
  const [counter, setCounter] = useState(1);

  const { title, price, src, id, formattedPrice } = useCoffeeCard();
  const { addItemToCart, loading } = useCartContext();

  const isLoading = loading.cartItem?.id === id;

  const handleDecreaseCounter = useCallback(() => {
    if (counter > 1) {
      setCounter(state => state - 1);
    }
  }, [counter]);

  const handleAddCounter = useCallback(() => {
    setCounter(state => state + 1);
  }, []);

  function handleAddItemToCart() {
    addItemToCart({
      id,
      quantity: counter,
      title,
      src,
      price,
      formattedPrice
    });

    setCounter(1);
  }

  return (
    <CoffeeCardActionsContainer>
      <CounterButton
        counter={counter}
        onDecreaseCounter={handleDecreaseCounter}
        onAddCounter={handleAddCounter}
      />
      <ActionButton onClick={handleAddItemToCart} disabled={isLoading}>
        {isLoading ? (
          <Spinner
            weight="bold"
            size={22}
            className="spinner"
            color={pallete['gray-200']}
          />
        ) : (
          <ShoppingCartSimple
            weight="fill"
            color={pallete['gray-200']}
            size={22}
          />
        )}
      </ActionButton>
    </CoffeeCardActionsContainer>
  );
}
