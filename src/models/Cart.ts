import { prices } from '../config/prices'
import { Price } from './Price'
import { ServiceGroup, ServiceInfo } from '../config/services'
import { toPrettyJson } from '../util/Json'

type AnswerChain = string[]

interface Value {
  chain: AnswerChain
  count: number
}

export class Cart {
  /**
   * Each item is a chain of answer. This is needed to
   * figure out the correct price of each item.
   */
  items: Map<string, Value> = new Map()

  /** Adds the given item to this cart. */
  set(item: AnswerChain, count: number): Cart {
    this.items.set(Cart.keyOf(item), {chain: item, count: count})
    return this
  }

  totalPrice(group: ServiceGroup, sv: ServiceInfo): Price {
    return Array.from(this.items.values()).reduce(
      (agg: Price, v: Value) => {
        return new Price(agg.value + Cart.priceOf(group, sv, v.chain).value * v.count)
      },
      new Price(0),
    )
  }

  static keyOf(c: AnswerChain): string {
    return c.reduce((p, c) => `${ p } > ${ c }`)
  }

  static priceOf(group: ServiceGroup, sv: ServiceInfo, a: AnswerChain): Price {
    const list = [group.name, sv.name].concat(a)
    console.log(`searching for price of ${ list }`)

    function loop(priceInfo: number | any, curAns: number): number {
      if (typeof priceInfo === 'number') {
        return priceInfo
      }

      if (curAns >= list.length) {
        throw new Error(`cannot find price of ${ list }`)
      }

      const key = list[curAns]
      if (!priceInfo.hasOwnProperty(key)) {
        throw new Error(`cannot find price of ${ list }`)
      }

      return loop(priceInfo[list[curAns]], curAns + 1)
    }

    return new Price(loop(prices, 0))
  }

  toJson(group: ServiceGroup, sv: ServiceInfo): string {
    return toPrettyJson({
      items: Array.from(this.items.values()).map(v => `${ Cart.keyOf(v.chain) }: ${ v.count }`),
      totalPrice: this.totalPrice(group, sv),
    })
  }
}