<template>
  <p @click="getOne()">
    {{ spellProp.name }}
  </p>
</template>

<script>
import { spellsService } from '../services/SpellsService'
export default {
  name: 'Spell',
  props: {
    spellProp: { type: Object, required: true }

  },
  setup(props) {
    return {
      getOne() {
        spellsService.getOne(props.spellProp.index)
      }
    }
  }
}
</script>
<style scoped>

</style>
