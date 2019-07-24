const now = new Date()

function defaultAppointmentDate(date: Date): Date {
  const h = date.getHours()
  let next2Hours = h + 2

  const copy = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    next2Hours,
  )

  if (next2Hours < 10) {
    copy.setHours(10)
  }

  if (next2Hours > 20) {
    copy.setDate(copy.getDate() + 1)
    copy.setHours(10)
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

  forReporting() {
    return {
      fullName: this.fullName,
      email: this.email,
      phone: this.phone,
      address: this.address,
      appointmentDate: this.appointmentDate.toLocaleString('vi-VN'),
    }
  }

  getLocalBookingDateStr() {
    return this.appointmentDate.toLocaleString('vi-VN')
  }

  static default = new UserInfo('', '', '', '', defaultAppointmentDate(now))
}