import { MyContext } from '../models/MyContext'
import { toPrettyJson } from './Json'

/** Reports user registration to Slack. */
export const postUserRegistration = (context: MyContext) => {
  const service = context.data.service.get

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
`

  return fetch(
    'https://hooks.slack.com/services/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',
    {
      method: 'POST',
      headers: {
        // 'Content-Type': 'application/json',
      },
      body: toPrettyJson({text: message}),
    },
  ).catch(console.log)
}