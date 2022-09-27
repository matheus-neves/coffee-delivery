import { CartContainer } from '@src/components/CartLink/styles';
import { CartLinkProps } from '@src/components/CartLink/types';

export function CartLink({ ...props }: CartLinkProps) {
  return <CartContainer {...props} />;
}
