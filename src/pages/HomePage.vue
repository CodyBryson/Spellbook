<template>
  <div class="home flex-grow-1 d-flex flex-column continer-fluid">
    <div class="row justify-content-center">
      <div class="col-2 m-3">
        <h4>Spell List</h4>
        <div class="spellListCard">
          <Spell v-for="spell in state.spells" :key="spell.name" :spell-prop="spell" />
        </div>
      </div>
      <div class="col-6 m-3">
        <h4> Active Spell </h4>
        <div class="row activeSpellCard">
          <ActiveSpell />
        </div>
      </div>
      <div class="col-2 m-3">
        <h4> My Spells </h4>
        <div class="myspellListCard">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { spellsService } from '../services/SpellsService'
// import { logger } from '../utils/Logger'
import { AppState } from '../AppState'
export default {
  name: 'Home',
  setup() {
    const state = reactive({
      spells: computed(() => AppState.spells),
      activeSpell: computed(() => AppState.activeSpell)
    })
    onMounted(() => {
      spellsService.getSpells()
    })

    return {
      state
    }
  }
}
</script>

<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
  background-image: url(https://i.pinimg.com/originals/6e/1b/e5/6e1be5f18503ec4a41f19620aaf6b20b.jpg);
  background-size: cover;
  > img{
    height: 200px;
    width: 200px;
  }
  .spellListCard{
    max-height: 80vh;
    background-color: white;
    overflow-y: auto;
    border: 5px groove #000000;
    cursor: pointer;
  }
  .myspellListCard{
    min-height: 80vh;
    background-color: white;
    overflow-y: auto;
    border: 5px groove #000000;
    cursor: pointer;
  }
  .activeSpellCard{
    min-height: 80vh;
    background-color: white;
    border: 5px groove #000000;

  }
  .fancyFont{
    font-family: 'Homemade Apple', cursive;

  }
}
</style>
