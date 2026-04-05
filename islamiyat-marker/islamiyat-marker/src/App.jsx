import { useState } from "react";

const PAPER = {
  title: "O Level Islamiyat (2058)",
  session: "May/June 2025 — Paper 11",
  totalMarks: 50,
  sections: [
    {
      id: "A",
      label: "Section A — The Life of the Prophet Muhammad ﷺ",
      questions: [
        {
          id: "1a",
          text: "Describe the events of the Night of Power (Laylat al-Qadr) and the first revelation to the Prophet Muhammad ﷺ.",
          marks: 10,
          markScheme: {
            keyPoints: [
              "Prophet was in the Cave of Hira on Mount Nur when Jibril (Gabriel) appeared",
              "Jibril embraced the Prophet three times and commanded 'Iqra' (Read/Recite)",
              "The Prophet said 'I cannot read' / 'Ma ana bi-qari'",
              "First verses of Surah Al-Alaq (96:1-5) were revealed",
              "The Prophet was frightened and returned home trembling",
              "Khadijah (RA) comforted him and wrapped him in a cloak",
              "Khadijah took him to Waraqah ibn Nawfal (her cousin, a Christian scholar)",
              "Waraqah confirmed this was the same angel (Namus) who came to Moses",
              "Waraqah predicted the Prophet would be driven out by his people",
              "Laylat al-Qadr is in the last ten nights of Ramadan, believed to be the 27th",
            ],
            levels: [
              { level: "L1", range: "1–3", desc: "Simple knowledge; few relevant facts; largely descriptive with errors" },
              { level: "L2", range: "4–6", desc: "Some accurate knowledge; basic description of most main events" },
              { level: "L3", range: "7–8", desc: "Good knowledge; accurate description of key events with detail" },
              { level: "L4", range: "9–10", desc: "Excellent knowledge; full, accurate and detailed account of all main events" },
            ],
          },
        },
        {
          id: "1b",
          text: "Why was the first revelation important for Muslims today?",
          marks: 4,
          markScheme: {
            keyPoints: [
              "Shows the beginning of Allah's direct communication with humanity",
              "Emphasises the importance of knowledge and reading/education in Islam",
              "Confirms the prophethood of Muhammad ﷺ",
              "The Quran, beginning with these verses, is the primary source of guidance for Muslims",
              "Reminds Muslims of the miraculous nature of the Quran",
              "Encourages Muslims to seek knowledge as a religious duty",
            ],
            levels: [
              { level: "L1", range: "1–2", desc: "Simple reason(s); limited understanding" },
              { level: "L2", range: "3–4", desc: "Clear reason(s) with explanation; good understanding of significance" },
            ],
          },
        },
        {
          id: "2a",
          text: "Describe the Treaty of Hudaybiyyah: its terms and how it was made.",
          marks: 10,
          markScheme: {
            keyPoints: [
              "The Prophet set out with approximately 1,400 companions to perform Umrah in 6 AH",
              "The Quraysh blocked their entry to Makkah at Hudaybiyyah",
              "Uthman (RA) was sent as an envoy to Makkah; rumour spread he was killed (Bay'at al-Ridwan)",
              "Muslims pledged allegiance under a tree to fight if Uthman was harmed",
              "Suhail ibn Amr was sent by Quraysh to negotiate",
              "Key terms: (1) Muslims must return that year without performing Umrah; (2) Muslims may return the following year for 3 days; (3) 10-year truce; (4) Any Qurayshi who accepts Islam without guardian's permission must be returned; (5) Anyone from Muslims who joins Quraysh need not be returned; (6) Other tribes may ally with either side",
              "Umar (RA) and others were upset with the terms thinking them humiliating",
              "The Prophet described it as a clear victory (Surah Al-Fath 48:1)",
              "The treaty opened the way for the spread of Islam and eventually led to the conquest of Makkah",
            ],
            levels: [
              { level: "L1", range: "1–3", desc: "Simple knowledge; few correct facts" },
              { level: "L2", range: "4–6", desc: "Some accurate knowledge; basic description of treaty terms" },
              { level: "L3", range: "7–8", desc: "Good knowledge; accurate account of circumstances and most main terms" },
              { level: "L4", range: "9–10", desc: "Excellent knowledge; full account of background, all main terms, and significance" },
            ],
          },
        },
        {
          id: "2b",
          text: "Why do Muslims regard the Treaty of Hudaybiyyah as a victory?",
          marks: 4,
          markScheme: {
            keyPoints: [
              "Quran called it a 'clear victory' (Fath al-Mubin) — Surah 48:1",
              "Brought peace and security allowing Islam to spread",
              "Freed Muslims from fighting so they could preach Islam to other tribes",
              "Many tribes and individuals converted to Islam after the treaty",
              "Led to the conquest of Makkah only two years later",
              "The Prophet's acceptance of seemingly unfavourable terms showed his wisdom and trust in Allah",
            ],
            levels: [
              { level: "L1", range: "1–2", desc: "Simple reason(s) with little explanation" },
              { level: "L2", range: "3–4", desc: "Clear reason(s) well-explained; shows understanding of long-term significance" },
            ],
          },
        },
      ],
    },
    {
      id: "B",
      label: "Section B — The Holy Quran",
      questions: [
        {
          id: "3a",
          text: "Describe how the Quran was collected and compiled into a single book (mushaf) after the death of the Prophet ﷺ.",
          marks: 10,
          markScheme: {
            keyPoints: [
              "During the Prophet's lifetime: Quran was memorised by companions (huffaz) and written on various materials (bones, leaves, stone)",
              "After the Prophet's death: Battle of Yamama (12 AH) — many huffaz were killed",
              "Abu Bakr (RA) ordered Zayd ibn Thabit to compile the Quran — Umar ibn al-Khattab suggested this",
              "Zayd was reluctant at first but accepted",
              "Zayd collected from written materials AND from the memories of companions",
              "Two written witnesses required for each verse",
              "The compiled manuscript (suhuf) was kept by Abu Bakr, then Umar, then Hafsa (RA)",
              "During Uthman's caliphate: differences in recitation (dialect) were reported by Hudhayfah ibn al-Yaman",
              "Uthman commissioned Zayd ibn Thabit and others to produce standardised copies",
              "Multiple copies sent to major cities; other non-standard copies were burned",
              "This standardised text is known as the Uthmanic Mushaf — basis of the Quran today",
            ],
            levels: [
              { level: "L1", range: "1–3", desc: "Simple knowledge; basic facts about collection" },
              { level: "L2", range: "4–6", desc: "Describes one stage (Abu Bakr or Uthman) with reasonable detail" },
              { level: "L3", range: "7–8", desc: "Describes both stages with good accuracy" },
              { level: "L4", range: "9–10", desc: "Full, accurate account of both stages with names, reasons, and methods" },
            ],
          },
        },
        {
          id: "3b",
          text: "How do Muslims show respect for the Quran in their daily lives?",
          marks: 4,
          markScheme: {
            keyPoints: [
              "Performing wudu (ritual purification) before touching or reciting",
              "Placing the Quran in a high and clean place",
              "Not placing anything on top of the Quran",
              "Reciting with proper tajweed (rules of recitation)",
              "Listening attentively when the Quran is being recited",
              "Covering the Quran with a cloth",
              "Not allowing the Quran to touch the floor",
              "Memorising the Quran (becoming a hafiz)",
              "Acting upon its teachings in daily life",
            ],
            levels: [
              { level: "L1", range: "1–2", desc: "Simple examples; limited detail" },
              { level: "L2", range: "3–4", desc: "Several clear examples with explanation" },
            ],
          },
        },
        {
          id: "4a",
          text: "Explain the importance of the Quran as a guide for Muslims.",
          marks: 10,
          markScheme: {
            keyPoints: [
              "The Quran is the word of Allah — divine guidance (huda) for all humanity",
              "It provides a complete code of life: spiritual, moral, social, legal",
              "Source of Islamic law (Shariah) — first and primary source above all others",
              "Contains stories of past prophets as lessons and guidance",
              "Provides guidance on worship: prayer, fasting, zakah, Hajj",
              "Guides on personal matters: marriage, inheritance, business ethics",
              "The Quran is unchanged and protected by Allah (Surah 15:9)",
              "Recitation earns spiritual reward (thawab)",
              "The Quran addresses the needs of every age and society",
              "It is a source of comfort and healing (Surah 17:82)",
            ],
            levels: [
              { level: "L1", range: "1–3", desc: "Simple statements; limited understanding of the Quran's role" },
              { level: "L2", range: "4–6", desc: "Some explanation of importance with a few examples" },
              { level: "L3", range: "7–8", desc: "Good explanation covering several aspects of the Quran's guidance" },
              { level: "L4", range: "9–10", desc: "Thorough, well-developed explanation covering multiple dimensions with Quranic references" },
            ],
          },
        },
        {
          id: "4b",
          text: "Why do Muslims believe the Quran is unique compared to other holy books?",
          marks: 4,
          markScheme: {
            keyPoints: [
              "It is preserved in its original Arabic text — never changed or corrupted",
              "Millions have memorised it — no other book memorised in this way",
              "Its literary style is considered inimitable (i'jaz — miracle of language)",
              "No contradiction found in its text despite being revealed over 23 years",
              "Confirmed by prophecies that have come true",
              "It is the final and complete revelation for all of humanity for all time",
              "Other scriptures have been altered by humans, according to Muslim belief",
            ],
            levels: [
              { level: "L1", range: "1–2", desc: "Simple reasons; little explanation" },
              { level: "L2", range: "3–4", desc: "Clear reasons with good explanation showing understanding" },
            ],
          },
        },
      ],
    },
    {
      id: "C",
      label: "Section C — Islamic Beliefs and Practices",
      questions: [
        {
          id: "5a",
          text: "Describe the beliefs and importance of Tawhid (the Oneness of Allah) in Islam.",
          marks: 10,
          markScheme: {
            keyPoints: [
              "Tawhid means the absolute oneness and uniqueness of Allah",
              "Three dimensions: Tawhid al-Rububiyyah (Lordship), Tawhid al-Uluhiyyah (Worship), Tawhid al-Asma wa Sifat (Names and Attributes)",
              "Surah Al-Ikhlas (112) — 'Say He is Allah, One; Allah, the Eternal Refuge'",
              "Shirk (associating partners with Allah) is the greatest sin (Surah 4:48)",
              "Allah has 99 names (Asma al-Husna) reflecting His attributes",
              "Belief in Tawhid shapes all aspects of Muslim worship and life",
              "Foundation of the Shahadah — 'La ilaha illa Allah'",
              "Rejects polytheism, trinity, pantheism",
              "Means Allah alone deserves worship; no intermediaries",
              "Creates equality — all humans are equal before one God",
            ],
            levels: [
              { level: "L1", range: "1–3", desc: "Basic definition only; little further development" },
              { level: "L2", range: "4–6", desc: "Some description of what Tawhid means and why it is important" },
              { level: "L3", range: "7–8", desc: "Good description with examples, Quranic references, or detailed explanation" },
              { level: "L4", range: "9–10", desc: "Thorough, detailed answer covering definition, dimensions, importance, and evidence" },
            ],
          },
        },
        {
          id: "5b",
          text: "How does belief in Tawhid affect the daily life of a Muslim?",
          marks: 4,
          markScheme: {
            keyPoints: [
              "Directs all worship and prayer to Allah alone",
              "Seeking help from Allah only (du'a) in all matters",
              "Saying Bismillah before any action — acknowledging Allah's presence",
              "Living an ethical life because Allah sees everything (muraqabah)",
              "Avoiding shirk — not consulting fortune-tellers, not worshipping saints",
              "Trusting in Allah (tawakkul) in difficult times",
              "Fulfilling duties (salah, zakah, fasting) as acts of worship for Allah alone",
            ],
            levels: [
              { level: "L1", range: "1–2", desc: "Simple examples with little explanation" },
              { level: "L2", range: "3–4", desc: "Clear examples with explanation of how Tawhid influences daily practice" },
            ],
          },
        },
      ],
    },
  ],
};

