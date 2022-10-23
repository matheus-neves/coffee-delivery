import { useCoffeeCard } from '@components/CoffeeCard/context';
import { CoffeeCardPrice } from './styles';

export function Price() {
  const { formattedPrice } = useCoffeeCard();

  const [symbol, _, value] = formattedPrice.split(/(\s+)/);

  return (
    <CoffeeCardPrice>
      <div>
        <span>{symbol}</span>
        <strong>{value}</strong>
      </div>
    </CoffeeCardPrice>
  );
}
