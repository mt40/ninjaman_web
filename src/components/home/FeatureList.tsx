import React from 'react'
import Container from '../Container'
import './FeatureList.css'
import { T } from '../../config/translation/util'
import DivImg from '../DivImg'
import { getImage } from '../../util/Resource'

const FeatureList: React.FC = () => {
  const mkColumn = (img: string, title: string, text: string) => {
    return (
      <div className='column'>
        <DivImg height={ 150 } url={ img } fallbackColor={ 'transparent' } sizeContain={true}/>
        <p className='title is-4 margin_top_20'>
          { T(title) }
        </p>
        <p>
          { T(text) }
        </p>
      </div>
    )
  }

  return (
    <section className="FeatureList section">
      <Container>
        <div className="section-title">
          <h1 className="title is-1">{ T('Benefits') }</h1>
        </div>

        <div className="columns">
          {
            mkColumn(
              getImage('undraw_hire'),
              'High Quality & Trusted Professionals',
              'We provide only verified, background checked and high quality professionals',
            )
          }

          {
            mkColumn(
              getImage('undraw_notes'),
              'Matched to Your Needs',
              'We match you with the right professionals with the right budget',
            )
          }

          {
            mkColumn(
              getImage('undraw_on_the_way'),
              'Hassle Free Service Delivery',
              'Super convenient, guaranteed service from booking to delivery',
            )
          }
        </div>
      </Container>
    </section>
  )
}

export default FeatureList
