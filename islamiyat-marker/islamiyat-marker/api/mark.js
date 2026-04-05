export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { question, answer } = req.body

  const prompt = `You are an experienced Cambridge O Level Islamiyat examiner using the official mark scheme.

QUESTION (${question.marks} marks):
${question.text}

OFFICIAL MARK SCHEME KEY POINTS:
${question.markScheme.keyPoints.map((p, i) => `${i + 1}. ${p}`).join('\n')}

MARKING LEVELS:
${question.markScheme.levels.map(l => `${l.level} (${l.range} marks): ${l.desc}`).join('\n')}

STUDENT'S ANSWER:
${answer}

Task: Mark this answer fairly and constructively. Respond ONLY in valid JSON with this exact structure:
{
  "score": <number between 0 and ${question.marks}>,
  "level": "<L1/L2/L3/L4>",
  "pointsMatched": ["<point addressed well>", ...],
  "pointsMissed": ["<important point missing>", ...],
  "strengths": "<brief positive feedback>",
  "improvements": "<specific advice to improve>",
  "examinerComment": "<one sentence overall examiner comment>"
}`

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        messages: [{ role: 'user', content: prompt }],
      }),
    })

    const data = await response.json()
    const raw = data.content.map(b => b.text || '').join('')
    const clean = raw.replace(/```json|```/g, '').trim()
    const result = JSON.parse(clean)

    res.status(200).json(result)
  } catch (e) {
    res.status(500).json({ error: 'Marking failed: ' + e.message })
  }
}
