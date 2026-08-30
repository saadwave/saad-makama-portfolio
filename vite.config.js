import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        education: resolve(__dirname, 'education.html'),
        skills: resolve(__dirname, 'skills.html'),
        certifications: resolve(__dirname, 'certifications.html'),
        experience: resolve(__dirname, 'experience.html'),
        projects: resolve(__dirname, 'projects.html'),
        goals: resolve(__dirname, 'goals.html'),
        cv: resolve(__dirname, 'cv.html'),
        contact: resolve(__dirname, 'contact.html'),
      },
    },
  },
})
