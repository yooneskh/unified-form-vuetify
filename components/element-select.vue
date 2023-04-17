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

  <v-combobox
    v-if="props.field.addable"
    :label="props.field.label"
    :variant="props.field.variant"
    :type="props.field.type"
    :density="props.field.density"
    :direction="props.field.direction"
    :prepend-icon="props.field.prependIcon"
    :append-icon="props.field.appendIcon"
    :prepend-inner-icon="props.field.prependInnerIcon"
    :color="props.field.color"
    :autofocus="props.field.autofocus"
    :placeholder="props.field.placeholder"
    :prefix="props.field.prefix"
    :suffix="props.field.suffix"
    :hint="props.field.hint"
    :persistent-hint="props.field.persistentHint"
    :multiple="props.field.multiple"
    :chips="props.field.chips"
    :closeable-chips="props.field.closeableChips"
    :menu-icon="props.field.menuIcon"
    :menu-props="props.field.menuProps"
    :items="props.field.items"
    :item-value="props.field.itemValue"
    :item-title="props.field.itemTitle"
    :model-value="props.value"
    @update:model-value="emit('input', $event)"
    :error="props.error"
    :success="props.success"
    :messages="props.messages"
    hide-details="auto">
    <template v-for="action of props.field.actions" #[action.side] :key="action.title + action.icon">
      <v-btn
        :density="action.icon ? 'comfortable' : undefined"
        class="mt-n2"
        v-bind="action">
        <v-icon v-if="action.icon">{{ action.icon }}</v-icon>
        <span v-else>{{ action.title }}</span>
      </v-btn>
    </template>
  </v-combobox>

  <v-autocomplete
    v-else-if="props.field.searchable"
    :label="props.field.label"
    :variant="props.field.variant"
    :type="props.field.type"
    :density="props.field.density"
    :direction="props.field.direction"
    :prepend-icon="props.field.prependIcon"
    :append-icon="props.field.appendIcon"
    :prepend-inner-icon="props.field.prependInnerIcon"
    :color="props.field.color"
    :autofocus="props.field.autofocus"
    :placeholder="props.field.placeholder"
    :prefix="props.field.prefix"
    :suffix="props.field.suffix"
    :hint="props.field.hint"
    :multiple="props.field.multiple"
    :chips="props.field.chips"
    :closeable-chips="props.field.closeableChips"
    :menu-icon="props.field.menuIcon"
    :menu-props="props.field.menuProps"
    :items="props.field.items"
    :item-value="props.field.itemValue"
    :item-title="props.field.itemTitle"
    :model-value="props.value"
    @update:model-value="emit('input', $event)"
    :error="props.error"
    :success="props.success"
    :messages="props.messages"
    hide-details="auto">
    <template v-for="action of props.field.actions" #[action.side] :key="action.title + action.icon">
      <v-btn
        :density="action.icon ? 'comfortable' : undefined"
        class="mt-n2"
        v-bind="action">
        <v-icon v-if="action.icon">{{ action.icon }}</v-icon>
        <span v-else>{{ action.title }}</span>
      </v-btn>
    </template>
  </v-autocomplete>

  <v-select
    v-else
    :label="props.field.label"
    :variant="props.field.variant"
    :type="props.field.type"
    :density="props.field.density"
    :direction="props.field.direction"
    :prepend-icon="props.field.prependIcon"
    :append-icon="props.field.appendIcon"
    :prepend-inner-icon="props.field.prependInnerIcon"
    :color="props.field.color"
    :autofocus="props.field.autofocus"
    :placeholder="props.field.placeholder"
    :prefix="props.field.prefix"
    :suffix="props.field.suffix"
    :hint="props.field.hint"
    :multiple="props.field.multiple"
    :chips="props.field.chips"
    :closeable-chips="props.field.closeableChips"
    :menu-icon="props.field.menuIcon"
    :menu-props="props.field.menuProps"
    :items="props.field.items"
    :item-value="props.field.itemValue"
    :item-title="props.field.itemTitle"
    :model-value="props.value"
    @update:model-value="emit('input', $event)"
    :error="props.error"
    :success="props.success"
    :messages="props.messages"
    hide-details="auto">
    <template v-for="action of props.field.actions" #[action.side] :key="action.title + action.icon">
      <v-btn
        :density="action.icon ? 'comfortable' : undefined"
        class="mt-n2"
        v-bind="action">
        <v-icon v-if="action.icon">{{ action.icon }}</v-icon>
        <span v-else>{{ action.title }}</span>
      </v-btn>
    </template>
  </v-select>

</template>