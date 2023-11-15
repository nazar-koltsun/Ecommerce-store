const formater = new Intl.NumberFormat("en-US", {
  style: 'currency',
  currency: 'USD',
})

interface CurrencyProps {
  value: number;
}

const Currency: React.FC<CurrencyProps> = ({ value }) => {
  return (
    <span>{formater.format(+value)}</span>
  )
}

export default Currency