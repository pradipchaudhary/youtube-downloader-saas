'use client'
import { useState } from 'react'

export default function HomePage() {
  const [url, setUrl] = useState('')
  const [loading, setLoading] = useState(false)

  const handleDownload = async () => {
    setLoading(true)
    const res = await fetch('/api/download', {
      method: 'POST',
      body: JSON.stringify({ url }),
      headers: { 'Content-Type': 'application/json' },
    })

    const blob = await res.blob()
    const downloadUrl = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = downloadUrl
    a.download = 'video.mp4'
    document.body.appendChild(a)
    a.click()
    a.remove()
    setLoading(false)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4">
      <h1 className="text-3xl font-bold mb-6">YouTube Downloader (720p)</h1>
      <input
        type="text"
        value={url}
        onChange={e => setUrl(e.target.value)}
        placeholder="Paste YouTube URL..."
        className="border px-4 py-2 w-full max-w-md rounded"
      />
      <button
        onClick={handleDownload}
        className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        disabled={loading}
      >
        {loading ? 'Downloading...' : 'Download 720p'}
      </button>
    </main>
  )
}
