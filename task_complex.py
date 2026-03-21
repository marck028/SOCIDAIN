import os
import shutil
import subprocess

# TAREA 1
PUBLIC_DIR = r"d:\UNINI\6TOSEMESTRE\machin\atrevetee\SOCIDAIN\public\uploads"
SRC_BASE = r"D:\SOCIDAIN\2026\fotoswebsocidain"
BLOG_MARCO = os.path.join(SRC_BASE, "blogdemarco")
BLOG_AMIRA = os.path.join(SRC_BASE, "blogdeamiraarregla")
NUEVAS = os.path.join(SRC_BASE, "fotosnuevasweb")

def copy_folder_files(src_folder, expected_names=None):
    if not os.path.exists(src_folder):
        print(f"No existe: {src_folder}")
        return
    for f in os.listdir(src_folder):
        src_path = os.path.join(src_folder, f)
        if os.path.isfile(src_path):
            if expected_names and f in expected_names:
                dest = os.path.join(PUBLIC_DIR, expected_names[f])
            else:
                dest = os.path.join(PUBLIC_DIR, f)
            shutil.copy2(src_path, dest)
            print(f"Copiado: {src_path} -> {dest}")

# Post Marco expects: Marco Salvatierra.png
# Post Amira expects: rscd-vol1-cover.jpg ? Wait, I will just copy all files from those folders to public/uploads
copy_folder_files(BLOG_MARCO)
copy_folder_files(BLOG_AMIRA)

# Other files from fotosnuevasweb
copy_folder_files(NUEVAS)

# TAREA 4 File Coping
# Organigrama
org_src = os.path.join(SRC_BASE, "Directiva de la Sociedad Científica de Ciencia de Datos e Inteligencia de Negocios 2026J.png")
org_dest = os.path.join(PUBLIC_DIR, "directiva-socidain-2026.png")
if os.path.exists(org_src):
    shutil.copy2(org_src, org_dest)

# Propuestas PDF
prop_src = os.path.join(SRC_BASE, "socidain_propuestas_2026.pdf")
prop_dest = os.path.join(PUBLIC_DIR, "socidain-propuestas-2026.pdf")
if os.path.exists(prop_src):
    shutil.copy2(prop_src, prop_dest)

# DOCX to PDF
docx_src = os.path.join(SRC_BASE, "SOCIDAIN_Plan_2026_v4.docx")
try:
    print(f"Convirtiendo {docx_src} a PDF...")
    subprocess.run(["libreoffice", "--headless", "--convert-to", "pdf", docx_src, "--outdir", PUBLIC_DIR], check=False)
except Exception as e:
    print(f"Error con libreoffice: {e}")
    try:
        subprocess.run(["soffice", "--headless", "--convert-to", "pdf", docx_src, "--outdir", PUBLIC_DIR], check=False)
    except Exception as e2:
         print(f"Error con soffice: {e2}")

# Rename generated PDF if needed
generated_pdf = os.path.join(PUBLIC_DIR, "SOCIDAIN_Plan_2026_v4.pdf")
plan_dest = os.path.join(PUBLIC_DIR, "socidain-plan-2026.pdf")
if os.path.exists(generated_pdf):
    os.rename(generated_pdf, plan_dest)
elif os.path.exists(os.path.join(PUBLIC_DIR, "socidain_plan_2026_v4.pdf")):
    os.rename(os.path.join(PUBLIC_DIR, "socidain_plan_2026_v4.pdf"), plan_dest)

print("Script finalizado.")
