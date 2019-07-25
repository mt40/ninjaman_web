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
              '': ['Facial', 'Massage', 'Eyelash Extensions'],
            },
          },
          {
            text: 'What treatment do you need?',
            isFinal: true,
            answers: {
              'Facial': [
                {
                  text: 'Basic Facial Cleaning & Spa (1h)',
                  image: 'https://villageclubs.com/wp-content/uploads/2018/08/Facial-web_150dpi.jpg',
                  packageContent: [
                    'Soothing facial mask',
                    '30min facial cleaning',
                    '30min face massage',
                  ],
                  desc: [
                    'The facial treatment removes dirt and cleans your skin',
                    'Facials deeply cleanse your face leaving it nourished and refreshed',
                    'Facial massage reduces stress and improves blood circulation',
                  ],
                },
                {
                  text: 'Facial Pimple and blackhead treatment (1h)',
                  image: 'https://cdn.massagemag.com/wordpress/wp-content/uploads/HolidaySpa.jpg',
                  packageContent: [
                    'Soothing facial mask',
                    '30min facial cleaning',
                    '30min face massage',
                  ],
                  desc: [
                    'The facial treatment removes whiteheads and blackheads and cleans your skin',
                    'Facials deeply cleanse your face leaving it nourished and refreshed',
                    'Facial massage reduces stress and improves blood circulation',
                  ],
                },
                {
                  text: 'Vitamin C Skincare (1h)',
                  packageContent: [
                    'Soothing facial mask',
                    '30min facial cleaning',
                    '30min face massage',
                  ],
                  desc: [
                    'The facial treatment removes dirt and cleans your skin',
                    'Facials deeply cleanse your face leaving it nourished and refreshed with vitamin C',
                    'Facial massage reduces stress and improves blood circulation',
                  ],
                },
                {
                  text: 'Facial acne treatment (1h)',
                  packageContent: [
                    'Soothing facial mask',
                    '30min facial cleaning',
                    '30min face massage',
                  ],
                  desc: [
                    'Professional acne treatment that improves the skin',
                    'Facials deeply cleanse your face leaving it nourished and refreshed',
                    'Facial massage reduces stress and improves blood circulation',
                  ],
                },
                {
                  text: 'Moisturizing Skincare (1h15min)',
                  packageContent: [
                    'Exfoliation',
                    'Moisturizing facial mask',
                    '30min facial cleaning',
                    '30min face massage',
                  ],
                  desc: [
                    'Exfoliation removes of dry/dead skin cells on the surface o achieve healthy and glowing skin',
                    'Moisturization hydrates your face leaving your skin nourished, refreshed and youthful',
                    'Facial massage reduces stress and improves blood circulation',
                  ],
                },
              ],
              'Massage': [
                {
                  text: 'Full body massage (1h15min)',
                  packageContent: [
                    'Full body massage',
                    'Low, medium or high pressure intensity',
                    'Variety of relaxing oils to choose "',
                  ],
                  desc: [
                    'Strengthens Immune System of body',
                    'Reduces muscle tension, pain and soreness',
                    'Full body massage reduces stress and improves blood circulation',
                  ],
                },
                {
                  text: 'Fat-burning Massage (1h15min)',
                  packageContent: [
                    'Belly massage for fat burn',
                    'Low, medium or high pressure intensity',
                    'Variety of relaxing oils to choose',
                  ],
                  desc: [
                    'Stimulates fat burn in the belly area',
                    'Reduces tension, pain and soreness',
                    'Reduces stress and improves blood circulation',
                    'Strengthens the immune system of body',
                  ],
                },
                {
                  text: 'Prenatal Massage (1h15min)',
                  packageContent: [
                    'Professional prenatal massage therapy',
                    'Relief of everyday symptoms (Headache, muscle tension, fatique, backache)',
                  ],
                  desc: [
                    'Increases blood circulation for pregnant women',
                    'Reduces body aches and pains',
                    'Stabilizes hormones and reduces symptoms of depression or anxiety',
                    'Reduces edema during pregnancy',
                    'Reduces stretch marks abdomen after birth',
                    'Minimizes premature birth',
                  ],
                },
              ],
              'Eyelash Extensions': [
                {
                  text: 'Eyelash Extensions (1h30min)',
                  packageContent: [
                    'Semi-permanent eyelash extensions (lasting 3-4 weeks)',
                  ],
                  desc: [
                    'Longer, thicker and natural looking eyelashes',
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
            answers: {'': ['Manicure', 'Pedicure', 'Combo']},
          },
          {
            text: 'What treatment do you need?',
            isFinal: true,
            answers: {
              'Manicure': [
                {
                  text: 'Manicure + Basic nail polish (30min)',
                  packageContent: [
                    'Cleaning and cutting',
                    'Variety of colors',
                    'Variety of stones and gems',
                  ],
                  desc: [
                    'Clean and beautiful nails',
                    'Nailcare prevent cracks or infections from developing',
                    'Regular nailcare help maintain healthy nails',
                  ],
                },
                {
                  text: 'Manicure + OPI polish (30min)',
                  packageContent: [
                    'Cleaning and cutting',
                    'Variety of colors (OPI)',
                    'Variety of stones and gems',
                  ],
                  desc: [
                    'Clean and beautiful nails',
                    'Nailcare prevent cracks or infections from developing',
                    'Regular nailcare help maintain healthy nails',
                  ],
                },
                {
                  text: 'Manicure + gel polish (30min)',
                  packageContent: [
                    'Cleaning and cutting',
                    'Variety of colors (gel)',
                    'Variety of stones and gems"',
                  ],
                  desc: [
                    'Clean and beautiful nails',
                    'Nailcare prevent cracks or infections from developing',
                    'Regular nailcare help maintain healthy nails',
                  ],
                },
              ],
              'Pedicure': [
                {
                  text: 'Pedicure + Basic nail polish (30min)',
                  packageContent: [
                    'Cleaning and cutting',
                    'Variety of colors',
                    'Variety of stones and gems',
                  ],
                  desc: [
                    'Clean and beautiful nails',
                    'Nailcare prevent cracks or infections from developing',
                    'Regular nailcare help maintain healthy nails',
                  ],
                },
                {
                  text: 'Pedicure + OPI polish (30min)',
                  packageContent: [
                    'Cleaning and cutting',
                    'Variety of colors (OPI)',
                    'Variety of stones and gems',
                  ],
                  desc: [
                    'Clean and beautiful nails',
                    'Nailcare prevent cracks or infections from developing',
                    'Regular nailcare help maintain healthy nails',
                  ],
                },
                {
                  text: 'Pedicure + gel polish (30min)',
                  packageContent: [
                    'Cleaning and cutting',
                    'Variety of colors (gel)',
                    'Variety of stones and gems',
                  ],
                  desc: [
                    'Clean and beautiful nails',
                    'Nailcare prevent cracks or infections from developing',
                    'Regular nailcare help maintain healthy nails',
                  ],
                },
                {
                  text: 'Gel removal (5min)',
                  packageContent: [
                    'Removing gel',
                  ],
                  desc: [
                    'Clean nails',
                  ],
                },
              ],
              'Combo': [
                {
                  text: 'Manicure + Pedicure + Basic nail polish (45min)',
                  packageContent: [
                    'Cleaning and cutting',
                    'Variety of colors',
                    'Variety of stones and gems',
                  ],
                  desc: [
                    'Clean and beautiful nails',
                    'Nailcare prevent cracks or infections from developing',
                    'Regular nailcare help maintain healthy nails',
                  ],
                },
                {
                  text: 'Manicure + Pedicure + OPI nail polish (45min)',
                  packageContent: [
                    'Cleaning and cutting',
                    'Variety of colors (OPI)',
                    'Variety of stones and gems',
                  ],
                  desc: [
                    'Clean and beautiful nails',
                    'Nailcare prevent cracks or infections from developing',
                    'Regular nailcare help maintain healthy nails',
                  ],
                },
                {
                  text: 'Manicure + Pedicure + Gel nail polish (45min)',
                  packageContent: [
                    'Cleaning and cutting',
                    'Variety of colors (gel)',
                    'Variety of stones and gems',
                  ],
                  desc: [
                    'Clean and beautiful nails',
                    'Nailcare prevent cracks or infections from developing',
                    'Regular nailcare help maintain healthy nails',
                  ],
                },
              ],
            },
          },
        ],
      },
      {
        name: 'Hair & Makeup',
        image: getImage('hair', 'jpg'),
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
            answers: {'': ['Hair & Make Up for Events', 'Hair & Make Up for Weddings']},
          },
          {
            text: 'What treatment do you need?',
            isFinal: true,
            answers: {
              'Hair & Make Up for Events': [
                {
                  text: 'Hair & Make Up for Business Events/ Interviews (1h)',
                  packageContent: [
                    'Customized hairstyle (20min)',
                    'One complete professional makeup (40min)',
                    'Eyelashes',
                  ],
                  desc: [
                    'Only top makeup brands used',
                    'Exclusive style and look consulting',
                    'Individual style or copy other styles (pictures required)',
                  ],
                },
                {
                  text: 'Hair & Make Up for parties and gala events (1h)',
                  packageContent: [
                    'Customized hairstyle (20min)',
                    'One complete professional makeup (40min)',
                    'Eyelashes',
                  ],
                  desc: [
                    'Only top makeup brands used',
                    'Exclusive style and look consulting',
                    'Individual style or copy other styles (pictures required)',
                  ],
                },
              ],
              'Hair & Make Up for Weddings': [
                {
                  text: 'Hair & Make Up for Weddings (2h, 1 look)',
                  packageContent: [
                    'Customized hairstyle for brides (60min)',
                    'One complete bridal makeup (60min)',
                    'Eyelashes',
                  ],
                  desc: [
                    'Only top makeup brands used',
                    'Exclusive style and look consulting',
                    'Individual style or copy other styles (pictures required)',
                  ],
                },
                {
                  text: 'Hair & Make Up for Weddings (additional looks or person, 2h)',
                  packageContent: [
                    'Customized hairstyle for brides (60min)',
                    'One complete bridal makeup (60min)',
                    'Eyelashes',
                  ],
                  desc: [
                    'Only top makeup brands used',
                    'Exclusive style and look consulting',
                    'Individual style or copy other styles (pictures required)',
                  ],
                },
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
