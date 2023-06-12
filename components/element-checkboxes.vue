<script setup>

import { computed } from 'vue';


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


const valueProxy = computed({
  get: () => props.value || [],
  set:  v => emit('input', v),
});

</script>


<template>
  <div :class="{ 'd-flex align-center flex-wrap': props.field.inline }">

    <v-label class="me-4" :class="{ 'text-error': props.error, 'text-success': props.success, }">
      {{ props.field.label }}
    </v-label>

    <v-checkbox
      v-for="item of props.field.items" :key="item.value || item"
      :label="item.title || item"
      :density="item.density || props.field.density"
      :direction="item.direction || props.field.direction"
      :prepend-icon="item.prependIcon || props.field.prependIcon"
      :append-icon="item.appendIcon || props.field.appendIcon"
      :color="props.field.color"
      :true-icon="item.trueIcon || props.field.trueIcon"
      :false-icon="item.falseIcon || props.field.falseIcon"
      :indeterminate-icon="item.indeterminateIcon || props.field.indeterminateIcon"
      :class="{
        'me-2 flex-grow-0': props.field.inline,
      }"
      :style="{
        height: props.field.inline ? undefined : '40px',
      }"
      :true-value="item.trueValue || props.field.trueValue"
      :false-value="item.falseValue || props.field.falseValue"
      multiple
      :value="item.value || item"
      :readonly="item.readonly || props.field.readonly"
      :disabled="item.disabled || props.field.disabled"
      v-model="valueProxy"
      :error="props.error"
      :success="props.success"
      hide-details
    />

    <div v-if="props.messages?.length > 0" class="mt-2 text-error">
      <p v-for="message of props.messages" :key="message" class="text-caption">
        {{ message }}
      </p>
    </div>

  </div>
</template>