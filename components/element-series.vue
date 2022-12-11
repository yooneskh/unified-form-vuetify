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


/* actions */

function handleAddItem() {
  emit(
    'input',
    [
      ...(props.value ?? []),
      JSON.parse(JSON.stringify( props.field.itemBase ?? {} ))
    ],
  );
}

function handleDeleteItem(item, itemIndex) {
  emit('input', props.value.filter((_, index) => itemIndex !== index));
}

function handleMoveItem(item, index, direction) {

  const items = [...props.value];
  const poppedItem = items.splice(index, 1)[0];

  items.splice(index + direction, 0, poppedItem);

  emit('input', items);

}


/* template */

import UnifiedForm from 'unified-form';

</script>


<template>
  <div class="form-element-series pa-3" style="border: 1px solid rgba(0, 0, 0, 0.175); border-radius: 4px;">

    <v-label class="mb-2">

      {{ props.field.label }}

      <div class="text-caption ms-2">
        ({{ (props.value?.length > 0) ? (`${props.value.length} items`) : ('No items') }})
      </div>

      <v-btn
        variant="tonal"
        size="small"
        density="comfortable"
        class="text-none ms-3"
        prepend-icon="mdi-plus"
        color="primary"
        rounded="pill"
        @click="handleAddItem()">
        Item
      </v-btn>

    </v-label>

    <template v-if="!props.value || !(props.value.length > 0)">
      <div class="text-caption text-center pb-2">
        No Items
      </div>
    </template>

    <template v-else>
      <v-row dense>
        <v-col v-for="(item, index) of props.value" :key="index" :cols="props.field.itemWidth || 12">

          <unified-form
            :target="item"
            :fields="props.field.itemFields"
            style="border: 1px solid rgba(0, 0, 0, 0.175); border-radius: 4px;"
          />

          <div class="series-item-actions d-flex" style="gap: 4px;">

            <v-btn
              v-if="index > 0"
              variant="tonal"
              icon="mdi-chevron-left"
              size="x-small"
              density="comfortable"
              @click="handleMoveItem(item, index, -1)"
            />

            <v-btn
              v-if="index < props.value.length - 1"
              variant="tonal"
              icon="mdi-chevron-right"
              size="x-small"
              density="comfortable"
              @click="handleMoveItem(item, index, 1)"
            />

            <v-btn
              variant="tonal"
              color="error"
              icon="mdi-close"
              size="x-small"
              density="comfortable"
              @click="handleDeleteItem(item, index)"
            />

          </div>

        </v-col>
      </v-row>
    </template>

  </div>
</template>


<style scoped>

  .v-col {
    position: relative;
  }

  .v-col .series-item-actions {

    position: absolute;
    display: inline-block;

    top: 8px;
    inset-inline-end: 8px;

    opacity: 0;
    pointer-events: none;

    transition: all 300ms ease-in-out;

  }

  .v-col:hover .series-item-actions {
    opacity: 1;
    pointer-events: unset;
  }

</style>