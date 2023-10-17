import { defineAsyncComponent } from 'vue';
import { registerFormElement, registerTransformer, appendValueProcessor } from 'unified-form';


registerFormElement({
  identifier: 'series',
  component: defineAsyncComponent(() => import('./components/element-series.vue')),
});


registerFormElement({
  identifier: 'text',
  component: defineAsyncComponent(() => import('./components/element-text.vue')),
});

registerTransformer({
  criterion: f => f.identifier === 'number',
  transducer: f => ({
    ...f,
    identifier: 'text',
    type: 'number',
  })
});

appendValueProcessor({
  criterion: f => f.type === 'number',
  processor: v => Number(v),
});


registerFormElement({
  identifier: 'textarea',
  component: defineAsyncComponent(() => import('./components/element-textarea.vue')),
});

registerFormElement({
  identifier: 'checkbox',
  component: defineAsyncComponent(() => import('./components/element-checkbox.vue')),
});

registerFormElement({
  identifier: 'checkboxes',
  component: defineAsyncComponent(() => import('./components/element-checkboxes.vue')),
});

registerFormElement({
  identifier: 'select',
  component: defineAsyncComponent(() => import('./components/element-select.vue')),
});

registerFormElement({
  identifier: 'radiobuttons',
  component: defineAsyncComponent(() => import('./components/element-radiobuttons.vue')),
});
