import CurrencyInput from 'react-currency-input-field';

export default function CurrencyField(){
return(<CurrencyInput
  id="input-example"
  name="input-name"
  placeholder="Please enter a number"
  defaultValue={1000}
  decimalsLimit={2}
  onValueChange={(value, name, values) => console.log(value, name, values)}
/>);
}