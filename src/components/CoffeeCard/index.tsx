import { Card } from './context';
import { CoffeeCardProps } from './types';

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
