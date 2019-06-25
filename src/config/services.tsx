import {getImage} from '../util/Resource'

/**
 * List of predefined services used in this app. This is for demo purpose only.
 *
 * Schema: group -> service -> query
 *
 * Example:
 * {
 *   name: 'Photography',
 *   services: [
 *     {
 *       name: 'Wedding',
 *       queries: [
 *         {
 *          text: 'Which quality?',
 *          answers: { '': ['casual', 'premium'] },
 *         },
 *         {
 *          text: 'How many photos would you want?',
 *          answers: {
 *            'casual': ['5 photos', '10 photos'],
 *            'premium': ['20 photo', '30+ photos']
 *          },
 *          isFinal: true,
 *         }
 *       ]
 *     }
 *   ],
 * }
 */
export const services: ServiceGroup[] = [
  {
    name: 'Beauty',
    services: [
      {
        name: 'Spa',
        image: getImage('carpenter', 'jpeg'),
        features: [
          'Doorstep repair within 90 mins',
          'Protection Against Damage Upto INR 10,000',
          '30 day post-service guarantee',
        ],
        queries: [
          {
            text: '',
            answers: {
              '': ['Facial', 'Massage'],
            },
          },
          {
            text: 'What treatment do you need?',
            isFinal: true,
            answers: {
              'Facial': [
                {
                  text: 'Basic Facial cleaning + Spa',
                  image: 'https://villageclubs.com/wp-content/uploads/2018/08/Facial-web_150dpi.jpg',
                  desc: [
                    'Includes 30 minutes of service',
                    'Hourly rate card applicable',
                    "Click the 'i' button for details",
                  ]
                },
                {
                  text: 'Facial pimple and blackheads treatment + Spa',
                  image: 'https://cdn.massagemag.com/wordpress/wp-content/uploads/HolidaySpa.jpg',
                  desc: [
                    'Includes 30 minutes of service',
                    'Hourly rate card applicable',
                    "Click the 'i' button for details",
                  ]
                },
                'Lotus Herbals - natural glow skin radiance facial',
                'Active charcoal skin purifying facial',
                'Skin miracle bio whitening facial',
              ],
              'Massage': [
                'Back & Shoulder Massage',
                'Foot Massage',
                'Full Body Massage',
                'Head Massage',
              ],
            },
          },
        ],
      },
      {
        name: 'Nail',
        image: getImage('carpenter', 'jpeg'),
        features: [
          'Doorstep repair within 10 mins',
          'Protection Against Damage Upto INR 10,000',
          '30 day post-service guarantee',
        ],
        queries: [
          {
            text: '',
            answers: {'': ['Pedicure & Manicure']},
          },
          {
            text: 'What treatment do you need?',
            answers: {
              'Pedicure & Manicure': [
                'manicure + polish colour',
                'manicure + OPI Infinite Shine polish',
              ],
            },
          },
          {
            text: 'Which paint quality would you prefer?',
            isFinal: true,
            answers: {
              'manicure + polish colour': ['normal', 'premium'],
              'manicure + OPI Infinite Shine polish': ['premium', 'best'],
            },
          },
        ],
      },
    ],
  },
]

export interface ServiceGroup {
  name: string
  services: ServiceInfo[]
}

export interface ServiceInfo {
  name: string

  /** Will be shown in cards in home page and as a cover in detail page. */
  image: string

  /** Features/description of this service, will be shown in detail page. */
  features: string[]

  queries: QueryInfo[]
}

export interface QueryInfo {
  /** Query text, will be shown at the top. */
  text: string

  /**
   * A map of answers with:
   * - key: the get from the previous query that leads to these
   *        set of answers. Put '' if this is the 1st query.
   * - value: a list of answers
   */
  answers: Record<string, AnswerInfo[]>

  /** If `true`, display 'add to card'. */
  isFinal?: boolean
}

export interface RichAnswerInfo {
  text: string
  image?: string
  desc?: string[]
}

export type AnswerInfo = string | RichAnswerInfo


export function groupOf(sv: ServiceInfo): ServiceGroup {
  const rs = services.find(group => {
    return group.services.some(s => s === sv)
  })

  if (rs) return rs
  throw new Error(`Service ${sv.name} doesn't exist in any group`)
}