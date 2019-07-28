import { MyContext } from '../models/MyContext'
import { toPrettyJson } from './Json'
import _ from 'lodash'
import { translator } from '../config/translation/util'
import * as http from './http'
import * as apis from '../config/apis'

/** Reports user registration to Slack. */
export const postUserRegistration = (context: MyContext) => {
  const T = translator(context.data.lang).T
  const service = context.data.service.get
  const cart = context.data.cart
  const user = context.data.user

  const generateResponse = () => {
    const bookings = Array.from(cart.items.entries())
      .filter(([, val]) => val.count > 0)
      .map(([, val]) => {
        return `- ${ T(_.last(val.chain) as string) }, số lượng: ${ val.count }`
      })
      .join('\n')

    return 'Belazy xin được xác nhận lịch hẹn với bạn. Bạn đã đặt dịch vụ:\n' +
      bookings +
      `\nvào lúc ${ user.getLocalBookingDateStr() }, tại địa chỉ ${ user.address }. ` +
      'Nhân viên sẽ liên lạc bạn khi tới nơi.\nBelazy chúc bạn có một trải nghiệm thú vị!'
  }

  const message = `
*🎉 New booking!*
Cart:
\`\`\`
${ context.data.cart.toJson(service.group, service.info) }
\`\`\`
User:
\`\`\`
${ toPrettyJson(context.data.user.forReporting()) }
\`\`\`
From:
\`\`\`
${ navigator.userAgent }
\`\`\`
Generated response:
\`\`\`
${ generateResponse() }
\`\`\`
`

  return http.post(apis.slack.postMessage, {text: message})
}