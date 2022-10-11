import {
  BoxSelectCard,
  CartList,
  CheckoutContainerForm,
  Divider,
  Form,
  Paper,
  PaperHeader,
  TotalLabel,
  TotalList,
  TotalValue
} from '@pages/Checkout/styles';
import { CardRadio } from '@src/components/CardRadio';
import { CartItem } from '@src/components/CartItem';
import { CustomInput } from '@src/components/CustomInput';
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money
} from 'phosphor-react';
import { useTheme } from 'styled-components';

export function Checkout() {
  const { pallete } = useTheme();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(e.target.payment.value);
  };

  return (
    <CheckoutContainerForm onSubmit={handleSubmit}>
      <section>
        <h2>Complete seu pedido</h2>
        <Paper>
          <PaperHeader>
            <MapPinLine
              weight="regular"
              color={pallete['yellow-700']}
              size={22}
            />
            <div>
              <h3>Endereço de entrega</h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </PaperHeader>
          <Form>
            <CustomInput placeholder="CEP" />
            <CustomInput placeholder="Rua" />
            <div>
              <CustomInput placeholder="Número" />
              <CustomInput placeholder="Complemento" optional maxwidth={34.8} />
            </div>
            <div>
              <CustomInput placeholder="Bairro" />
              <CustomInput placeholder="Cidade" maxwidth={27.6} />
              <CustomInput placeholder="UF" maxwidth={6} />
            </div>
          </Form>
        </Paper>

        <Paper>
          <div>
            <PaperHeader>
              <CurrencyDollar
                weight="regular"
                color={pallete['purple-500']}
                size={22}
              />
              <div>
                <h3>Pagamento</h3>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </PaperHeader>

            <BoxSelectCard>
              <CardRadio
                label="Credit card"
                id="payment-credit"
                name="payment"
                value="payment-credit"
                Icon={
                  <CreditCard
                    weight="regular"
                    color={pallete['purple-500']}
                    size={16}
                  />
                }
              />
              <CardRadio
                label="Debit card"
                id="payment-debit"
                name="payment"
                value="payment-debit"
                Icon={
                  <Bank
                    weight="regular"
                    color={pallete['purple-500']}
                    size={16}
                  />
                }
              />
              <CardRadio
                label="Cash"
                id="payment-cash"
                name="payment"
                value="payment-cash"
                Icon={
                  <Money
                    weight="regular"
                    color={pallete['purple-500']}
                    size={16}
                  />
                }
              />
            </BoxSelectCard>
          </div>
        </Paper>
      </section>

      <section>
        <h2>Cafés selecionados</h2>
        <Paper borderRadius="6px 44px">
          <CartList>
            <CartItem />
            <Divider />
            <CartItem />
            <Divider />
            <CartItem />
            <Divider />
            <CartItem />
            <Divider />
          </CartList>

          <TotalList>
            <li>
              <TotalLabel>Total de itens</TotalLabel>
              <TotalValue>$29.70</TotalValue>
            </li>
            <li>
              <TotalLabel>Entrega</TotalLabel>
              <TotalValue>$3.50</TotalValue>
            </li>
            <li>
              <strong>Total</strong>
              <strong>$33.20</strong>
            </li>
          </TotalList>

          <button type="submit">Confirmar pedido</button>
        </Paper>
      </section>
    </CheckoutContainerForm>
  );
}
