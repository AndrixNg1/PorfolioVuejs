<template>
  <section class="min-h-screen bg-[#0a0f1c] text-white px-6 py-24 md:py-32">
    <div class="max-w-7xl mx-auto space-y-20">

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

        <div class="space-y-8">
          <RouterLink to="/blog"
            class="text-emerald-400 hover:text-emerald-300 transition-colors font-medium text-lg inline-flex items-center gap-2">
            <span class="text-2xl">←</span>
            Back to blog
          </RouterLink>

          <div>
            <h1
              class="text-5xl md:text-6xl font-extrabold mb-6 leading-tight text-emerald-400 drop-shadow-[0_0_12px_rgba(16,185,129,0.4)]">
              {{ post.title }}
            </h1>
            <p class="text-gray-300 text-lg leading-relaxed mb-8">
              {{ post.description }}
            </p>
          </div>

          <div class="flex items-center gap-3 text-gray-400 mb-10">
            <span class="text-sm">{{ formatDate(post.date) }}</span>
            <span class="w-2 h-2 bg-gray-600 rounded-full"></span>
            <span class="uppercase text-emerald-400/70 text-sm tracking-wide font-semibold">
              {{ post.role || 'Développeur' }}
            </span>
          </div>

          <div class="flex items-center gap-4">
            <img v-if="post.avatar" :src="post.avatar" :alt="post.author"
              class="w-14 h-14 rounded-full object-cover ring-2 ring-emerald-500/30 shadow-md" />
            <div>
              <p class="font-semibold text-white text-lg">{{ post.author }}</p>
              <p class="text-gray-400 text-sm">{{ post.role }}</p>
            </div>
          </div>
        </div>

        <div class="space-y-12 relative">
          <img v-if="post.cover" :src="post.cover" :alt="post.title"
            class="rounded-2xl w-full object-cover shadow-2xl h-[420px] md:h-[520px]" />
        </div>

      </div>

      <div class="relative">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div class="rounded-2xl p-8  transition-shadow duration-300 ">
            <div v-for="(s, idx) in blockSections1" :key="idx" class="mb-8">
              <h1 v-if="s.title"
                class="text-2xl font-extrabold text-emerald-400 underline decoration-emerald-500/60 underline-offset-4 mb-4">
                {{ s.title }}</h1>
              <div v-if="s.html" v-html="s.html" class="prose prose-invert prose-emerald max-w-none"></div>
            </div>
          </div>
          <div class="rounded-2xl p-8  transition-shadow duration-300 ">
            <div v-for="(s, idx) in blockSections2" :key="idx" class="mb-8">
              <h1 v-if="s.title"
                class="text-2xl font-extrabold text-emerald-400 underline decoration-emerald-500/60 underline-offset-4 mb-4">
                {{ s.title }}</h1>
              <div v-if="s.html" v-html="s.html" class="prose prose-invert prose-emerald max-w-none"></div>
            </div>
          </div>
        </div>

        <!-- Vertical divider visible on large screens -->
        <div class="hidden lg:block pointer-events-none">
          <div class="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 transform">
            <div class="h-full w-px bg-gradient-to-b from-emerald-500/30 via-transparent to-emerald-500/30 shadow-lg">
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute, RouterLink } from "vue-router";
import fm from "front-matter";
import { marked } from "marked";

const route = useRoute();
const post = ref<Record<string, any>>({});
const bookBlock1 = ref("");
const bookBlock2 = ref("");
const blockTitle1 = ref<string[]>([]);
const blockTitle2 = ref<string[]>([]);
const blockSections1 = ref<Array<{ title: string; html: string }>>([]);
const blockSections2 = ref<Array<{ title: string; html: string }>>([]);

// L'objet d'importation globale (Vite/Webpack)
const importAll = import.meta.glob("@/content/posts/*.md", {
  eager: true,
  as: "raw",
});

