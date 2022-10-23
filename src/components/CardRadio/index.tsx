import { CardRadioContainer } from '@components/CardRadio/styles';
import { CardRadioTypes } from '@components/CardRadio/types';

export function CardRadio({
  value,
  id,
  name,
  label,
  Icon,
  register
}: CardRadioTypes) {
  return (
    <CardRadioContainer htmlFor={id}>
      <input type="radio" id={id} value={value} {...register(name)} />
      <div>
        {Icon}
        <span>{label}</span>
      </div>
    </CardRadioContainer>
  );
}
