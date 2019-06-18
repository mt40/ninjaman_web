class Page {
  path: string

  constructor(path: string) {
    this.path = path
  }

  public toString(): string {
    return this.path
  }
}

export const home = new Page('/')
export const serviceDetail = new Page('/service')
export const queryN = (n: number) => new Page(`${serviceDetail}/q${n}`)
export const checkout = new Page(`${serviceDetail}/checkout`)