// enum Lang {
//   VN = 0,
//   EN = 1,
// }

import { Lang } from '../../models/Lang'
import vn from '../vn'

export const translator = (lang: Lang) => {
  return {
    T: (id: string) => {
      if (lang === Lang.VN) {
        const rs = (vn as Record<string, string>)[id]
        return rs ? rs : id
      }
      return id
    },
  }
}