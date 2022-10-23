import { useCoffeeCard } from '@components/CoffeeCard/context';
import { CoffeeCardHeader } from './styles';

export function Header() {
  const { tags, src } = useCoffeeCard();

  return (
    <CoffeeCardHeader>
      <img src={src} alt="" />
      <div>
        {tags?.map(tag => (
          <strong key={tag}>{tag}</strong>
        ))}
      </div>
    </CoffeeCardHeader>
  );
}
