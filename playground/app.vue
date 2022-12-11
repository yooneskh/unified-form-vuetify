<script setup>

const target = ref({
  name: '',
  persons: [
    {
      name: 'Yoones',
      lastName: 'Khoshghadam',
    },
    {
      name: 'Test',
      lastName: 'Tester',
    },
  ],
});

const validations = ref({});

</script>


<template>
  <v-app>
    <v-main class="bg-grey-lighten-4">
      <v-container>

        <v-row>
          <v-col cols="6">
            <v-card>
              <v-card-text>
                <pre>{{ target }}</pre>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="6">
            <v-card>
              <v-card-text>
                <pre>{{ validations }}</pre>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <v-card class="mt-4">
          <v-card-text>
            <u-form
              :target="target"
              @update:validations="validations = $event"
              :fields="[
                {
                  key: 'name', identifier: 'text', label: 'Name', width: 4,
                  variants: {
                    en: {},
                    fa: {},
                  },
                },
                {
                  key: 'age', identifier: 'number', label: 'Age', width: 4,
                  rules: [
                    v => v >= 18 || 'Age must be more than 18'
                  ],
                },
                {
                  key: 'conforms', identifier: 'checkbox', label: 'Do You Conform?', width: 4,
                  rules: [
                    v => v || 'You must conform'
                  ],
                },
                {
                  key: 'bio', identifier: 'textarea', label: 'Biography', width: 6,
                  variants: {
                    en: {},
                    fa: {},
                  },
                },
                {
                  key: 'history', identifier: 'checkboxes', label: 'Histories', width: 6,
                  items: [
                    {
                      value: 'chemistery',
                      title: 'Chemi',
                    },
                    {
                      value: 'physics',
                      title: 'Physics',
                    },
                  ],
                  rules: [
                    v => v?.includes('physics') || 'You must select physics!'
                  ],
                },
                {
                  key: 'trainedIn', identifier: 'select', label: 'Your Trainings', width: 6,
                  items: [
                    {
                      value: 'chemistery',
                      title: 'Chemi',
                    },
                    {
                      value: 'physics',
                      title: 'Physics',
                    },
                  ],
                  rules: [
                    v => v === 'physics' || 'You must select physics!'
                  ],
                },
                {
                  key: 'trainedIns', identifier: 'select', label: 'Your Trainings all', width: 6,
                  multiple: true, searchable: true, addable: true, chips: true,
                  itemValue: 'field', itemTitle: 'name',
                  items: [
                    {
                      field: 'chemistery',
                      name: 'Chemi',
                    },
                    {
                      field: 'physics',
                      name: 'Physics',
                    },
                  ],
                  rules: [
                    v => v?.includes?.('physics') || 'You must select physics!'
                  ],
                },
                {
                  key: 'gender', identifier: 'radiobuttons', label: 'Gender', width: 6,
                  inline: true,
                  items: [
                    {
                      value: 'chemistery',
                      title: 'Chemi',
                    },
                    {
                      value: 'physics',
                      title: 'Physics',
                    },
                  ],
                  rules: [
                    v => v === 'physics' || 'You must select physics!'
                  ],
                },
                {
                  key: 'persons', identifier: 'series', label: 'Persons',
                  itemWidth: 6,
                  itemFields: [
                    {
                      key: 'name', identifier: 'text', label: 'Name', width: 6,
                    },
                    {
                      key: 'lastName', identifier: 'text', label: 'Last Name', width: 6,
                    },
                  ]
                },
              ]"
            />
          </v-card-text>
        </v-card>

      </v-container>
    </v-main>
  </v-app>
</template>
