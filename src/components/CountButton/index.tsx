import { CountButtonContainer } from '@components/CountButton/styles';
import { Minus, Plus } from 'phosphor-react';
import { useTheme } from 'styled-components';

export function CountButton() {
  const { pallete } = useTheme();

  return (
    <CountButtonContainer>
      <button>
        <Minus size={14} weight="bold" color={pallete['purple-500']} />
      </button>
      <span>1</span>
      <button>
        <Plus size={14} weight="bold" color={pallete['purple-500']} />
      </button>
    </CountButtonContainer>
  );
}
