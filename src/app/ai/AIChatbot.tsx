'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

const SYSTEM_PROMPT = `You are an AI assistant representing Saurabh Dantani, a Full Stack Developer based in Ahmedabad, Gujarat, India. Answer all questions on behalf of Saurabh in first person (as if you ARE Saurabh). Be friendly, concise, and professional.

Here is everything about Saurabh:

**Personal:**
- Name: Saurabh Dantani
- Location: Ahmedabad, Gujarat, India
- Email: saurabhdantani09@gmail.com
- Phone: +91 7567358252
- GitHub: https://github.com/SaurabhDantani
- LinkedIn: https://www.linkedin.com/in/saurabh-dantani-profile/

**Current Role:**
- Full Stack Developer at Future Stack Solutions (2023 – Present)
- Developed scalable React & Node.js applications
- Cut deployment time by 50% using CI/CD pipelines
- Guided junior developers through code reviews

**Education:**
- B.Tech. in Computer Science and Engineering — Government Engineering College, Modasa (2020–2023)
- Diploma in Computer Engineering — Government Polytechnic Ahmedabad (2017–2020)

**Skills:**
- Frontend: React, Next.js, TypeScript, Tailwind CSS, HTML5, CSS3, Framer Motion
- Backend: Node.js, Express, Nest js, PostgreSQL, MongoDB
- Tools & Cloud: Git, GitHub, Docker, AWS

**Projects:**
1. E-commerce Platform — Next.js, TypeScript, Tailwind CSS, Stripe. GitHub: https://github.com/SaurabhDantani/ecommerce-with-payment-gateway
2. Portfolio Website — Next.js, Tailwind CSS, Framer Motion. GitHub: https://github.com/SaurabhDantani/folio
3. Lumina Chat Application — React, Node.js, Socket.io. GitHub: https://github.com/SaurabhDantani/lumina-chatapp
4. Card Management UI — React, bank card management interface

**Interests:** AI / GenAI, Open Source Collaboration, Modern Web Development

Keep answers short (2-4 sentences max) unless asked for detail. If asked something you don't know about Saurabh, say you're not sure but invite them to reach out via email.`

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hi! I'm Saurabh's AI assistant. Ask me anything about his skills, projects, or experience! 👋",
    },
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
      setTimeout(() => inputRef.current?.focus(), 300)
    }
  }, [messages, isOpen])

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return

    const userMessage: Message = { role: 'user', content: input.trim() }
    const newMessages = [...messages, userMessage]
    setMessages(newMessages)
    setInput('')
    setIsLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages.map((m) => ({ role: m.role, content: m.content })),
          system: SYSTEM_PROMPT,
        }),
      })

      if (!response.ok) throw new Error('API error')

      const data = await response.json()
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: data.text || "Sorry, I couldn't get a response right now.",
        },
      ])
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: "Oops! Something went wrong. Please try again or reach out via email.",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen((prev) => !prev)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/30"
        aria-label="Open AI Chat"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.svg key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </motion.svg>
          ) : (
            <motion.svg key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.86 9.86 0 01-4-.83L3 20l1.09-3.27C3.4 15.56 3 13.82 3 12 3 7.582 7.03 4 12 4s9 3.582 9 8z" />
            </motion.svg>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            className="fixed bottom-24 right-6 z-50 flex w-[360px] max-w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-[#1a1a2e] shadow-2xl"
            style={{ height: '500px' }}
          >
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-black/10 dark:border-white/10 bg-primary/5 dark:bg-primary/10 px-4 py-3">
              <div className="relative">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white text-sm font-bold">S</div>
                <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-white dark:border-[#1a1a2e] bg-green-500" />
              </div>
              <div>
                <p className="text-sm font-semibold">Saurabh's AI Assistant</p>
                <p className="text-xs text-green-500">Online · Powered by Llama 3.1</p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((msg, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  {msg.role === 'assistant' && (
                    <div className="mr-2 mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white text-[10px] font-bold">S</div>
                  )}
                  <div className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${msg.role === 'user' ? 'bg-primary text-white rounded-tr-sm' : 'bg-black/5 dark:bg-white/10 text-black dark:text-white rounded-tl-sm'}`}>
                    {msg.content}
                  </div>
                </motion.div>
              ))}

              {isLoading && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                  <div className="mr-2 mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white text-[10px] font-bold">S</div>
                  <div className="flex items-center gap-1.5 rounded-2xl rounded-tl-sm bg-black/5 dark:bg-white/10 px-4 py-3">
                    {[0, 1, 2].map((i) => (
                      <motion.span key={i} className="h-1.5 w-1.5 rounded-full bg-primary" animate={{ y: [0, -5, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }} />
                    ))}
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggested Questions */}
            {messages.length === 1 && (
              <div className="px-4 pb-2 flex flex-wrap gap-2">
                {['What are your skills?', 'Tell me about your projects', 'Are you open to work?'].map((q) => (
                  <button key={q} onClick={() => { setInput(q); inputRef.current?.focus() }} className="text-xs px-3 py-1.5 rounded-full border border-primary/30 text-primary hover:bg-primary/10 transition">
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="border-t border-black/10 dark:border-white/10 p-3">
              <div className="flex items-center gap-2 rounded-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 px-3 py-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask me anything..."
                  disabled={isLoading}
                  className="flex-1 bg-transparent text-sm outline-none placeholder:text-black/40 dark:placeholder:text-white/30 disabled:opacity-50"
                />
                <motion.button
                  onClick={sendMessage}
                  disabled={!input.trim() || isLoading}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-primary text-white disabled:opacity-40 transition"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                  </svg>
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
