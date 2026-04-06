import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { messages, system } = await req.json()

    const groqMessages = [
      { role: 'system', content: system },
      ...messages.map((m: { role: string; content: string }) => ({
        role: m.role, // Groq uses 'user' and 'assistant' — same as our format
        content: m.content,
      })),
    ]

    const key = process.env.GROQ_API_KEY
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${key}`,
      },
      body: JSON.stringify({
        model: 'llama-3.1-8b-instant', // Free, fast, great quality
        messages: groqMessages,
        max_tokens: 512,
        temperature: 0.7,
      }),
    })

    if (!response.ok) {
      const error = await response.json()
      console.error('Groq API error:', error)
      return NextResponse.json({ error: 'API error' }, { status: 500 })
    }

    const data = await response.json()
    const text = data.choices?.[0]?.message?.content ?? "Sorry, I couldn't get a response."

    return NextResponse.json({ text })
  } catch (error) {
    console.error('Chat route error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
