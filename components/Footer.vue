<template>
    <footer class="bg-gray-900 text-gray-300">
        <!-- Main Footer -->
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                <!-- Brand -->
                <div class="col-span-1 md:col-span-2">
                    <h3 class="text-2xl font-bold text-white mb-4">Avi Karalis</h3>
                    <p class="text-gray-400 mb-4">
                        Building digital experiences with modern web technologies.
                    </p>
                    <div class="flex space-x-4">
                        <a v-for="social in socials" :key="social.name" :href="social.url" target="_blank"
                            class="text-gray-400 hover:text-white transition-colors">
                            <component :is="social.icon" class="w-5 h-5" />
                        </a>
                    </div>
                </div>

                <!-- Quick Links -->
                <div>
                    <h4 class="text-lg font-semibold text-white mb-4">Quick Links</h4>
                    <ul class="space-y-2">
                        <li v-for="link in quickLinks" :key="link.name">
                            <a :href="link.url" class="text-gray-400 hover:text-white transition-colors">
                                {{ link.name }}
                            </a>
                        </li>
                    </ul>
                </div>

                <!-- Contact -->
                <div>
                    <h4 class="text-lg font-semibold text-white mb-4">Contact</h4>
                    <ul class="space-y-2">
                        <li>
                            <a href="mailto:your.email@example.com"
                                class="text-gray-400 hover:text-white transition-colors">
                                your.email@example.com
                            </a>
                        </li>
                        <li class="text-gray-400">
                            Location, Country
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- Bottom Footer -->
        <div class="border-t border-gray-800">
            <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div class="flex flex-col md:flex-row justify-between items-center">
                    <p class="text-gray-400 text-sm">
                        © {{ new Date().getFullYear() }} Avi Karalis. All rights reserved.
                    </p>
                    <div class="flex space-x-6 mt-4 md:mt-0">
                        <a v-for="link in legalLinks" :key="link.name" :href="link.url"
                            class="text-gray-400 hover:text-white text-sm transition-colors">
                            {{ link.name }}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
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

const quickLinks = [
    { name: 'Home', url: '#' },
    { name: 'About', url: '#about' },
    { name: 'Projects', url: '#projects' },
    { name: 'Contact', url: '#contact' }
]

const legalLinks = [
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'Terms of Service', url: '/terms' }
]
</script>