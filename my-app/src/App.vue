<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from './lib/supabaseClient'

const feedback = ref([])

async function getFeedback() {
  const { data, error } = await supabase.from('feedback').select()
  if (error) {
    console.error('Error fetching feedback:', error)
    return
  }
  feedback.value = data
}

onMounted(() => {
  getFeedback()
})
</script>

<template>
  <ul>
    <li v-for="item in feedback" :key="item.id">
      {{ item.name }} - {{ item.email }} - {{ item.feedback }}
    </li>
  </ul>
</template>