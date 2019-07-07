const now = new Date()

export class UserInfo {
  fullName: string
  email: string
  phone: string
  address: string
  appointmentDate: Date

  constructor(fullName: string, email: string, phone: string, address: string, appointmentDate: Date) {
    this.fullName = fullName
    this.email = email
    this.phone = phone
    this.address = address
    this.appointmentDate = appointmentDate
  }

  static default = new UserInfo(
    'Phan Lam Phat',
    'default@mail.com',
    '19001560',
    '1 Nguyen Huu Canh, Q1, HCMC',
    new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0),
  )
}