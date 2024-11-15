<template>
<nav class="navbar-container">
    <div class="navbar-inner">
      <div class="navbar-content">
        <!-- Logo/Name -->
        <div class="flex-shrink-0">
          <NuxtLink to="/" class="navbar-brand">
            Avi Karalis
          </NuxtLink>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:block">
          <div class="ml-10 flex items-center space-x-8">
            <NuxtLink v-for="item in navigationItems" 
              :key="item.name"
              :to="item.href"
              class="nav-link"
              active-class="nav-link-active"
            >
              {{ item.name }}
            </NuxtLink>
          </div>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button @click="isOpen = !isOpen" 
            class="mobile-menu-button"
          >
            <span class="sr-only">Open main menu</span>
            <svg class="menu-icon" :class="{'hidden': isOpen, 'block': !isOpen}" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg class="menu-icon" :class="{'block': isOpen, 'hidden': !isOpen}" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform -translate-y-4 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-4 opacity-0"
    >
      <div v-if="isOpen" class="mobile-menu">
        <div class="mobile-menu-items">
          <NuxtLink v-for="item in navigationItems" 
            :key="item.name"
            :to="item.href"
            class="mobile-nav-link"
            active-class="mobile-nav-link-active"
            @click="isOpen = false"
          >
            {{ item.name }}
          </NuxtLink>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup lang="ts">
const isOpen = ref(false)

const navigationItems = [
  { name: 'About', href: '#about' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' }
]

// Close mobile menu when resizing to desktop
const handleResize = () => {
  if (window.innerWidth >= 768 && isOpen.value) {
    isOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
.navbar-container {
  @apply fixed w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm;
}

.navbar-inner {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}

.navbar-content {
  @apply flex items-center justify-between h-16;
}

.navbar-brand {
  @apply text-aizome-500 hover:text-aizome-400 transition-colors duration-300 text-xl font-medium;
}

.nav-link {
  @apply relative text-gray-700 dark:text-gray-300 hover:text-aizome-500 dark:hover:text-aizome-300 px-3 py-2 text-sm font-medium transition-colors duration-300;
}

.nav-link::after {
  content: '';
  @apply absolute bottom-0 left-1/2 w-0 h-0.5 bg-current transition-all duration-300 -translate-x-1/2;
}

.nav-link:hover::after,
.nav-link-active::after {
  @apply w-full;
}

.nav-link-active {
  @apply text-aizome-500 dark:text-aizome-300;
}

.mobile-menu-button {
  @apply inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-aizome-500 dark:hover:text-aizome-300 focus:outline-none;
}

.menu-icon {
  @apply h-6 w-6;
}

.mobile-menu {
  @apply md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm;
}

.mobile-menu-items {
  @apply px-2 pt-2 pb-3 space-y-1;
}

.mobile-nav-link {
  @apply block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-aizome-500 dark:hover:text-aizome-300 transition-colors duration-300;
}

.mobile-nav-link-active {
  @apply text-aizome-500 dark:text-aizome-300;
}
</style>