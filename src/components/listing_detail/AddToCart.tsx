import React from 'react'
import './AddToCart.css'
import { T } from '../../config/translation/util'

interface AddToCartProp {
  onItemChange?: (count: number) => void
  useFilledButton?: boolean
}

const AddToCart: React.FC<AddToCartProp> = (props) => {
  const [count, setCount] = React.useState(0)

  const onSubtractClick = () => {
    setCount(Math.max(count - 1, 0))
  }

  const onAddClick = () => {
    const newCount = count + 1
    setCount(newCount)
    if (props.onItemChange) {
      props.onItemChange(newCount)
    }
  }

  const cls = 'AddToCart'
  if (count === 0) {
    const btnStyle = props.useFilledButton ? '' : 'is-outlined'
    return (
      <div className={ cls }>
        <button className={ `button is-info ${ btnStyle }` } onClick={ onAddClick }>
          { T('Add') }
        </button>
      </div>
    )
  }
  else {
    return (
      <div className={ `${ cls } positive radius_5` }>
        <div className="btn h_padding_10" onClick={ onSubtractClick }>-</div>
        <div className="count h_padding_10">{ count }</div>
        <div className="btn h_padding_10" onClick={ onAddClick }>+</div>
      </div>
    )
  }
}

export default AddToCart
