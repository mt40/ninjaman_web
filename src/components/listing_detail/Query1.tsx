import React from 'react'
import Container from '../Container'
import {appContext} from '../../App'
import './Query2.css'

const Query1: React.FC = () => {
  const context = React.useContext(appContext)

  const answers = [
    'Split A/C',
    'Portable A/C',
    'Ceiling A/C',
  ]

  const answerElems = answers.map((a, idx) => {
    return (
      <div
        key={idx}
        className="radius_5 border_solid padding_10 v_margin_10 bg_white cursor_pointer"
        onClick={() => onAnswerClick(a)}>
        {a}
      </div>
    )
  })

  const onAnswerClick = (answer: string) => {
    context.action.query.answerQuery(answer)
  }

  const onBackClick = () => {
    context.action.query.goBack()
  }

  return (
    <section className="ListingDetailQuery2 text_centered">
      <Container isSmall={true}>
        <h1 className="title">Tell us about your AC</h1>
        <div>
          {answerElems}
        </div>

        <div className="buttons v_margin_20">
          <button className="button" onClick={() => onBackClick()}>
            Back
          </button>
        </div>
      </Container>
    </section>
  )
}

export default Query1