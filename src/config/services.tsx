import { getImage } from '../util/Resource'

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
          'Be Lazy and Relax',

          'Tired of going to the salon? BeLazy provides services like Spa, Facial, ' +
          'Manicure, Pedicure from our professionals at home near you. Get beauticians ' +
          'with at least 2 years of experience at home for the lowest price. Book beauty ' +
          'parlour service at home in Ho Chi Minh City with a few clicks, to have a ' +
          'hygienic and mess-free experience.',
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
                  text: 'Basic Facial Cleaning (1h)',
                  image: 'https://villageclubs.com/wp-content/uploads/2018/08/Facial-web_150dpi.jpg',
                  packageContent: [
                    '30min facial cleaning',
                    '30min face massage',
                  ],
                },
                {
                  text: 'Facial pimple and blackheads treatment + Spa (1h)',
                  image: 'https://cdn.massagemag.com/wordpress/wp-content/uploads/HolidaySpa.jpg',
                  packageContent: [
                    '30min Pimple and Blackhead treatment',
                    '30min face massage',
                  ],
                },
                {
                  text: 'Lotus Herbals - natural glow skin radiance facial (1h)',
                  packageContent: [
                    '30min natural glow skin facial',
                    '30min face massage',
                  ],
                },
                {
                  text: 'Active charcoal skin purifying facial (1h)',
                  packageContent: [
                    '30min active charcoal purifying facial',
                    '30min face massage',
                  ],
                },
                {
                  text: 'Skin miracle bio whitening facial (1h)',
                  packageContent: [
                    '30min Whitening facial',
                    '30min face massage',
                  ],
                },
              ],
              'Massage': [
                {
                  text: 'Back & Shoulder Massage (1h)',
                  packageContent: [
                    '30min Back Massage',
                    '30min Shoulder',
                  ],
                },
                {
                  text: 'Foot Massage (30min)',
                  packageContent: [
                    '30min foot massage',
                  ],
                },
                {
                  text: 'Full Body Massage (1h)',
                  packageContent: [
                    '60min full body massage',
                  ],
                },
                {
                  text: 'Head Massage (30min)',
                  packageContent: [
                    '30min head massage',
                  ],
                },
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
            isFinal: true,
            answers: {
              'Pedicure & Manicure': [
                'Manicure + Basic nail polish',
                'Pedicure * Basic nail polish',
                'Manicure + OPI nail polish',
                'Pedicure * OPI nail polish',
                'Manicure + Gel polish',
                'Pedicure + Gel polish',
                'Remove gel',
                {
                  text: 'Combo 1',
                  packageContent: [
                    'Manicure',
                    'Pedicure',
                    'Basic nail polish',
                  ],
                },
                {
                  text: 'Combo 2',
                  packageContent: [
                    'Manicure',
                    'Pedicure',
                    'OPI nail polish',
                  ],
                },
                {
                  text: 'Combo 3',
                  packageContent: [
                    'Manicure',
                    'Pedicure',
                    'Gel nail polish',
                  ],
                },
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
            answers: {'': ['Hair Styling', 'Hair Treatment', 'Hair Coloring']},
          },
          {
            text: 'What treatment do you need?',
            isFinal: true,
            answers: {
              'Hair Styling': [
                'Fabulous gala style',
                'Business event style',
                'Blow dry with Curls',
                'Hair Ironing',
                'Trendy curling',
              ],
              'Hair Treatment': [
                "L'Oreal Hair Spa (S)",
                "L'Oreal Hair Spa (M)",
                "L'Oreal Hair Spa (L)",
                "Keratin Hair Treament (S)",
                "Keratin Hair Treament (M)",
                "Keratin Hair Treament (L)",
                "Permanent Smoothing (S)",
                "Permanent Smoothing (M)",
                "Permanent Smoothing (L)",
                "Permanent Curls (S)",
                "Permanent Curls (M)",
                "Permanent Curls (L)",
              ],
              'Hair Coloring': [
                "L'Oreal Global color (S)",
                "L'Oreal Global color (M)",
                "L'Oreal Global color (L)",
                "L'Oreal Global highlights S)",
                "L'Oreal Global highlights (M)",
                "L'Oreal Global highlights (L)",
              ],
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
  packageContent?: string[]
  desc?: string[]
}

export type AnswerInfo = string | RichAnswerInfo


export function groupOf(sv: ServiceInfo): ServiceGroup {
  const rs = services.find(group => {
    return group.services.some(s => s === sv)
  })

  if (rs) return rs
  throw new Error(`Service ${ sv.name } doesn't exist in any group`)
}
