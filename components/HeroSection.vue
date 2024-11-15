<template>
  <section
    class="relative h-screen flex items-center justify-center overflow-hidden"
  >
    <!-- Background gradient -->
    <div
      class="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800"
    ></div>
    <!-- Background gradient with Seigaiha pattern -->
    <div
      class="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 dark:from-black dark:to-gray-900"
    >
      <div
        class="seigaiha-pattern absolute inset-0 opacity-80 mix-blend-overlay"
      ></div>
    </div>
    <!-- Animated background shapes -->
    <div class="absolute inset-0">
      <!-- Large Ink Drops -->
      <div class="ink-container">
        <div
          v-for="n in 3"
          :key="n"
          :class="['ink-drop', `ink-${n}`]"
          :style="{
            '--delay': `${(n - 1) * 2}s`,
            '--scale': `${1.2 - (n - 1) * 0.1}`,
          }"
        ></div>
      </div>

      <!-- Floating Particles -->
      <div class="particles">
        <div
          v-for="n in 20"
          :key="n"
          class="particle"
          :style="{
            '--delay': `${Math.random() * 5}s`,
            '--duration': `${5 + Math.random() * 5}s`,
            '--size': `${Math.random() * 3 + 1}px`,
            '--start-x': `${Math.random() * 100}%`,
            '--end-x': `${Math.random() * 100}%`,
          }"
        ></div>
      </div>
    </div>
    <!-- Content -->
    <div class="relative z-10 text-center px-4">
      <h1
        class="text-5xl md:text-7xl font-bold mb-6 text-gray-900 dark:text-white animate-fade-in"
      >
        Hi, I'm <span class="text-indigo-600 dark:text-indigo-400">Avi</span>
      </h1>
      <p
        class="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in animation-delay-200"
      >
        Full Stack Developer passionate about creating beautiful and functional
        web experiences
      </p>
      <div
        class="flex gap-4 justify-center animate-fade-in animation-delay-400"
      >
        <a
          href="#contact"
          class="px-8 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors"
        >
          Get in Touch
        </a>
        <a
          href="#projects"
          class="px-8 py-3 border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 rounded-full hover:bg-indigo-50 dark:hover:bg-gray-800 transition-colors"
        >
          View My Work
        </a>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div
      class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
    >
      <svg
        class="w-6 h-6 text-gray-600 dark:text-gray-400"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
      </svg>
    </div>
  </section>
</template>

<script setup lang="js"></script>

