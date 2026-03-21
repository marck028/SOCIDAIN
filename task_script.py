import os
import shutil
import fitz  # PyMuPDF
import re

PUBLIC_DIR = r"d:\UNINI\6TOSEMESTRE\machin\atrevetee\SOCIDAIN\public\uploads"
NEW_FOTOS_DIR = r"D:\SOCIDAIN\2026\fotoswebsocidain\fotosnuevasweb"
PDF_SRC = r"D:\SOCIDAIN\2026\fotoswebsocidain\nuevas fotos\RSCD.pdf"

# TAREA 1
existing_imgs = {}
for root, _, files in os.walk(PUBLIC_DIR):
    for f in files:
        existing_imgs[f.lower()] = os.path.join(root, f)

def generate_kebab(name):
    # remove extension
    base, ext = os.path.splitext(name)
    base = base.lower()
    base = re.sub(r'[^a-z0-9]+', '-', base).strip('-')
    return base + ext

added_imgs = []
replaced_imgs = []

for root, _, files in os.walk(NEW_FOTOS_DIR):
    for f in files:
        src = os.path.join(root, f)
        base, ext = os.path.splitext(f)
        if f.lower() in existing_imgs:
            dest = existing_imgs[f.lower()]
            shutil.copy2(src, dest)
            replaced_imgs.append((src, dest))
        else:
            kebab = generate_kebab(f)
            dest = os.path.join(PUBLIC_DIR, kebab)
            shutil.copy2(src, dest)
            added_imgs.append((src, dest))

# Copy PDF
pdf_dest = os.path.join(PUBLIC_DIR, "rscd-vol1.pdf")
if os.path.exists(PDF_SRC):
    shutil.copy2(PDF_SRC, pdf_dest)
    doc = fitz.open(pdf_dest)
    page = doc.load_page(0)
    pix = page.get_pixmap()
    pix.save(os.path.join(PUBLIC_DIR, "rscd-vol1-cover.jpg"))
else:
    print(f"PDF source not found: {PDF_SRC}")

# Write output to file for agent to read
with open("task_results.txt", "w", encoding="utf-8") as f:
    f.write("REPLACED:\n")
    for s, d in replaced_imgs: f.write(f"{s} -> {d}\n")
    f.write("\nADDED:\n")
    for s, d in added_imgs: f.write(f"{s} -> {d}\n")