const C = {
  bg: "#0a0e1a", card: "#111827", border: "#1e2d45",
  accent: "#16a97b", accentLight: "#1dc98f", gold: "#d4af37",
  text: "#e2e8f0", muted: "#64748b", danger: "#ef4444", warn: "#f59e0b",
};

function gradeColor(pct) {
  if (pct >= 80) return "#16a97b";
  if (pct >= 60) return "#d4af37";
  if (pct >= 40) return "#f59e0b";
  return "#ef4444";
}

function Badge({ label, color }) {
  return (
    <span style={{
      background: color + "22", color, border: `1px solid ${color}55`,
      borderRadius: 4, padding: "2px 8px", fontSize: 11, fontWeight: 700,
      letterSpacing: 1, textTransform: "uppercase",
    }}>{label}</span>
  );
}

function ScoreBar({ score, max }) {
  const pct = Math.round((score / max) * 100);
  const col = gradeColor(pct);
  return (
    <div style={{ marginTop: 6 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4, fontSize: 12, color: C.muted }}>
        <span>{score}/{max} marks</span>
        <span style={{ color: col, fontWeight: 700 }}>{pct}%</span>
      </div>
      <div style={{ height: 6, borderRadius: 3, background: "#1e2d45", overflow: "hidden" }}>
        <div style={{ height: "100%", width: `${pct}%`, background: `linear-gradient(90deg, ${col}88, ${col})`, borderRadius: 3, transition: "width 0.8s ease" }} />
      </div>
    </div>
  );
}