<style scoped>
/* Seigaiha pattern */
.seigaiha-pattern {
    background-color: silver;
        background-image: radial-gradient(circle at 100% 150%, silver 24%, white 24%, white 28%, silver 28%, silver 36%, white 36%, white 40%, transparent 40%, transparent), radial-gradient(circle at 0px 150%, silver 24%, white 24%, white 28%, silver 28%, silver 36%, white 36%, white 40%, transparent 40%, transparent), radial-gradient(circle at 50% 100%, white 10%, silver 10%, silver 23%, white 23%, white 30%, silver 30%, silver 43%, white 43%, white 50%, silver 50%, silver 63%, white 63%, white 71%, transparent 71%, transparent), radial-gradient(circle at 100% 50%, white 5%, silver 5%, silver 15%, white 15%, white 20%, silver 20%, silver 29%, white 29%, white 34%, silver 34%, silver 44%, white 44%, white 49%, transparent 49%, transparent), radial-gradient(circle at 0px 50%, white 5%, silver 5%, silver 15%, white 15%, white 20%, silver 20%, silver 29%, white 29%, white 34%, silver 34%, silver 44%, white 44%, white 49%, transparent 49%, transparent);
        background-size: 100px 50px;
        --darkreader-inline-bgcolor: #353b3e;
        --darkreader-inline-bgimage: radial-gradient(circle at 100% 150%, #353b3e 24%, #0a0c0d 24%, #0a0c0d 28%, #353b3e 28%, #353b3e 36%, #0a0c0d 36%, #0a0c0d 40%, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0)), radial-gradient(circle at 0px 150%, #353b3e 24%, #0a0c0d 24%, #0a0c0d 28%, #353b3e 28%, #353b3e 36%, #0a0c0d 36%, #0a0c0d 40%, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0)), radial-gradient(circle at 50% 100%, #0a0c0d 10%, #353b3e 10%, #353b3e 23%, #0a0c0d 23%, #0a0c0d 30%, #353b3e 30%, #353b3e 43%, #0a0c0d 43%, #0a0c0d 50%, #353b3e 50%, #353b3e 63%, #0a0c0d 63%, #0a0c0d 71%, rgba(0, 0, 0, 0) 71%, rgba(0, 0, 0, 0)), radial-gradient(circle at 100% 50%, #0a0c0d 5%, #353b3e 5%, #353b3e 15%, #0a0c0d 15%, #0a0c0d 20%, #353b3e 20%, #353b3e 29%, #0a0c0d 29%, #0a0c0d 34%, #353b3e 34%, #353b3e 44%, #0a0c0d 44%, #0a0c0d 49%, rgba(0, 0, 0, 0) 49%, rgba(0, 0, 0, 0)), radial-gradient(circle at 0px 50%, #0a0c0d 5%, #353b3e 5%, #353b3e 15%, #0a0c0d 15%, #0a0c0d 20%, #353b3e 20%, #353b3e 29%, #0a0c0d 29%, #0a0c0d 34%, #353b3e 34%, #353b3e 44%, #0a0c0d 44%, #0a0c0d 49%, rgba(0, 0, 0, 0) 49%, rgba(0, 0, 0, 0));
}

/* Ink Drop Animation */
.ink-container {
    position: absolute;
    inset: 0;
    overflow: hidden;
}

.ink-drop {
    position: absolute;
    border-radius: 50%;
    background: radial-gradient(circle at center,
            rgba(35, 92, 166, 0.8) 0%,
            rgba(35, 92, 166, 0.4) 30%,
            rgba(35, 92, 166, 0.2) 50%,
            transparent 70%);
    mix-blend-mode: screen;
    filter: blur(10px);
    opacity: 0;
    transform: scale(0);
    animation: inkSpread 8s ease-in-out infinite;
    animation-delay: var(--delay);
}

.ink-1 {
    width: 800px;
    height: 800px;
    top: 10%;
    left: 10%;
    filter: blur(20px);
}

.ink-2 {
    width: 600px;
    height: 600px;
    top: 30%;
    right: 15%;
    filter: blur(15px);
}

.ink-3 {
    width: 400px;
    height: 400px;
    bottom: 25%;
    left: 35%;
    filter: blur(12px);
}

@keyframes inkSpread {
    0% {
        transform: scale(0) rotate(0deg);
        opacity: 0;
    }

    20% {
        opacity: 0.8;
    }

    40% {
        transform: scale(0.8) rotate(45deg);
        opacity: 0.4;
    }

    70% {
        transform: scale(var(--scale)) rotate(90deg);
        opacity: 0.2;
    }

    100% {
        transform: scale(calc(var(--scale) * 1.8)) rotate(120deg);
        opacity: 0;
    }
}

/* Particle Animation */
.particle {
    position: absolute;
    width: var(--size);
    height: var(--size);
    background-color: #235CA6;
    border-radius: 50%;
    opacity: 0;
    left: var(--start-x);
    bottom: -20px;
    animation: float var(--duration) ease-in-out infinite;
    animation-delay: var(--delay);
}

@keyframes float {
    0% {
        opacity: 0;
        transform: translateY(0);
    }

    20% {
        opacity: 0.5;
    }

    80% {
        opacity: 0.3;
    }

    100% {
        opacity: 0;
        transform: translateY(-100vh) translateX(calc(var(--end-x) - var(--start-x)));
    }
}

.animate-fade-in {
    animation: fadeIn 1s ease-out forwards;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
