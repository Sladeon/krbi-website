"""
Shared look for KRBI lead-magnet PDFs. Matches public/downloads/krbi-governance-self-audit.pdf:
dark header band with the diamond mark on page 1, slim band on later pages, steel accents,
cream scoring box, steel CTA band, grey footer line.

Run generators from the repo root:  python scripts/pdf/<generator>.py
"""
from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import inch
from reportlab.platypus import (
    BaseDocTemplate,
    Frame,
    NextPageTemplate,
    PageTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
    KeepTogether,
)

ROOT = Path(__file__).resolve().parents[2]
LOGO = ROOT / "public" / "krbi-logo.png"
OUT_DIR = ROOT / "public" / "downloads"

STEEL = colors.HexColor("#5D8597")
STEEL_DEEP = colors.HexColor("#48697A")
STEEL_SOFT = colors.HexColor("#9DC3D1")
NAVY = colors.HexColor("#1A1A1F")
CREAM = colors.HexColor("#E8E5DE")
CREAM_SOFT = colors.HexColor("#F5F3EF")
GREY = colors.HexColor("#6B6B72")
MUTED = colors.HexColor("#8A8A92")

PAGE_W, PAGE_H = letter
MARGIN = 0.95 * inch
FIRST_BAND_H = 1.75 * inch
LATER_BAND_H = 0.6 * inch
FOOTER_H = 0.75 * inch

FOOTER_LEFT = "Kettle River Business Intelligence  ·  business mastery through business intelligence"
FOOTER_RIGHT = "info@kettleriverbi.com  ·  www.kettleriverbi.com"

# ---------- styles ----------
body = ParagraphStyle("body", fontName="Helvetica", fontSize=10.5, leading=15, textColor=NAVY)
lead = ParagraphStyle("lead", parent=body, fontSize=11, leading=16)
small = ParagraphStyle("small", parent=body, fontSize=8.8, leading=12.5, textColor=GREY)
h2 = ParagraphStyle("h2", fontName="Helvetica-Bold", fontSize=14.5, leading=18, textColor=NAVY, spaceBefore=14, spaceAfter=1)
h2_sub = ParagraphStyle("h2_sub", parent=small, fontSize=8.8, textColor=MUTED, spaceAfter=9)
item_title = ParagraphStyle("item_title", fontName="Helvetica-Bold", fontSize=10.5, leading=14, textColor=NAVY)
item_note = ParagraphStyle("item_note", parent=small, fontSize=8.6, leading=12)
mono = ParagraphStyle("mono", fontName="Courier", fontSize=8.4, leading=11.8, textColor=STEEL_DEEP)
box_title = ParagraphStyle("box_title", fontName="Helvetica-Bold", fontSize=12, leading=15, textColor=NAVY, spaceAfter=4)
box_body = ParagraphStyle("box_body", parent=body, fontSize=10, leading=14.5)
cta_title = ParagraphStyle("cta_title", fontName="Helvetica-Bold", fontSize=11.5, leading=15, textColor=colors.white, spaceAfter=2)
cta_body = ParagraphStyle("cta_body", parent=body, fontSize=9.6, leading=13.5, textColor=colors.white)
th = ParagraphStyle("th", fontName="Helvetica-Bold", fontSize=8.6, leading=11, textColor=NAVY)
td = ParagraphStyle("td", parent=small, fontSize=8.6, leading=11.5, textColor=NAVY)


def _footer(c):
    y = FOOTER_H - 0.1 * inch
    c.setStrokeColor(colors.HexColor("#D9D6CF"))
    c.setLineWidth(0.6)
    c.line(MARGIN, y + 0.18 * inch, PAGE_W - MARGIN, y + 0.18 * inch)
    c.setFont("Helvetica", 7.8)
    c.setFillColor(GREY)
    c.drawString(MARGIN, y, FOOTER_LEFT)
    c.drawRightString(PAGE_W - MARGIN, y, FOOTER_RIGHT)


def _first_page(title, subtitle):
    def draw(c, doc):
        c.saveState()
        c.setFillColor(NAVY)
        c.rect(0, PAGE_H - FIRST_BAND_H, PAGE_W, FIRST_BAND_H, stroke=0, fill=1)
        logo_size = 0.78 * inch
        logo_y = PAGE_H - FIRST_BAND_H / 2 - logo_size / 2
        if LOGO.exists():
            c.drawImage(str(LOGO), MARGIN, logo_y, logo_size, logo_size, mask="auto")
        x = MARGIN + logo_size + 0.28 * inch
        c.setFillColor(STEEL_SOFT)
        c.setFont("Helvetica-Bold", 8.2)
        c.drawString(x, PAGE_H - 0.62 * inch, "KETTLE RIVER BI")
        c.setFillColor(colors.white)
        c.setFont("Helvetica-Bold", 22)
        c.drawString(x, PAGE_H - 0.98 * inch, title)
        c.setFont("Helvetica", 10)
        c.setFillColor(colors.HexColor("#D5D9DD"))
        c.drawString(x, PAGE_H - 1.26 * inch, subtitle)
        _footer(c)
        c.restoreState()

    return draw


