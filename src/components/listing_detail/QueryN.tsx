import React from 'react'
import Container from '../Container'
import {appContext, QueryAnswer} from '../../App'
import './QueryN.css'
import * as _ from 'lodash'
import useRouter from 'use-react-router'
import * as Page from '../../context/navigation'
import {AnswerInfo} from '../../config/services'

const QueryN: React.FC = () => {
  const context = React.useContext(appContext)
  const {history} = useRouter()

  console.log('QueryN', context) // REMOVE

  const query = context.action.getNextQuery().get
  const prevAnswer = _.last(context.data.query.answers) as QueryAnswer
  const answers = query.answers[prevAnswer.get]
  const service = context.data.service.get.info

  const answerElems = answers.map((a, idx) => {
    const cls = 'radius_5 border_solid padding_10 v_margin_10 bg_white cursor_pointer'

    if (typeof a === 'string') {
      return (
        <div
          key={idx}
          className={cls}
          onClick={() => onAnswerClick(a)}>
          <b>{a}</b>
        </div>
      )
    }
    else {
      const desc = () => {
        if (a.desc) {
          return a.desc.map((d, i) => {
            return <li key={i}>⦁ {d}</li>
          })
        }
        return a.desc
      }

      return (
        <div
          key={idx}
          className={cls}
          onClick={() => onAnswerClick(a.text)}>

          <b>{a.text}</b>
          <ul className='v_margin_10'>{desc()}</ul>

        </div>
      )
    }
  })

  const onAnswerClick = (answer: string) => {
    context.action.answer(query, answer)
    if (query.isFinal) {
      history.push(Page.userInfo(service).path)
    }
  }

  const onBackClick = () => {
    context.action.popAnswer()
  }

  return (
    <div className="ListingDetailQueryN">
      <Container isSmall={false}>
        <h1 className="title">{query.text}</h1>
        <div>
          {answerElems}
        </div>

        <hr className="margin_top_40"/>

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
