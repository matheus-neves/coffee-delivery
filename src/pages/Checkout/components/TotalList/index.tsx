import { useCartContext } from '@src/contexts/CartContext';
import { formatNumber } from '@src/utils/formatNumber';
import { TotalLabel, TotalListContainer, TotalValue } from './styles';

export function TotalList() {
  const { totalPriceItems, shipment, total } = useCartContext();

  const formattedShipment = formatNumber({
    value: shipment
  });

  const formattedTotalPriceItems = formatNumber({
    value: totalPriceItems
  });

  const formattedTotal = formatNumber({
    value: total
  });

  return (
    <TotalListContainer>
      <li>
        <TotalLabel>Total items</TotalLabel>
        <TotalValue>{formattedTotalPriceItems}</TotalValue>
      </li>
      <li>
        <TotalLabel>Shipment</TotalLabel>
        <TotalValue>{formattedShipment}</TotalValue>
      </li>
      <li>
        <strong>Total</strong>
        <strong>{formattedTotal}</strong>
      </li>
    </TotalListContainer>
  );
}