onMounted(async () => {
  const slug = route.params.slug as string;
  const filePath = `/src/content/posts/${slug}.md`;

  const rawContent = importAll[filePath];

  if (rawContent && typeof rawContent === "string") {
    // 1. Parser le Front Matter
    const { attributes, body } = fm(rawContent);
    post.value = attributes;

    // 2. Diviser le corps du Markdown en deux blocs (optionnel)
    // Nous cherchons un séparateur explicite <!-- split --> dans le Markdown.
    // Si absent, on affiche tout le contenu dans le premier bloc et on laisse
    // le second vide.
    const SPLIT_MARKER = "<!-- split -->";
    let left = body;
    let right = "";

    if (body.includes(SPLIT_MARKER)) {
      const parts = body.split(SPLIT_MARKER);
      // If author used two markers (one to open left block and one before right),
      // take content between markers as left and after last marker as right.
      if (parts.length >= 3) {
        left = parts[1] || "";
        right = parts.slice(2).join(SPLIT_MARKER) || "";
      } else if (parts.length === 2) {
        // single marker: content before -> left, after -> right
        left = parts[0] || "";
        right = parts[1] || "";
      }
    }

    // Trim to remove stray newlines/whitespace
    left = left.trim();
    right = right.trim();

    // Extraire précisément les sections (title + content) séparées par headings
    function extractSections(md: string, maxSections = 2) {
      const lines = md.split(/\r?\n/);
      type HeadingInfo = { title: string; lineIndex: number; isSetext: boolean };
      const headings: HeadingInfo[] = [];

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const atx = line.match(/^[#]{1,6}\s+(.+)$/);
        if (atx) {
          headings.push({ title: atx[1].trim(), lineIndex: i, isSetext: false });
          continue;
        }
        // setext style: title line followed by === or ---
        if (i + 1 < lines.length && lines[i + 1].match(/^[-=]{3,}\s*$/)) {
          headings.push({ title: line.trim(), lineIndex: i, isSetext: true });
          i++; // skip underline
          continue;
        }
      }

      if (headings.length === 0) {
        return [{ title: "", content: md.trim() }];
      }

      const sections: Array<{ title: string; content: string }> = [];
      const limit = Math.min(maxSections, headings.length);

      for (let j = 0; j < limit; j++) {
        const h = headings[j];
        const startLine = h.isSetext ? h.lineIndex + 2 : h.lineIndex + 1;
        const endLine = (j + 1 < headings.length) ? headings[j + 1].lineIndex : lines.length;
        const content = lines.slice(startLine, endLine).join("\n").trim();
        sections.push({ title: h.title, content });
      }

      return sections;
    }

    const leftSectionsParsed = extractSections(left, 2);
    const rightSectionsParsed = extractSections(right, 2);

    // Convert each section content to HTML
    const leftSections: Array<{ title: string; html: string }> = [];
    for (const s of leftSectionsParsed) {
      const html = await marked.parse(s.content || "");
      leftSections.push({ title: s.title, html });
    }

    const rightSections: Array<{ title: string; html: string }> = [];
    for (const s of rightSectionsParsed) {
      const html = await marked.parse(s.content || "");
      rightSections.push({ title: s.title, html });
    }

    blockSections1.value = leftSections;
    blockSections2.value = rightSections;

    // Also expose titles arrays for compatibility
    blockTitle1.value = leftSections.map(s => s.title).filter(Boolean);
    blockTitle2.value = rightSections.map(s => s.title).filter(Boolean);

    // Keep combined HTML fields if other code relies on them
    bookBlock1.value = blockSections1.value.map(s => s.html).join("\n");
    bookBlock2.value = blockSections2.value.map(s => s.html).join("\n");
  } else {
    // Gestion d'erreur si l'article n'est pas trouvé
    post.value = {
      title: "Article non trouvé",
      date: new Date().toISOString(),
      cover: "",
      description: "Désolé, l'article que vous recherchez n'a pas pu être chargé.",
      author: "Erreur 404",
      role: "Non applicable",
    };
    bookBlock1.value = "<p>Aucun contenu trouvé pour cet article.</p>";
    bookBlock2.value = "<p>Veuillez vérifier le slug de l'URL.</p>";
  }
});

function formatDate(date: string) {
  if (!date) return "";
  return new Date(date).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
</script>
