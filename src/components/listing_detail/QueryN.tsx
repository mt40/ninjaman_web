import React from 'react'
import Container from '../Container'
import {appContext} from '../../App'
import './QueryN.css'

const QueryN: React.FC = () => {
  const context = React.useContext(appContext)
  console.log('QueryN', context) // REMOVE

  const queryId = context.data.query.current
  const query = context.data.service.get.info.queries[queryId]
  const prevAnswer = context.data.query.answers[context.data.query.answers.length - 1]
  const answers = query.answers[prevAnswer]

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
    <div className="ListingDetailQueryN text_centered">
      <Container isSmall={true}>
        <h1 className="title">{query.text}</h1>
        <div>
          {answerElems}
        </div>

        <div className="buttons v_margin_20">
          <button className="button" onClick={() => onBackClick()}>
            Back
          </button>
        </div>
      </Container>
    </div>
  )
}

export default QueryN
