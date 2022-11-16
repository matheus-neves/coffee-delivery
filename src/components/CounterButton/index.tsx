import { CountButtonContainer } from '@src/components/CounterButton/styles';
import { CountButtonProps } from '@src/components/CounterButton/types';
import { Minus, Plus } from 'phosphor-react';
import { useTheme } from 'styled-components';

export function CounterButton({
  counter,
  onAddCounter,
  onDecreaseCounter
}: CountButtonProps) {
  const { pallete } = useTheme();

  return (
    <CountButtonContainer>
      <button type="button" onClick={onDecreaseCounter}>
        <Minus size={14} weight="bold" color={pallete['purple-500']} />
      </button>
      <span>{counter}</span>
      <button type="button" onClick={onAddCounter}>
        <Plus size={14} weight="bold" color={pallete['purple-500']} />
      </button>
    </CountButtonContainer>
  );
}
