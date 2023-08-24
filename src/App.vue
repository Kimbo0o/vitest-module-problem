<template>
  <div id="app">
    <div ref="canvas" id="modeler"></div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import BpmnModeler from 'bpmn-js/lib/Modeler';
import {
  BpmnPropertiesPanelModule,
  CamundaPlatformPropertiesProviderModule,
  BpmnPropertiesProviderModule,
} from 'bpmn-js-properties-panel';

const canvas = ref();

const modeler = new BpmnModeler({
  additionalModules: [
    BpmnPropertiesPanelModule,
    CamundaPlatformPropertiesProviderModule,
    BpmnPropertiesProviderModule,
  ],
});

onMounted(() => {
  console.log('mounted');

  console.log(canvas.value);
  modeler.attachTo(canvas.value);
});
</script>
