<template>
    <section id="contact" class="py-20 bg-white dark:bg-gray-800">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">Get in Touch</h2>
                <div class="w-16 h-1 bg-indigo-600 mx-auto"></div>
            </div>

            <div class="grid md:grid-cols-2 gap-12">
                <!-- Contact Information -->
                <div class="space-y-8">
                    <h3 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                        Let's Connect
                    </h3>
                    <p class="text-gray-600 dark:text-gray-300 mb-8">
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your
                        visions.
                    </p>

                    <!-- Contact Details -->
                    <div class="space-y-4">
                        <div class="flex items-center space-x-4">
                            <div
                                class="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center">
                                <svg class="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <a href="mailto:your.email@example.com"
                                class="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
                                your.email@example.com
                            </a>
                        </div>

                        <div class="flex items-center space-x-4">
                            <div
                                class="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center">
                                <svg class="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <span class="text-gray-600 dark:text-gray-300">
                                Location, Country
                            </span>
                        </div>
                    </div>

                    <!-- Social Links -->
                    <div class="flex space-x-4 mt-8">
                        <a v-for="social in socials" :key="social.name" :href="social.url" target="_blank"
                            class="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-indigo-100 dark:hover:bg-indigo-900/30 transition-colors">
                            <component :is="social.icon" class="w-5 h-5 text-gray-600 dark:text-gray-300" />
                        </a>
                    </div>
                </div>

                <!-- Contact Form -->
                <form @submit.prevent="handleSubmit" class="space-y-6">
                    <div>
                        <label for="name"
                            class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                        <input type="text" id="name" v-model="form.name" required
                            class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white" />
                    </div>

                    <div>
                        <label for="email"
                            class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                        <input type="email" id="email" v-model="form.email" required
                            class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white" />
                    </div>

                    <div>
                        <label for="message"
                            class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                        <textarea id="message" v-model="form.message" rows="4" required
                            class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"></textarea>
                    </div>

                    <button type="submit"
                        class="w-full px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
    name: '',
    email: '',
    message: ''
})

const socials = [
    {
        name: 'GitHub',
        url: 'https://github.com/yourusername',
        icon: 'IconGithub'
    },
    {
        name: 'LinkedIn',
        url: 'https://linkedin.com/in/yourusername',
        icon: 'IconLinkedIn'
    },
    {
        name: 'Twitter',
        url: 'https://twitter.com/yourusername',
        icon: 'IconTwitter'
    }
]

const handleSubmit = async () => {
    // Implement form submission logic here
    console.log('Form submitted:', form.value)
}
</script>