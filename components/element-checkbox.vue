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
  <v-checkbox
    :label="props.field.label"
    :density="props.field.density"
    :direction="props.field.direction"
    :prepend-icon="props.field.prependIcon"
    :append-icon="props.field.appendIcon"
    :color="props.field.color"
    :true-icon="props.field.trueIcon"
    :false-icon="props.field.falseIcon"
    :indeterminate-icon="props.field.indeterminateIcon"
    :multiple="props.field.multiple"
    :true-value="props.field.trueValue"
    :false-value="props.field.falseValue"
    :readonly="props.field.readonly"
    :disabled="props.field.disabled"
    :model-value="props.value"
    @update:model-value="emit('input', $event)"
    :error="props.error"
    :success="props.success"
    :messages="props.messages"
    hide-details="auto"
  />
</template>