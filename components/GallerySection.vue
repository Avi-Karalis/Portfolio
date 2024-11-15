<template>
    <section id="projects" class="py-20 bg-gray-50 dark:bg-gray-900">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">My Projects</h2>
                <div class="w-16 h-1 bg-indigo-600 mx-auto"></div>
            </div>

            <!-- Project Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div v-for="project in projects" :key="project.title"
                    class="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                    <!-- Project Image -->
                    <div class="aspect-video overflow-hidden">
                        <img :src="project.image" :alt="project.title"
                            class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300" />
                    </div>

                    <!-- Project Info -->
                    <div class="p-6">
                        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                            {{ project.title }}
                        </h3>
                        <p class="text-gray-600 dark:text-gray-300 mb-4">
                            {{ project.description }}
                        </p>

                        <!-- Technologies Used -->
                        <div class="flex flex-wrap gap-2 mb-4">
                            <span v-for="tech in project.technologies" :key="tech"
                                class="px-3 py-1 text-sm bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full">
                                {{ tech }}
                            </span>
                        </div>

                        <!-- Project Links -->
                        <div class="flex gap-4">
                            <a v-if="project.demo" :href="project.demo" target="_blank"
                                class="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors">
                                Live Demo →
                            </a>
                            <a v-if="project.github" :href="project.github" target="_blank"
                                class="text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
                                GitHub →
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const projects = [
    {
        title: 'Project 1',
        description: 'A modern web application built with Vue.js and Node.js.',
        image: '/images/project1.jpg',
        technologies: ['Vue.js', 'Node.js', 'MongoDB'],
        demo: 'https://project1.com',
        github: 'https://github.com/username/project1'
    },
    {
        title: 'Project 2',
        description: 'An e-commerce platform with real-time inventory management.',
        image: '/images/project2.jpg',
        technologies: ['React', 'Express', 'PostgreSQL'],
        demo: 'https://project2.com',
        github: 'https://github.com/username/project2'
    },
    {
        title: 'Project 3',
        description: 'A mobile-first social media dashboard with analytics.',
        image: '/images/project3.jpg',
        technologies: ['Nuxt.js', 'Firebase', 'TailwindCSS'],
        demo: 'https://project3.com',
        github: 'https://github.com/username/project3'
    }
]
</script>