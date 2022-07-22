<script setup>

import { ref } from 'vue';


/* interface */

const props = defineProps({
  value: {},
  field: {},
  success: Boolean,
  error: Boolean,
  messages: Array,
});

const emit = defineEmits([
  'input',
]);

</script>


<template>
  <v-text-field
    :label="props.field.label"
    :model-value="props.value"
    @update:model-value="emit('input', $event)"
    :error="error"
    :messages="messages"
    :hide-details="!messages?.length"
  />
</template>