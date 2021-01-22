import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { dndApi } from './AxiosService'

class SpellsService {
  async getSpells() {
    try {
      const res = await dndApi.get('')
      AppState.spells = res.data.results
    } catch (error) {
      logger(error)
    }
  }

  async getOne(index) {
    try {
      const res = await dndApi.get(index)
      AppState.activeSpell = res.data
    } catch (error) {
      logger(error)
    }
  }
}
export const spellsService = new SpellsService()
