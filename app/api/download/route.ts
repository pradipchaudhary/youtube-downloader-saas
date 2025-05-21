import { NextResponse } from 'next/server'
import { exec } from 'child_process'
import fs from 'fs'
import path from 'path'
import { promisify } from 'util'

const execAsync = promisify(exec)

export async function POST(req: Request) {
    const { url } = await req.json()
    const filename = `video-${Date.now()}.mp4`
    const outputPath = `/tmp/${filename}`

    if (!url) return NextResponse.json({ error: 'URL is required' }, { status: 400 })

    try {
        // Download the video using yt-dlp
        await execAsync(`yt-dlp -f "best[height=720]" -o ${outputPath} "${url}"`)

        const fileBuffer = fs.readFileSync(outputPath)

        return new Response(fileBuffer, {
            headers: {
                'Content-Type': 'video/mp4',
                'Content-Disposition': `attachment; filename="${filename}"`,
            },
        })
    } catch (err) {
        console.error('Download error:', err)
        return NextResponse.json({ error: 'Failed to download video' }, { status: 500 })
    }
}
