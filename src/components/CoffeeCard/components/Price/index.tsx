import { useCoffeeCard } from '../../context';
import { CoffeeCardPrice } from './styles';

export function Price() {
  const { price } = useCoffeeCard();

  return (
    <CoffeeCardPrice>
      U$ <strong>{price}</strong>
    </CoffeeCardPrice>
  );
}
