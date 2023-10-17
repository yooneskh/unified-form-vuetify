<script setup>

import { ref, computed } from 'vue';

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


/* variants */

const hasVariants = computed(() =>
  !!props.field.variants
);

const variants = computed(() =>
  Object.keys(props.field.variants ?? {})
);


const selectedVariant = ref(variants.value[0]);

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
    :prepend-inner-icon="props.field.prependInnerIcon"
    :append-inner-icon="props.field.appendInnerIcon"
    :color="props.field.color"
    :autofocus="props.field.autofocus"
    :placeholder="props.field.placeholder"
    :prefix="props.field.prefix"
    :suffix="props.field.suffix"
    :hint="props.field.hint"
    :persistent-hint="props.field.persistentHint"
    :readonly="props.field.readonly"
    :disabled="props.field.disabled"
    :model-value="hasVariants ? props.value?.[selectedVariant] : props.value"
    @update:model-value="emit('input', $event, selectedVariant)"
    :error="props.error"
    :success="props.success"
    :messages="props.messages"
    hide-details="auto">

    <template v-if="hasVariants" #append-inner>

      <v-btn
        variant="tonal"
        size="small"
        density="comfortable"
        class="me-2 px-2"
        style="min-width: 0;">

        <div class="text-caption">
          {{ selectedVariant }}
        </div>

        <v-menu activator="parent">
          <v-list density="comfortable">
            <v-list-item
              v-for="variant of variants" :key="variant"
              :title="variant"
              @click="selectedVariant = variant"
            />
          </v-list>
        </v-menu>

      </v-btn>

    </template>

    <template v-for="action of props.field.actions" #[action.side] :key="action.title + action.icon">
      <v-btn
        :density="action.icon ? 'comfortable' : undefined"
        v-bind="action">
        <v-icon v-if="action.icon">{{ action.icon }}</v-icon>
        <span v-else>{{ action.title }}</span>
      </v-btn>
    </template>

  </v-textarea>
</template>