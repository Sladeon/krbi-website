"""Manufacturing AI Readiness Checklist. Ten yes/no questions, scoring guide, assessment CTA.
Source brief: aios/knowledge/manufacturing-ai-checklist-brief.md
"""
from reportlab.platypus import Paragraph, Spacer

from krbi_pdf import build, section_items, check_item, panel, cta_band, lead, body, box_title, box_body

TITLE = "Manufacturing AI Readiness Checklist"
SUBTITLE = "Ten questions. Ten minutes. Is your operations data ready to carry an AI?"

story = [
    Paragraph(
        "Answer yes only if it is true today, not after the next cleanup. A CFO or COO should be able to "
        "answer every question without calling IT. Count your yes answers and use the scoring guide at the end.",
        lead,
    ),
    Spacer(1, 6),
]

story += section_items("A. Can you get to the data?", "Access is the first thing an AI assistant inherits.", [
    check_item(
        "1. Can you pull your top ten SKUs by margin in under five minutes without calling IT?",
        "If the answer routes through one analyst and an export, an assistant will hit the same wall.",
    ),
    check_item(
        "2. If the person who builds the weekly operations report were out tomorrow, would the meeting still have numbers?",
        "Reporting that lives in one person's head is not a data foundation. It is a single point of failure.",
    ),
])

story += section_items("B. Can you trust the data?", "An assistant answers from whatever is there, right or wrong.", [
    check_item(
        "3. Do Finance and Operations use the same number when they talk about production performance?",
        "If Finance says shrink and Operations says waste and the figures differ, an AI picks one and does not tell you.",
    ),
    check_item(
        "4. Do your core metrics (OTIF, yield, waste, labor hours) come straight from the ERP, not a spreadsheet someone maintains?",
        "A spreadsheet in the chain means the assistant is reading a copy of a copy, with whatever edits it picked up.",
    ),
    check_item(
        "5. Do you have at least two years of consistent history for those core metrics?",
        "Trend, seasonality, and anything called a forecast need history that was measured the same way throughout.",
    ),
])

story += section_items("C. Is the data explained?", "The part almost every model is missing, and the cheapest to fix.", [
    check_item(
        "6. Are your key KPIs written down and agreed across departments, not re-argued every time someone pulls a number?",
        "One written definition per metric, signed by Finance, Operations, and IT. If it lives in people's heads, check no.",
    ),
    check_item(
        "7. If you opened your reporting model, would every field carry a plain-English description of what it is, where it comes from, and how it is calculated?",
        "This is what an AI reads first. A column named Adj with no description becomes a confident guess.",
    ),
])

story += section_items("D. Is the organization ready?", "Tools do not create accountability. People do.", [
    check_item(
        "8. Do your operations leaders make weekly decisions from live reporting rather than static Excel?",
        "If the real decision happens from a number pasted into a slide, that is the number the AI will be judged against.",
    ),
    check_item(
        "9. Is one named person accountable for data quality?",
        "Not a committee and not IT by default. One person who owns whether the numbers are right.",
    ),
    check_item(
        "10. Has an analytics or AI pilot in the last twelve months delivered what it promised?",
        "If one underdelivered and the post-mortem pointed at the data, you already know where this checklist is going.",
    ),
])

story += [
    Spacer(1, 10),
    panel([
        Paragraph("Scoring: count your yes answers", box_title),
        Paragraph("<b>8 to 10 yes.</b> AI-ready. Your data foundation is strong. The assistant is the easy part; move.", box_body),
        Paragraph("<b>5 to 7 yes.</b> Getting there. Some foundation work before an AI will stick, usually definitions and field descriptions.", box_body),
        Paragraph(
            "<b>0 to 4 yes.</b> Not ready yet, and that is a normal place to start. Begin with the BI fundamentals: "
            "agreed definitions, one source per metric, documented fields, governed access. Scoring here is common, "
            "and it is where the useful work starts.",
            box_body,
        ),
    ]),
    Spacer(1, 12),
    cta_band(
        "Scored lower than you expected?",
        "The AI Readiness Assessment is two weeks and $5,000, fixed. We score your data on the four things above, "
        "trace where each core metric actually comes from, and hand you a written fix list in priority order. "
        "Credited in full against a Foundation Build signed within 90 days. Book a 30-minute discovery call: "
        "<u>calendly.com/kettleriverbi/30min</u>",
    ),
]

if __name__ == "__main__":
    print(build("krbi-ai-readiness-checklist.pdf", TITLE, SUBTITLE, story))
