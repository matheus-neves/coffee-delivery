import { AddToCartSuccessProps } from '@components/Toast/AddToCartSuccess/types';

export function AddToCartSuccess({ quantity, title }: AddToCartSuccessProps) {
  return (
    <>
      <strong>{quantity}</strong> <strong>{title}</strong> added to cart
    </>
  );
}
