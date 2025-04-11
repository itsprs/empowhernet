"use client"

import { useState } from "react"

export default function ShareStoryForm() {
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    story: "",
    image: "",
    category: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Submitted story:", formData)
    setFormData({
      name: "",
      title: "",
      story: "",
      image: "",
      category: "",
    })
  }

  return (
    <div className="mx-auto max-w-xl space-y-6 p-4">
      <h2 className="text-2xl font-bold">Share Your Inspirational Story</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full rounded border px-3 py-2"
          required
        />
        <input
          type="text"
          placeholder="Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="w-full rounded border px-3 py-2"
          required
        />
        <textarea
          placeholder="Your Story"
          value={formData.story}
          onChange={(e) => setFormData({ ...formData, story: e.target.value })}
          className="w-full rounded border px-3 py-2"
          rows={6}
          required
        />
        <input
          type="text"
          placeholder="Image URL (optional)"
          value={formData.image}
          onChange={(e) => setFormData({ ...formData, image: e.target.value })}
          className="w-full rounded border px-3 py-2"
        />
        <input
          type="text"
          placeholder="Category"
          value={formData.category}
          onChange={(e) =>
            setFormData({ ...formData, category: e.target.value })
          }
          className="w-full rounded border px-3 py-2"
        />
        <button
          type="submit"
          className="rounded bg-black px-4 py-2 text-white transition hover:bg-gray-900"
        >
          Submit Story
        </button>
      </form>
    </div>
  )
}
