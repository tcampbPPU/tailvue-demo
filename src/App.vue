<script setup lang="ts">
import { useToast } from "tailvue";

const $toast = useToast();
console.log($toast);

const toggleTheme = () => document.body.classList.toggle("dark");
</script>

<template>
  <div class="min-h-screen bg-gray-100 dark:bg-gray-900">
    <div class="flex">
      <button
        class="mx-auto mt-8 px-4 py-2 rounded-md bg-gray-700 dark:bg-gray-100"
        @click="$toast.show({ title: 'This is a toast', timeout: 3000 })"
      >
        Show Toast
      </button>
      <button
        class="mx-auto mt-8 px-4 py-2 rounded-md bg-gray-700 dark:bg-gray-100"
        @click="toggleTheme"
      >
        Toggle Dark Mode
      </button>
    </div>
  </div>
</template>
