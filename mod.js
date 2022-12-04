import { markRaw } from 'vue';
import { registerFormElement, registerTransformer } from 'unified-form';


registerFormElement({
  identifier: 'text',
  component: defineAsyncComponent(() => import('./components/element-text.vue')),
  valueProcessor: (v, f) => f.type === 'number' ? Number(v) : v
});

registerTransformer({
  criterion: f => f.identifier === 'number',
  transducer: f => ({
    ...f,
    identifier: 'text',
    type: 'number',
  })
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
