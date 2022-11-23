import { formatNumber } from '@src/utils/formatNumber';
import { TotalLabel, TotalListContainer, TotalValue } from './styles';

export function TotalList({ totalCart }: { totalCart: number }) {
  const shipment = totalCart ? 10 : 0; // mock shipment

  const formattedShipment = formatNumber({
    value: shipment
  });

  const total = shipment + totalCart;

  const formattedTotalCart = formatNumber({
    value: totalCart
  });

  const formattedTotal = formatNumber({
    value: total
  });

  return (
    <TotalListContainer>
      <li>
        <TotalLabel>Total items</TotalLabel>
        <TotalValue>{formattedTotalCart}</TotalValue>
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
