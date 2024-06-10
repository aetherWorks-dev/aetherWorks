import os.path

ROOT_DIR = os.path.join(os.path.dirname(__file__), "..")
IMAGES_DIR = os.path.join(ROOT_DIR, "Images")
LIBRARY_DIR = os.path.join(ROOT_DIR, "Library")
CD_ROMS_DIR = os.path.join(ROOT_DIR, "CD-ROMs")
DISK_DIR = os.path.join(ROOT_DIR, "public")
COVERS_DIR = os.path.join(ROOT_DIR, "public", "Covers")
DATA_DIR = os.path.join(ROOT_DIR, "src", "Data")
STRINGS_DIR = os.path.join(ROOT_DIR, "scripts", "strings")
CACHE_DIR = os.path.expanduser(os.path.join("~", ".infinite-mac-cache"))
XADMASTER_PATH = os.path.join(ROOT_DIR, "XADMaster-build", "Release")
UNAR_PATH = os.path.join(XADMASTER_PATH, "unar")
LSAR_PATH = os.path.join(XADMASTER_PATH, "lsar")
