import * as _ from 'lodash'

export class Price {
  value: number
  currency: string

  constructor(value: number, currency: string = 'VND') {
    this.value = value
    this.currency = currency
  }

  toDisplayString(): string {
    function loop(d: number): string {
      const chars = _.split(d.toString(), '').reverse()
      return _.chunk(chars, 3)
        .map(digits => digits.reduce((a, b) => b + a))
        .reduce((a, b) => `${ b }.${ a }`)
    }

    return `${ loop(this.value) } ${ this.currency }`
  }

  times(n: number): Price {
    return new Price(this.value * n)
  }
}