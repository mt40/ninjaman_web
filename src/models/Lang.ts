import _ from 'lodash'

export class Lang {
  name: string

  constructor(name: string) {
    this.name = name
  }

  static EN = new Lang('en')
  static VN = new Lang('vn')

  static values = [Lang.EN, Lang.VN]

  static fromName(name: string) {
    return _.find(Lang.values, v => v.name === name) as Lang
  }
}