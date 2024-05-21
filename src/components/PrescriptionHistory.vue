<template>
  <b-card title="Prescription History">
    <b-card-text>
      <p v-for="p in history" :key="p.id">
        <b>{{ new Date(p.date_ms).toLocaleDateString() }}</b>
        <b-table striped small :fields="fields" :items="[p.left, p.right]"></b-table>
      </p>
    </b-card-text>
  </b-card>
</template>

<script>
export default {
  name: 'PrescriptionHistory'
}
</script>