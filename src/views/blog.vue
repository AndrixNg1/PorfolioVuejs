<template>
  <section class="blog text-white px-6 py-28 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800">
    <!-- Header -->
    <div class="text-center max-w-3xl mx-auto mb-24">
      <h1 class="text-5xl md:text-6xl font-extrabold text-emerald-400 mb-5">From the Blog</h1>
      <p class="text-gray-300 text-lg md:text-xl leading-relaxed">
        Discover my insights, practical advice, and everyday experiences as a developer —
        a genuine look into the mindset, challenges, and creativity that shape modern tech building.
      </p>
    </div>

    <!-- Blog Posts -->
    <div class="max-w-6xl mx-auto flex flex-col gap-24">
      <RouterLink v-for="(post, index) in posts" :key="index" :to="`/blog/${post.slug}`" class="group flex flex-col lg:flex-row items-center lg:items-stretch gap-10 hover:bg-gray-800/70
               backdrop-blur-md p-10 rounded-3xl shadow-2xl transition-all duration-500 hover:scale-[1.02]">
        <!-- Image -->
        <div class="w-full lg:w-1/2 flex-shrink-0">
          <img v-if="post.cover" :src="post.cover" alt="Cover"
            class="w-full h-80 md:h-[420px] object-cover rounded-2xl transition-transform duration-500 group-hover:scale-[1.04]" />
        </div>

        <!-- Content -->
        <div class="flex flex-col justify-between flex-1 text-left h-full">
          <div>
            <div class="flex flex-wrap items-center gap-4 mb-6">
              <p class="text-gray-400 text-sm md:text-base">{{ formatDate(post.date) }}</p>
              <span
                class="px-3 py-1 bg-emerald-400/10 text-emerald-400 text-xs md:text-sm font-semibold rounded-full uppercase tracking-wide">
                Dev
              </span>
            </div>

            <h2 class="text-3xl md:text-4xl font-bold mb-5 text-white group-hover:text-emerald-400 transition-colors">
              {{ post.title }}
            </h2>

            <p class="text-gray-300 text-base md:text-lg leading-relaxed mb-8 line-clamp-3">
              {{ post.description }}
            </p>
          </div>

          <div class="flex items-center gap-4 border-t border-gray-700 pt-6">
            <img :src="post.avatar || '/images/avatar.png'" alt="Author"
              class="w-14 h-14 rounded-full object-cover ring-2 ring-emerald-500/30" />
            <div>
              <p class="font-semibold text-white text-base md:text-lg">
                {{ post.author || 'Unknown author' }}
              </p>
              <p class="text-sm md:text-base text-gray-400">
                {{ post.role || 'Developer' }}
              </p>
            </div>
          </div>
        </div>
      </RouterLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import fm from 'front-matter'

interface PostMeta {
  title: string
  description: string
  date: string
  cover?: string
  slug: string
  avatar?: string
  author?: string
  role?: string
}

const posts = ref<PostMeta[]>([])

const importAll = import.meta.glob('@/content/posts/*.md', { eager: true, as: 'raw' })

onMounted(() => {
  posts.value = Object.entries(importAll)
    .map(([path, rawContent]) => {
      if (typeof rawContent !== 'string') return null
      const { attributes } = fm(rawContent)
      const slug = path.split('/').pop()?.replace('.md', '') ?? ''
      if (typeof attributes !== 'object' || attributes === null) return null
      return { ...(attributes as Record<string, any>), slug } as PostMeta
    })
    .filter((post): post is PostMeta => !!post)
})

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  line-clamp: 3;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.group:hover img {
  transform: scale(1.03);
}
</style>
