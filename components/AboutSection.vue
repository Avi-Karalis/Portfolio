<template>
    <section id="about" class="py-20 bg-white dark:bg-gray-800">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
                <div class="w-16 h-1 bg-indigo-600 mx-auto"></div>
            </div>

            <div class="grid md:grid-cols-2 gap-12 items-center">
                <!-- Profile Image -->
                <div class="relative">
                    <div class="aspect-square rounded-2xl overflow-hidden shadow-xl">
                        <img src="../assets//images/Budapest_2022-126.jpg" alt="Avi Karalis" class="w-full h-full object-cover" />
                    </div>
                    <div
                        class="absolute -bottom-6 -right-6 w-48 h-48 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl -z-10">
                    </div>
                </div>

                <!-- About Content -->
                <div>
                    <h3 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                        Full Stack Developer
                    </h3>
                    <p class="text-gray-600 dark:text-gray-300 mb-6">
                        I'm a passionate developer with a strong foundation in both front-end and back-end technologies.
                        My journey in software development has led me to create innovative solutions that combine
                        beautiful design with robust functionality.
                    </p>

                    <!-- Skills -->
                    <div class="space-y-4">
                        <h4 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Technical Skills</h4>
                        <div class="grid grid-cols-2 gap-4">
                            <div v-for="(skill, index) in skills" :key="index" class="flex items-center space-x-2">
                                <div class="w-2 h-2 bg-indigo-600 rounded-full"></div>
                                <span class="text-gray-700 dark:text-gray-300">{{ skill }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const skills = [
    'JavaScript/TypeScript',
    'Vue.js/Nuxt.js',
    'React/Next.js',
    'Node.js',
    'Python',
    'SQL/NoSQL',
    'AWS/Cloud',
    'DevOps'
]
</script>

<style scoped>
.aspect-square {
    aspect-ratio: 1 / 1;
}
</style>