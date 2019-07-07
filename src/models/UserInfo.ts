const now = new Date()

function defaultAppointmentDate(date: Date): Date {
  const h = date.getHours()
  let next2Hours = h + 2

  const copy = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
  )

  if (next2Hours < 10) {
    copy.setHours(10)
  }

  if (next2Hours > 17) {
    copy.setHours(10)
    copy.setDate(copy.getDate() + 1)
  }

  return copy
}

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
    defaultAppointmentDate(now),
  )
}