function MarkSchemePanel({ question, visible }) {
  if (!visible) return null;
  return (
    <div style={{ background: "#0a1628", border: `1px solid ${C.gold}33`, borderRadius: 8, padding: 16, marginTop: 12 }}>
      <div style={{ color: C.gold, fontWeight: 700, fontSize: 12, letterSpacing: 1, marginBottom: 10 }}>📋 OFFICIAL MARK SCHEME</div>
      <div style={{ marginBottom: 10 }}>
        <div style={{ color: C.muted, fontSize: 11, marginBottom: 6 }}>KEY POINTS TO INCLUDE:</div>
        {question.markScheme.keyPoints.map((pt, i) => (
          <div key={i} style={{ display: "flex", gap: 8, marginBottom: 4, fontSize: 13, color: C.text }}>
            <span style={{ color: C.gold, flexShrink: 0 }}>•</span><span>{pt}</span>
          </div>
        ))}
      </div>
      <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: 10 }}>
        <div style={{ color: C.muted, fontSize: 11, marginBottom: 6 }}>MARKING LEVELS:</div>
        <div style={{ display: "grid", gap: 4 }}>
          {question.markScheme.levels.map((l, i) => (
            <div key={i} style={{ display: "flex", gap: 10, background: "#111827", borderRadius: 6, padding: "6px 10px", fontSize: 12, alignItems: "flex-start" }}>
              <span style={{ color: C.accent, fontWeight: 700, flexShrink: 0 }}>{l.level}</span>
              <span style={{ color: C.gold, fontWeight: 600, flexShrink: 0 }}>[{l.range}]</span>
              <span style={{ color: C.muted }}>{l.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ResultPanel({ result, question }) {
  if (!result) return null;
  const pct = Math.round((result.score / question.marks) * 100);
  const col = gradeColor(pct);
  return (
    <div style={{ background: "#0d1f12", border: `1px solid ${col}44`, borderRadius: 8, padding: 16, marginTop: 12 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
        <span style={{ color: col, fontWeight: 800, fontSize: 22 }}>{result.score}/{question.marks}</span>
        <Badge label={result.level} color={col} />
      </div>
      <ScoreBar score={result.score} max={question.marks} />
      <div style={{ marginTop: 14, fontSize: 13, fontStyle: "italic", color: C.muted, borderLeft: `3px solid ${col}55`, paddingLeft: 10 }}>
        "{result.examinerComment}"
      </div>
      {result.pointsMatched?.length > 0 && (
        <div style={{ marginTop: 12 }}>
          <div style={{ color: "#16a97b", fontSize: 11, fontWeight: 700, marginBottom: 6 }}>✓ POINTS ADDRESSED</div>
          {result.pointsMatched.map((p, i) => <div key={i} style={{ fontSize: 12, color: "#a7f3d0", marginBottom: 3 }}>• {p}</div>)}
        </div>
      )}
      {result.pointsMissed?.length > 0 && (
        <div style={{ marginTop: 12 }}>
          <div style={{ color: "#f59e0b", fontSize: 11, fontWeight: 700, marginBottom: 6 }}>✗ POINTS MISSED</div>
          {result.pointsMissed.map((p, i) => <div key={i} style={{ fontSize: 12, color: "#fde68a", marginBottom: 3 }}>• {p}</div>)}
        </div>
      )}
      <div style={{ marginTop: 12, background: "#111827", borderRadius: 6, padding: "10px 12px" }}>
        <div style={{ color: C.accent, fontSize: 11, fontWeight: 700, marginBottom: 4 }}>STRENGTHS</div>
        <div style={{ fontSize: 12, color: C.text }}>{result.strengths}</div>
      </div>
      <div style={{ marginTop: 8, background: "#111827", borderRadius: 6, padding: "10px 12px" }}>
        <div style={{ color: C.warn, fontSize: 11, fontWeight: 700, marginBottom: 4 }}>HOW TO IMPROVE</div>
        <div style={{ fontSize: 12, color: C.text }}>{result.improvements}</div>
      </div>
    </div>
  );
}

function QuestionCard({ question, onResultUpdate }) {
  const [answer, setAnswer] = useState("");
  const [showMS, setShowMS] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleMark = async () => {
    if (!answer.trim()) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/mark", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question, answer }),
      });
      const r = await res.json();
      if (r.error) throw new Error(r.error);
      setResult(r);
      onResultUpdate(question.id, r.score, question.marks);
    } catch (e) {
      setError("Marking failed. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 10, padding: 20, marginBottom: 16 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <span style={{ background: C.accent + "22", color: C.accent, borderRadius: 6, padding: "4px 10px", fontWeight: 800, fontSize: 13 }}>Q{question.id}</span>
          <Badge label={`${question.marks} marks`} color={C.muted} />
        </div>
        <button onClick={() => setShowMS(!showMS)} style={{ background: showMS ? C.gold + "22" : "transparent", color: C.gold, border: `1px solid ${C.gold}44`, borderRadius: 6, padding: "4px 10px", fontSize: 11, cursor: "pointer", fontWeight: 700 }}>
          {showMS ? "Hide" : "Show"} Mark Scheme
        </button>
      </div>
      <p style={{ fontSize: 14, color: C.text, lineHeight: 1.7, marginBottom: 12 }}>{question.text}</p>
      <MarkSchemePanel question={question} visible={showMS} />
      <textarea
        value={answer}
        onChange={e => setAnswer(e.target.value)}
        placeholder="Type your answer here..."
        rows={question.marks >= 10 ? 8 : 4}
        style={{ width: "100%", background: "#0d1929", border: `1px solid ${C.border}`, borderRadius: 8, color: C.text, fontSize: 13, padding: 12, marginTop: 12, resize: "vertical", fontFamily: "Georgia, serif", lineHeight: 1.8, outline: "none", boxSizing: "border-box" }}
      />
      <div style={{ display: "flex", gap: 10, marginTop: 10, alignItems: "center" }}>
        <button
          onClick={handleMark}
          disabled={loading || !answer.trim()}
          style={{ background: loading || !answer.trim() ? "#1e2d45" : `linear-gradient(135deg, ${C.accent}, ${C.accentLight})`, color: loading || !answer.trim() ? C.muted : "#000", border: "none", borderRadius: 8, padding: "10px 20px", fontWeight: 800, fontSize: 13, cursor: loading || !answer.trim() ? "not-allowed" : "pointer", letterSpacing: 0.5 }}>
          {loading ? "⏳ Marking..." : "✦ Mark My Answer"}
        </button>
        {result && <span style={{ fontSize: 12, color: C.accent }}>✓ Marked</span>}
      </div>
      {error && <div style={{ color: C.danger, fontSize: 12, marginTop: 8 }}>{error}</div>}
      <ResultPanel result={result} question={question} />
    </div>
  );
}

export default function App() {
  const [scores, setScores] = useState({});
  const [activeSection, setActiveSection] = useState("A");

  const allQ = PAPER.sections.flatMap(s => s.questions);
  const totalScored = Object.values(scores).reduce((a, v) => a + v.score, 0);
  const totalAvail = Object.values(scores).reduce((a, v) => a + v.max, 0);
  const answered = Object.keys(scores).length;
  const currentSection = PAPER.sections.find(s => s.id === activeSection);

  const handleResult = (qid, score, max) => setScores(prev => ({ ...prev, [qid]: { score, max } }));

  return (
    <div style={{ minHeight: "100vh", background: C.bg, color: C.text, fontFamily: "'Georgia', serif" }}>
      <div style={{ background: "linear-gradient(135deg, #0a0e1a 0%, #0f2027 50%, #0a0e1a 100%)", borderBottom: `1px solid ${C.border}`, padding: "20px 24px", position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
            <div>
              <div style={{ fontSize: 11, color: C.accent, letterSpacing: 2, fontWeight: 700, marginBottom: 4 }}>CAMBRIDGE ✦ O LEVEL ISLAMIYAT 2058</div>
              <div style={{ fontSize: 18, fontWeight: 700, color: C.text }}>{PAPER.session}</div>
            </div>
            {answered > 0 && (
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: 11, color: C.muted, marginBottom: 2 }}>{answered}/{allQ.length} answered</div>
                <div style={{ fontSize: 20, fontWeight: 800, color: gradeColor(totalAvail > 0 ? (totalScored / totalAvail) * 100 : 0) }}>{totalScored}/{totalAvail}</div>
              </div>
            )}
          </div>
          <div style={{ display: "flex", gap: 8, marginTop: 14 }}>
            {PAPER.sections.map(s => (
              <button key={s.id} onClick={() => setActiveSection(s.id)} style={{ background: activeSection === s.id ? C.accent : "transparent", color: activeSection === s.id ? "#000" : C.muted, border: `1px solid ${activeSection === s.id ? C.accent : C.border}`, borderRadius: 6, padding: "6px 14px", fontSize: 12, fontWeight: 700, cursor: "pointer", letterSpacing: 0.5 }}>
                Section {s.id}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 820, margin: "0 auto", padding: "24px 16px" }}>
        <div style={{ background: "#111827", border: `1px solid ${C.accent}33`, borderRadius: 8, padding: "12px 16px", marginBottom: 20, fontSize: 13, color: C.muted, lineHeight: 1.6 }}>
          <span style={{ color: C.accent, fontWeight: 700 }}>{currentSection.label}</span>
          <span style={{ marginLeft: 8 }}>— Click <strong style={{ color: C.gold }}>Show Mark Scheme</strong> to view criteria, write your answer, then click <strong style={{ color: C.accent }}>Mark My Answer</strong>.</span>
        </div>

        {currentSection.questions.map(q => (
          <QuestionCard key={q.id} question={q} onResultUpdate={handleResult} />
        ))}

        {answered > 0 && (
          <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 10, padding: 20, marginTop: 8 }}>
            <div style={{ color: C.gold, fontWeight: 700, fontSize: 13, marginBottom: 14 }}>📊 YOUR PROGRESS SO FAR</div>
            {Object.entries(scores).map(([qid, { score, max }]) => (
              <div key={qid} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                <span style={{ width: 32, fontSize: 12, color: C.muted }}>Q{qid}</span>
                <div style={{ flex: 1 }}><ScoreBar score={score} max={max} /></div>
              </div>
            ))}
            <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: 12, marginTop: 8 }}>
              <div style={{ fontSize: 13, color: C.muted }}>Total scored</div>
              <div style={{ fontSize: 28, fontWeight: 800, color: gradeColor(totalAvail > 0 ? (totalScored / totalAvail) * 100 : 0) }}>{totalScored} / {totalAvail}</div>
            </div>
          </div>
        )}

        <div style={{ textAlign: "center", marginTop: 24, fontSize: 11, color: C.muted }}>
          Cambridge O Level Islamiyat 2058 — May/June 2025 — Paper 11
        </div>
      </div>
    </div>
  );
}
