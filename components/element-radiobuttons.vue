<script setup>

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
  <v-radio-group
    :label="props.field.label"
    :append-icon="props.field.appendIcon"
    :color="props.field.color"
    :density="props.field.density"
    :direction="props.field.direction"
    :prepend-icon="props.field.prependIcon"
    :inline="props.field.inline"
    :model-value="props.value"
    @update:model-value="emit('input', $event)"
    :error="props.error"
    :success="props.success"
    :messages="props.messages"
    hide-details="auto">

    <v-radio
      v-for="item of props.field.items" :key="item.value || item"
      :label="item.title || item"
      :value="item.value || item"
      :color="item.color || props.field.color"
      :density="item.density || props.field.density"
      :false-icon="item.falseIcon || props.field.falseIcon"
      :true-icon="item.trueIcon || props.field.trueIcon"
    />

  </v-radio-group>
</template>