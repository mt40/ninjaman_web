import React from 'react'
import './ReviewLabel.css'
import _ from 'lodash'
import { translator } from '../config/translation/util'
import { appContext } from '../App'

interface ReviewLabelProp {
  rank: ReviewRank
  reviewCount: number
}

export class ReviewRank {
  id: number // will be used to sort
  text: string
  cssClass: string

  constructor(id: number, text: string) {
    this.id = id
    this.text = text
    this.cssClass = _.snakeCase(text)
  }

  static superPositive = new ReviewRank(0, 'Super Positive')
  static mostlyPositive = new ReviewRank(1, 'Mostly Positive')
  static positive = new ReviewRank(2, 'Positive')

  static ranks = [
    ReviewRank.superPositive,
    ReviewRank.mostlyPositive,
    ReviewRank.positive,
  ]
}

const ReviewLabel: React.FC<ReviewLabelProp> = (props) => {
  const context = React.useContext(appContext)
  const T = translator(context.data.lang).T

  return (
    <span className='ReviewLabel'>
      <span className={ props.rank.cssClass }>{ props.rank.text }</span>
      { ` (${ props.reviewCount } ${ T('reviews') })` }
    </span>
  )
}

export default ReviewLabel
