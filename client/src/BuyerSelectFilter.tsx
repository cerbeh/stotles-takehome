import { Select } from "antd"
import { Buyer } from "./Api"

export function BuyerSelectFilter(props: { onChange: (buyerId: string) => void, options: Buyer[] }) {
  const { onChange, options } = props

  return (
    <Select
      placeholder="Please select"
      style={{ width: '100%' }}
      options={options.map(buyer => ({ value: buyer.id, label: buyer.name }))}
      onChange={onChange}
    />
  )
}