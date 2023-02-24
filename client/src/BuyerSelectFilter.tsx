import { Select } from "antd"
import { Buyer } from "./Api"

export function BuyerSelectFilter(props: { onChange: (buyerIds: string[]) => void, options: Buyer[] }) {
  const { onChange, options } = props
  // const handleChange = (buyerIds: string[]) => {
  //   const selectedBuyers = options.filter(buyer => buyerIds.includes(buyer.id))
  //   onChange(selectedBuyers)
  // }
  return (
    <Select
      mode="multiple"
      placeholder="Please select"
      style={{ width: '100%' }}
      options={options.map(buyer => ({ value: buyer.id, label: buyer.name }))}
      onChange={onChange}
    />
  )
}