def _later_page(title):
    def draw(c, doc):
        c.saveState()
        c.setFillColor(NAVY)
        c.rect(0, PAGE_H - LATER_BAND_H, PAGE_W, LATER_BAND_H, stroke=0, fill=1)
        c.setFillColor(STEEL_SOFT)
        c.setFont("Helvetica-Bold", 8.2)
        c.drawString(MARGIN, PAGE_H - LATER_BAND_H / 2 - 3, f"KETTLE RIVER BI  ·  {title.upper()}")
        _footer(c)
        c.restoreState()

    return draw


def build(filename, title, subtitle, story):
    """Assemble the document with a tall first-page header and slim later-page header."""
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    path = OUT_DIR / filename
    doc = BaseDocTemplate(
        str(path),
        pagesize=letter,
        title=f"{title} | Kettle River BI",
        author="Kettle River Business Intelligence",
        subject=subtitle,
    )
    first_frame = Frame(
        MARGIN, FOOTER_H + 0.1 * inch, PAGE_W - 2 * MARGIN,
        PAGE_H - FIRST_BAND_H - FOOTER_H - 0.45 * inch, id="first", leftPadding=0, rightPadding=0,
    )
    later_frame = Frame(
        MARGIN, FOOTER_H + 0.1 * inch, PAGE_W - 2 * MARGIN,
        PAGE_H - LATER_BAND_H - FOOTER_H - 0.45 * inch, id="later", leftPadding=0, rightPadding=0,
    )
    doc.addPageTemplates([
        PageTemplate(id="First", frames=[first_frame], onPage=_first_page(title, subtitle)),
        PageTemplate(id="Later", frames=[later_frame], onPage=_later_page(title)),
    ])
    doc.build([NextPageTemplate("Later")] + story)
    return path


# ---------- flowable helpers ----------
def section(title, sub=None):
    out = [Paragraph(title, h2)]
    if sub:
        out.append(Paragraph(sub, h2_sub))
    else:
        out.append(Spacer(1, 6))
    return out


def section_items(title, sub, items):
    """Section heading kept on the same page as its first item; remaining items flow freely."""
    head = section(title, sub)
    return [KeepTogether(head + [items[0]])] + list(items[1:])


def check_item(title, note):
    """A checkbox beside a bold statement with a grey explanatory line. One-row table, so it never splits."""
    box = Table([[""]], colWidths=[11], rowHeights=[11])
    box.setStyle(TableStyle([
        ("BOX", (0, 0), (-1, -1), 1.1, STEEL),
        ("ROUNDEDCORNERS", [2, 2, 2, 2]),
    ]))
    text = [Paragraph(title, item_title), Paragraph(note, item_note)]
    t = Table([[box, text]], colWidths=[0.42 * inch, PAGE_W - 2 * MARGIN - 0.42 * inch])
    t.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING", (0, 0), (0, 0), 3),
        ("TOPPADDING", (1, 0), (1, 0), 0),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 9),
    ]))
    return t


def panel(flowables, bg=CREAM_SOFT, border=colors.HexColor("#E2DFD8"), keep=True):
    t = Table([[flowables]], colWidths=[PAGE_W - 2 * MARGIN])
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), bg),
        ("BOX", (0, 0), (-1, -1), 0.8, border),
        ("LEFTPADDING", (0, 0), (-1, -1), 16),
        ("RIGHTPADDING", (0, 0), (-1, -1), 16),
        ("TOPPADDING", (0, 0), (-1, -1), 11),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 11),
    ]))
    return KeepTogether(t) if keep else t


def cta_band(title, text):
    t = Table([[[Paragraph(title, cta_title), Paragraph(text, cta_body)]]], colWidths=[PAGE_W - 2 * MARGIN])
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), STEEL),
        ("LEFTPADDING", (0, 0), (-1, -1), 16),
        ("RIGHTPADDING", (0, 0), (-1, -1), 16),
        ("TOPPADDING", (0, 0), (-1, -1), 12),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 12),
    ]))
    return t


def simple_table(header, rows, col_widths):
    data = [[Paragraph(h, th) for h in header]] + [[Paragraph(c, td) for c in r] for r in rows]
    t = Table(data, colWidths=col_widths, repeatRows=1)
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), CREAM),
        ("LINEBELOW", (0, 0), (-1, 0), 0.8, STEEL),
        ("LINEBELOW", (0, 1), (-1, -1), 0.4, colors.HexColor("#E2DFD8")),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 6),
        ("RIGHTPADDING", (0, 0), (-1, -1), 6),
        ("TOPPADDING", (0, 0), (-1, -1), 5),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
    ]))
    return t
