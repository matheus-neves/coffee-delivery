import { useCoffeeCard } from '@components/CoffeeCard/context';
import { CoffeeCardHeader } from './styles';

export function Header() {
  const { tags, image } = useCoffeeCard();

  return (
    <CoffeeCardHeader>
      <img src={image} alt="" />
      <div>
        {tags?.map(tag => (
          <strong key={tag}>{tag}</strong>
        ))}
      </div>
    </CoffeeCardHeader>
  );
}
