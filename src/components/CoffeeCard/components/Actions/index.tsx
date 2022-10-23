import { CartLink } from '@src/components/CartLink';
import { CounterButton } from '@src/components/CounterButton';
import { useCartContext } from '@src/contexts/CartContext';
import { ShoppingCartSimple } from 'phosphor-react';
import { useCallback, useState } from 'react';
import { useTheme } from 'styled-components';
import { useCoffeeCard } from '../../context';
import { CoffeeCardActionsContainer } from './styles';

export function Actions() {
  const { pallete } = useTheme();
  const [counter, setCounter] = useState(1);

  const { title, price, src, id, formattedPrice } = useCoffeeCard();
  const { addItemToCart } = useCartContext();

  const handleDecreaseCounter = useCallback(() => {
    if (counter > 1) {
      setCounter(state => state - 1);
    }
  }, [counter]);

  const handleAddCounter = useCallback(() => {
    setCounter(state => state + 1);
  }, []);

  return (
    <CoffeeCardActionsContainer>
      <CounterButton
        counter={counter}
        onDecreaseCounter={handleDecreaseCounter}
        onAddCounter={handleAddCounter}
      />
      <CartLink
        to="/checkout"
        bgcolor={pallete['purple-700']}
        onClick={() =>
          addItemToCart({
            id,
            quantity: counter,
            title,
            src,
            price,
            formattedPrice
          })
        }
      >
        <ShoppingCartSimple
          weight="fill"
          color={pallete['gray-200']}
          size={22}
        />
      </CartLink>
    </CoffeeCardActionsContainer>
  );
}
