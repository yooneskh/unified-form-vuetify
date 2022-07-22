import { markRaw } from 'vue';
import { registerFormElement, registerTransformer } from 'unified-form';


import ElementText from './components/element-text.vue';

registerFormElement({
  identifier: 'text',
  component: markRaw(ElementText),
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
