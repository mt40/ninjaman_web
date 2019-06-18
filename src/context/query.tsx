export interface QueryActions {
  /** Answers current query. */
  answerQuery: (answer: string) => void

  goToFirst: () => void

  goBack: (removeLastAnswer: boolean) => void

  toggleUserInfoForm: () => void
}

export const defaultQueryActions: QueryActions = {
  answerQuery: () => {},
  goToFirst: () => {},
  goBack: () => {},
  toggleUserInfoForm: () => {},
}

export interface QueryContext {
  current: number
  answers: string[]
  showUserInfoForm: boolean
}