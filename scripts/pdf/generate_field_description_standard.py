"""KRBI Semantic Model Field Description Standard. Format, section rules, critical rules, worked examples.
Source of truth: aios/references/powerbi-field-descriptions.md (client-specific abbreviations omitted here).
"""
from reportlab.lib.units import inch
from reportlab.platypus import Paragraph, Spacer, KeepTogether

from krbi_pdf import (
    build, section, panel, cta_band, simple_table,
    lead, body, small, mono, item_title, box_title, box_body, PAGE_W, MARGIN,
)

TITLE = "Field Description Standard"
SUBTITLE = "One format for every column and measure, readable by people and by AI assistants."

W = PAGE_W - 2 * MARGIN


def example(name, kind, text):
    return KeepTogether([
        Paragraph(f"{kind}: <font name='Courier'>{name}</font>", item_title),
        Spacer(1, 3),
        panel([Paragraph(text, mono)], keep=False),
        Spacer(1, 5),
    ])


story = [
    Paragraph(
        "A field description has three readers at once: the person hovering over a chart, the analyst building on the "
        "model, and the AI assistant deciding what a column means before it answers. One description has to serve all "
        "three. This is the format we apply to every column, measure, and calculated column in every model we build.",
        lead,
    ),
    Spacer(1, 6),
]

story += section("The format", "Five sections, pipe separated. Human-readable and machine-parseable.")
story += [
    panel([Paragraph(
        "[Plain-English summary]. | Source: [origin system]. | Logic: [calculation or derivation]. | "
        "Report alias: [display name in visuals, if different]. | Note: [how to use the field correctly].",
        mono,
    )]),
    Spacer(1, 10),
    simple_table(
        ["Section", "Label", "When to include", "Rules"],
        [
            ["Summary", "None", "Always. Comes first.",
             "Plain English, one or two sentences, no jargon. A reader who stops here should have the answer."],
            ["Source", "Source:", "When the origin system is not obvious",
             "Name the system: the ERP, the ecommerce platform, the marketing tool, the manual table."],
            ["Logic", "Logic:", "Measures, calculated columns, any field where derivation matters",
             "Explain the calculation in plain terms. Include the DAX where it adds clarity."],
            ["Report alias", "Report alias:", "Only when the visual shows a different name",
             "State the alias and decode any abbreviation in it."],
            ["Note", "Note:", "Always. Comes last.",
             "Behavioral guidance: how to use it, what to compare it against, what to avoid. Never a specific value, threshold, or date."],
        ],
        [0.95 * inch, 0.95 * inch, 1.75 * inch, W - 3.65 * inch],
    ),
]

story += section("The rules", "The format is easy. These are what keep it useful in three years.")
rules = [
    "<b>The summary never has a label.</b> Its position, always first, makes a label redundant. Writing \"Summary:\" is incorrect.",
    "<b>Not every section is required.</b> A simple lookup column may need only a summary and a note. A complex measure may need all five. Include what adds context, nothing else.",
    "<b>The note never ages.</b> No numbers, dates, thresholds, or benchmarks. Explain behavior, not values. A note that says \"anything over 4% is a problem\" is wrong the day the target moves.",
    "<b>Source and Logic are order-flexible.</b> Either can come first, whichever reads more naturally for that field.",
    "<b>Every abbreviation is decoded where it appears.</b> If the name or alias contains YTD, PP, ATC, or a system prefix, the description spells it out in Logic, Report alias, or Note.",
    "<b>Report alias only when the name differs.</b> If the visual shows the field exactly as named in the model, omit the section.",
]
for r in rules:
    story.append(Paragraph(r, body))
    story.append(Spacer(1, 5))

story += section("Common abbreviations", "Extend this table per client. The point is that the table exists.")
story += [
    simple_table(
        ["Abbreviation", "Meaning", "Where it usually appears"],
        [
            ["YTD / MTD / QTD", "Year, month, or quarter to date", "Calendar flag columns"],
            ["PP / PW / PD", "Prior period, prior week, prior day. Same-length window shifted back.", "Comparison measures"],
            ["Flag_ (prefix)", "Boolean Y/N filter column", "Calendar and status columns"],
            ["Offset", "Integer distance from the current period. 0 = now, negative = past.", "Calendar columns"],
            ["Num (suffix)", "Numeric sort key. For sorting only, never display.", "Calendar columns"],
            ["CF", "Conditional formatting. Returns a hex color string, not a value.", "Formatting measures"],
            ["Delta pts", "Change between two rates, in percentage points.", "Rate comparison measures"],
            ["OTIF", "On time, in full", "Fulfillment measures"],
        ],
        [1.25 * inch, 3.05 * inch, W - 4.3 * inch],
    ),
]

ex_head = section("Worked examples", "Copied from production models, client specifics removed.")
story += [
    KeepTogether(ex_head + [example(
        "Flag_YTD", "Column",
        "Marks whether a date falls within the current year-to-date window. | Logic: 'Y' if date &lt;= today AND "
        "year = current year, 'N' otherwise. | Note: Flag_ prefix = boolean Y/N filter column. YTD = Year To Date. "
        "Use as a visual filter set to 'Y' to restrict any chart to YTD automatically.",
    )]),
    example(
        "CurMonthOffset", "Column",
        "Integer distance between each date's month and the current month. | Logic: 0 = current month, -1 = prior "
        "month, -2 = two months ago. Calculated dynamically from today's date. | Note: Cur = Current, Offset = integer "
        "distance. Use in visual filters to show rolling month windows without hardcoding dates.",
    ),
    example(
        "Click-to-Open Rate % (CTOR)", "Measure",
        "Of the recipients who opened the message, the share who clicked something. Measures content relevance "
        "independently of list size or deliverability. | Logic: DIVIDE([Total Clicks], [Total Opens]). Returns blank "
        "when opens are zero. | Note: CTOR = Click-To-Open Rate. More reliable than raw click rate for evaluating "
        "message quality. Compare within channel and audience type.",
    ),
    example(
        "Disengagement Rate %", "Measure",
        "Combined signal of audience disengagement: the share of delivered messages that resulted in either an "
        "unsubscribe or a spam complaint. | Logic: [Unsubscribe Rate %] + [Spam Complaint Rate %]. | Note: Both actions "
        "represent active audience rejection. Compare within channel and audience type. Different segments have "
        "structurally different baselines.",
    ),
    panel([
        Paragraph("Why this matters for AI", box_title),
        Paragraph(
            "When Copilot or an assistant like Claude connects to a semantic model, the description is the first thing it "
            "reads about a field. A model with descriptions in this format answers a plain-English question from the "
            "metadata alone: what the number is, where it came from, how it was calculated, and how to compare it. A model "
            "without them answers from the column name, which is a guess dressed up as an answer.",
            box_body,
        ),
    ], keep=False),
    Spacer(1, 10),
    cta_band(
        "Want the model documented for you?",
        "Every Foundation Build ships with every field described in this format. If you already have a Power BI estate, "
        "the two-week AI Readiness Assessment scores how much of it is documented and what to fix first. "
        "Book a 30-minute discovery call: <u>calendly.com/kettleriverbi/30min</u>",
    ),
]

if __name__ == "__main__":
    print(build("krbi-field-description-standard.pdf", TITLE, SUBTITLE, story))
