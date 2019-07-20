import React from 'react'
import './AddToCart.css'
import { translator } from '../../config/translation/util'
import { appContext } from '../../App'

interface AddToCartProp {
  onItemChange?: (count: number) => void
  useFilledButton?: boolean
}

const AddToCart: React.FC<AddToCartProp> = (props) => {
  const context = React.useContext(appContext)
  const T = translator(context.data.lang).T

  const [count, setCount] = React.useState(0)

  const onSubtractClick = () => {
    const newCount = Math.max(count - 1, 0)
    setCount(newCount)
    if (props.onItemChange) {
      props.onItemChange(newCount)
    }
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
    const btnStyle = props.useFilledButton ? 'is-info' : 'is-outlined is-dark'
    return (
      <div className={ cls }>
        <button className={ `button ${ btnStyle }` } onClick={ onAddClick }>
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
