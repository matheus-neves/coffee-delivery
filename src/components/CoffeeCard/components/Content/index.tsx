import { useCoffeeCard } from '../../context';
import { CoffeeCardContent } from './styles';

export function Content() {
  const { title, description } = useCoffeeCard();

  return (
    <CoffeeCardContent>
      <h3>{title}</h3>
      <p>{description}</p>
    </CoffeeCardContent>
  );
}
