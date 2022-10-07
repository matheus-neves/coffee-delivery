import { CardRadioContainer } from '@components/CardRadio/styles';
import { CardRadioTypes } from '@components/CardRadio/types';

export function CardRadio({ value, id, name, label, Icon }: CardRadioTypes) {
  return (
    <CardRadioContainer htmlFor={id}>
      <input type="radio" name={name} id={id} value={value} />
      <div>
        {Icon}
        <span>{label}</span>
      </div>
    </CardRadioContainer>
  );
}
