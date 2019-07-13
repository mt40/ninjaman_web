import React from 'react'
import { appContext } from '../../App'
import './QueryN.css'
import * as _ from 'lodash'
import useRouter from 'use-react-router'
import * as Page from '../../context/navigation'
import { T } from '../../config/translation/util'
import DivImg from '../DivImg'
import { AnswerInfo, RichAnswerInfo } from '../../config/services'
import AddToCart from './AddToCart'
import { QueryAnswer } from '../../models/QueryAnswer'
import { Cart } from '../../models/Cart'
import { isMobile } from '../../util/Resource'

const QueryN: React.FC = () => {
  const context = React.useContext(appContext)
  const {history} = useRouter()
  const [focusedAnswer, setFocusedAnswer] = React.useState<number>(0)

  console.log('QueryN', context) // REMOVE

  const query = context.action.getNextQuery().get
  const prevAnswer = _.last(context.data.query.answers) as QueryAnswer
  const answers = query.answers[prevAnswer.get]
  const service = context.data.service.get

  const getAnsDescElem = (a: RichAnswerInfo) => {
    if (a.desc) {
      return a.desc.map((d, i) => {
        return <li key={ i }>⦁ { T(d) }</li>
      })
    }
    return a.desc
  }

  const answerElems = () => {
    return answers.map((a, idx) => {
      const cls = 'radius_5 border_solid padding_10 v_margin_10 bg_white cursor_pointer'

      if (typeof a === 'string') {
        return (
          <div
            key={ idx }
            className={ cls }
            onClick={ () => onAnswerClick(a) }>
            <b>{ T(a) }</b>
          </div>
        )
      }
      else {
        const desc = () => {
          if (a.desc) {
            return a.desc.map((d, i) => {
              return <li key={ i }>⦁ { T(d) }</li>
            })
          }
          return a.desc
        }

        return (
          <div
            key={ idx }
            className={ cls }
            onClick={ () => onAnswerClick(a.text) }>

            <b>{ T(a.text) }</b>
            <ul className='v_margin_10'>{ desc() }</ul>

          </div>
        )
      }
    })
  }

  const onAddRemoveCart = (a: AnswerInfo, count: number) => {
    if (typeof a === 'string') {
      context.action.setCart(a, count)
    }
    else {
      context.action.setCart(a.text, count)
    }
  }

  const getPrice = (a: AnswerInfo) => {
    const ans = typeof a === 'string' ? a : a.text
    const chain = context.data.query.answers.map(a => a.get).concat([ans])
    return Cart.priceOf(service.group, service.info, chain)
  }

  const finalAnswerElems = () => {
    return answers.map((a, idx) => {
      const isAnswerFocused = idx === focusedAnswer

      const cls = () => {
        const common = 'final_answer radius_5 v_margin_20 bg_white cursor_pointer'
        return isAnswerFocused ? common + ' focused shadow' : common
      }

      const footer = (
        <div className="final_answer_footer padding_10">
          <b>{ getPrice(a).toDisplayString() }</b>
          <AddToCart useFilledButton={ isAnswerFocused }
                     onItemChange={ (cnt) => onAddRemoveCart(a, cnt) }/>
        </div>
      )

      if (typeof a === 'string') {
        return (
          <div
            key={ idx }
            className={ cls() }
            onClick={ () => onFinalAnswerClick(a, idx) }>

            <div className="padding_10 top_padding_20">
              <b>{ T(a) }</b>
            </div>

            { footer }
          </div>
        )
      }
      else {
        return (
          <div
            key={ idx }
            className={ cls() }
            onClick={ () => onFinalAnswerClick(a.text, idx) }>

            <div className="padding_10 top_padding_20">
              <b>{ T(a.text) }</b>
              <ul className='v_margin_10'>{ getAnsDescElem(a) }</ul>
            </div>

            { footer }
          </div>
        )
      }
    })
  }

  const onAnswerClick = (answer: string) => {
    context.action.answer(query, answer)
  }

  const onFinalAnswerClick = (answer: string, idx: number) => {
    if (focusedAnswer !== idx) {
      setFocusedAnswer(idx)
    }
  }

  const onFinalAnswerNextClick = () => {
    history.push(Page.userInfo(service.info).path)
  }

  const onBackClick = () => {
    context.action.popAnswer()
  }

  const answerColumn = () => {
    return (
      <div className="column is-5">
        <h1 className="title">{ T(query.text) }</h1>
        <div>
          { query.isFinal ? finalAnswerElems() : answerElems() }
        </div>
      </div>
    )
  }

  const answerDetailColumn = () => {
    const content = () => {
      const ans = answers[focusedAnswer]
      if (typeof ans === 'string') {
        return undefined
      }
      else {
        const cover = ans.image && (
          <DivImg url={ ans.image } className="radius_5" height={ 400 }/>
        )

        return (
          <div>
            { cover }
            <h1 className="title is-5 top_padding_20">{ T(ans.text) }</h1>
            <ul className='v_margin_10'>{ getAnsDescElem(ans) }</ul>
          </div>
        )
      }
    }

    return <div className="column">{ content() }</div>
  }

  return (
    <div className="QueryN">
      <div className="columns">
        { answerColumn() }
        { !isMobile() && answerDetailColumn() }
      </div>


      <div className='button_bar shadow_up'>
        <button className="button is-outlined is-dark" onClick={ () => onBackClick() }>
          { T('Back') }
        </button>

        <button className="button is-info" onClick={ () => onFinalAnswerNextClick() }>
          { T('Next') }
        </button>
      </div>
    </div>
  )
}

export default QueryN
