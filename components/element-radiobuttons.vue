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
    :readonly="props.field.readonly"
    :disabled="props.field.disabled"
    :model-value="props.value"
    @update:model-value="emit('input', $event)"
    :error="props.error"
    :success="props.success"
    :messages="props.messages"
    hide-details="auto">

    <template v-for="item of props.field.items" :key="item.value || item">

      <v-radio
        :label="item.title || item"
        :value="item.value || item"
        :color="item.color || props.field.color"
        :density="item.density || props.field.density"
        :false-icon="item.falseIcon || props.field.falseIcon"
        :true-icon="item.trueIcon || props.field.trueIcon"
        :readonly="item.readonly"
        :disabled="item.disabled"
      />

      <div v-if="item.text" class="text-body-2 px-4 mb-2">
        <div v-for="line of (typeof item.text === 'string' ? [item.text] : item.text)" :key="line" class="mb-1">
          {{ line }}
        </div>
      </div>

    </template>

  </v-radio-group>
</template>