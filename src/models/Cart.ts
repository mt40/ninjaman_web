type AnswerChain = string[]

export class Cart {
  /**
   * Each item is a chain of answer. This is needed to
   * figure out the correct price of each item.
   */
  items: Map<string, number> = new Map()

  /** Adds the given item to this cart. */
  set(item: AnswerChain, count: number): Cart {
    this.items.set(Cart.keyOf(item), count)
    return this
  }

  totalPrice(): number {
    return 100000
  }

  static keyOf(c: AnswerChain): string {
    return c.reduce((p, c) => `${ p } > ${ c }`)
  }
}