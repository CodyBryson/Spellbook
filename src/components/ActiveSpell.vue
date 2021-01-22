<template>
  <div class="col m-2 p-2"
       v-if="state.activeSpell.name"
  >
    <h1 class="fancyFont m-2">
      {{ state.activeSpell.name }}
    </h1>
    <h5 class="p-2">
      Level {{ state.activeSpell.level }} {{ state.activeSpell.school.name }}
    </h5>
    <div>
      <p>Range: {{ state.activeSpell.range }} | Components: {{ state.activeSpell.components }} | Duration: {{ state.activeSpell.duration }} </p>
    </div>
    <div class="col">
      <h5 class="fancyFont">
        <b>{{ state.activeSpell.desc }}</b>
      </h5>
    </div>
  </div>
</template>

<script>
import { AppState } from '../AppState'
import { reactive, computed } from 'vue'
export default {

  name: 'ActiveSpell',
  setup() {
    const state = reactive({
      activeSpell: computed(() => AppState.activeSpell)
    })
    return {
      state
    }
  }
}
</script>
<style scoped>
.fancyFont{
  font-family: 'Homemade Apple', cursive;

}
</style>
