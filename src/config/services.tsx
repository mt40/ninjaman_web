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
        image: getImage('spa1', 'jpg'),
        features: [
          'At your doorstep within 90 minutes',
          '3 day post-service guarantee',
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
                    'Gentle to skin',
                    'Suitable for all skin types',
                    'Never leave scars',
                  ]
                },
                {
                  text: 'Facial pimple and blackheads treatment + Spa',
                  image: 'https://cdn.massagemag.com/wordpress/wp-content/uploads/HolidaySpa.jpg',
                  desc: [
                    'Gentle to skin',
                    'Suitable for all skin types',
                    'Never leave scars',
                  ]
                },
                {
                  text: 'Lotus Herbals - natural glow skin radiance facial',
                  desc: [
                    'Dermatology certified',
                    'Strong whitening effect',
                  ]
                },
                {
                  text: 'Active charcoal skin purifying facial',
                  desc: [
                    'Gentle to skin',
                    'Suitable for all skin types',
                  ]
                },
                {
                  text: 'Skin miracle bio whitening facial',
                  desc: [
                    'Naturally white skin',
                    'Long lasting effect',
                  ]
                },
              ],
              'Massage': [
                'Back & Shoulder Massage',
                'Foot Massage',
                'Full Body Massage',
                'Head Massage',
                'Massage for elder',
                'Massage for mama',
              ],
            },
          },
        ],
      },
      {
        name: 'Nail',
        image: getImage('nail1', 'jpg'),
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
      {
        name: 'Hair & Makeup',
        image: getImage('hair', 'jpg'),
        features: [
          'Doorstep repair within 10 mins',
          'Protection Against Damage Upto INR 10,000',
          '30 day post-service guarantee',
        ],
        queries: [
          {
            text: '',
            answers: { '': ['Hair Styling', 'Hair Treatment', 'Hair Coloring'] }
          },
          {
            text: 'What treatment do you need?',
            isFinal: true,
            answers: {
              'Hair Styling': [
                'Fabulous gala style',
                'Trendy curling',
              ],
              'Hair Treatment': [
                "L'Oreal Hair Spa (S)",
                "Keratin Hair Treament (S)",
                "Keratin Hair Treament (M)",
              ],
              'Hair Coloring': [
                "L'Oreal Global color (S)",
                "L'Oreal Global color (M)",
                "L'Oreal Global color (L)",
              ],
            }
          }
        ]
      }
    ],
  },
  {
    name: 'Photography',
    services: [
      {
        name: 'Wedding',
        image: getImage('wedding', 'jpg'),
        features: [
          'Doorstep repair within 10 mins',
          'Protection Against Damage Upto INR 10,000',
          '30 day post-service guarantee',
        ],
        queries: [
          {
            text: '',
            answers: { '': ['In city'] }
          },
          {
            text: 'Which event?',
            isFinal: true,
            answers: {
              'In city': [
                'Engagement Party',
                'Pre-wedding',
                'Ceremony',
              ],
            }
          }
        ]
      },
      {
        name: 'Portrait',
        image: getImage('kid_portrait', 'jpg'),
        features: [
          'Doorstep repair within 10 mins',
          'Protection Against Damage Upto INR 10,000',
          '30 day post-service guarantee',
        ],
        queries: [
          {
            text: '',
            answers: { '': ['In city'] }
          },
          {
            text: 'How many photos do you want?',
            isFinal: true,
            answers: {
              'In city': [
                '10-photo album',
                '30-photo album',
                '50 photos or more',
              ],
            }
          }
        ]
      }
    ],
  }
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
