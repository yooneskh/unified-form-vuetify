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
  <v-textarea
    :label="props.field.label"
    :variant="props.field.variant"
    :density="props.field.density"
    :direction="props.field.direction"
    :rows="props.field.rows"
    :max-rows="props.field.maxRows"
    :prepend-icon="props.field.prependIcon"
    :append-icon="props.field.appendIcon"
    :prepend-inner-icon="props.field.prepenInnerdIcon"
    :append-inner-icon="props.field.appendInnerIcon"
    :hint="props.field.hint"
    :model-value="props.value"
    @update:model-value="emit('input', $event)"
    :error="props.error"
    :success="props.success"
    :messages="props.messages"
    hide-details="auto"
  />
</template>