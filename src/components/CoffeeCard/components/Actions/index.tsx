import { CartLink } from '@src/components/CartLink';
import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react';
import { useTheme } from 'styled-components';
import { CoffeeCardActionsContainer } from './styles';

export function Actions() {
  const { pallete } = useTheme();

  return (
    <CoffeeCardActionsContainer>
      <div>
        <button>
          <Minus size={14} weight="bold" color={pallete['purple-500']} />
        </button>
        <span>1</span>
        <button>
          <Plus size={14} weight="bold" color={pallete['purple-500']} />
        </button>
      </div>
      <CartLink to={'#'} bgcolor={pallete['purple-700']}>
        <ShoppingCartSimple
          weight="fill"
          color={pallete['gray-200']}
          size={22}
        />
      </CartLink>
    </CoffeeCardActionsContainer>
  );
}
