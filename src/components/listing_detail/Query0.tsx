import React from 'react'
import './Query0.css'
import Container from '../Container'
import { appContext } from '../../App'
import { T } from '../../config/translation/util'
import DivImg from '../DivImg'
import { isMobile } from '../../util/Resource'

const Query0: React.FC = () => {
  const context = React.useContext(appContext)
  const service = context.data.service.get
  const query0 = service.info.queries[0]
  const answers = query0.answers['']

  const answersElems = answers.map((a, idx) => {
    const ans = () => {
      if (typeof a === 'string') return a
      return a.text
    }

    return (
      <div key={ idx }
           className="answers cursor_pointer bg_white v_margin_5 padding_10 radius_5"
           onClick={ () => onAnswerClick(ans()) }>
        <div className="columns is-mobile">
          <div className="column"><b>{ T(ans()) }</b></div>
          <div className="column is-narrow">
            <i className="fas fa-chevron-right"/>
          </div>
        </div>
      </div>
    )
  })

  const onAnswerClick = (answer: string) => {
    context.action.answer(query0, answer)
  }

  const mkInstruction = (img: any, desc: any) => {
    return (
      <div className="columns is-mobile">
        <div className="column is-narrow">
          { img }
        </div>
        <div className="column">
          { desc }
        </div>
      </div>
    )
  }

  const leftSide = (
    <div className="column is-5">
      <div className="wrapper padding_20 radius_5">
        <h1 className="title is-4 text_white">{ query0.text }</h1>
        { answersElems }

        {/*{ bookingCounter }*/ }
      </div>

      <div className="instructions padding_20 radius_5 border_solid v_margin_20 bg_white">
        <h1 className="title is-5">{ T('Instructions') }</h1>
        <hr/>

        {
          mkInstruction(
            <i className="fas fa-address-book fa-fw"/>,
            <b>{ T('Choose the type of service') }</b>,
          )
        }
        {
          mkInstruction(
            <i className="fas fa-user-clock fa-fw"/>,
            <div>
              <b>{ T('Choose your time-slot') }</b>
              <p>{ T('From 10am - 5pm everyday') }</p>
            </div>,
          )
        }
        {
          mkInstruction(
            <i className="fas fa-couch fa-fw"/>,
            <b>{ T('Our expert will get in touch with you soon') }</b>,
          )
        }
      </div>
    </div>
  )

  const rightSide = () => {
    const features = context.data.service.get.info.features.map((f, idx) => {
      return <li key={ idx }>{ T(f) }</li>
    })

    return (
      <div className='column is-7'>
        <h1 className="title text_white">
          { T(`Best ${ service.info.name } in HCMC`) }
        </h1>
        <div className="is-size-5 content margin_top_40 text_white">
          <ul>
            { features }
          </ul>
        </div>
      </div>
    )
  }

  const render = () => {
    if (isMobile()) {
      return (
        <div className="columns v_margin_20">
          { rightSide() }
          { leftSide }
        </div>
      )
    }
    return (
      <div className="columns v_margin_20">
        { leftSide }
        { rightSide() }
      </div>
    )
  }

  return (
    <DivImg className='ListingDetailQuery0' url={ service.info.image } dimmed verticalCentered
            fullScreen>
      <Container>
        { render() }
      </Container>
    </DivImg>
  )
}

export default Query0
