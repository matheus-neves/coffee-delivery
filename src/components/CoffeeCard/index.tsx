import { CoffeeCardProps } from '@components/CoffeeCard/types';
import { Card } from './context';

export function CoffeeCard({ ...data }: CoffeeCardProps) {
  return (
    <Card data={data}>
      <Card.Header />
      <Card.Content />
      <Card.Footer>
        <Card.Price />
        <Card.Actions />
      </Card.Footer>
    </Card>
  );
}
