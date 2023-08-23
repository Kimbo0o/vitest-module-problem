<template>
  <div id="app"></div>
</template>

<script setup>
import BpmnModeler from 'bpmn-js/lib/Modeler';
import {
  BpmnPropertiesPanelModule,
  CamundaPlatformPropertiesProviderModule,
  BpmnPropertiesProviderModule,
} from 'bpmn-js-properties-panel';


new BpmnModeler({
  additionalModules: [
    BpmnPropertiesPanelModule,
    CamundaPlatformPropertiesProviderModule,
    BpmnPropertiesProviderModule,
  ],
});
</script>
