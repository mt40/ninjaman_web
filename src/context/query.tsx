export interface QueryActions {
  /** Answers current query. */
  answerQuery: (answer: string) => void

  goToFirst: () => void

  goBack: () => void
}

export const defaultQueryActions: QueryActions = {
  answerQuery: () => {
  },
  goToFirst: () => {
  },
  goBack: () => {
  },
}

export interface QueryContext {
  current: number
  answers: string[]
}