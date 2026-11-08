#!/usr/bin/env python3
"""Preserve original, source-attributed Discord screenshots used in build dossiers."""
from __future__ import annotations

import html
import re
from pathlib import Path
from urllib.parse import urlparse
from urllib.request import Request, urlopen

ROOT = Path(__file__).resolve().parents[1]
BUILD_DIR = ROOT / "builds"
IMAGE_DIR = ROOT / "assets" / "screenshots"
IMAGE_DIR.mkdir(parents=True, exist_ok=True)
RX = re.compile(r'(\bsrc=")(https://cdn\.discordapp\.com/attachments/[^"]+)(")', re.I)
IMG_LIMIT = 14 * 1024 * 1024
downloaded = 0
failed = 0
updated_pages = 0

def is_image(payload: bytes) -> bool:
    return payload.startswith(b"\x89PNG\r\n\x1a\n") or payload.startswith(b"\xff\xd8\xff") \
        or payload.startswith(b"GIF87a") or payload.startswith(b"GIF89a") \
        or (payload.startswith(b"RIFF") and payload[8:12] == b"WEBP")

def archive(match: re.Match) -> str:
    global downloaded, failed, relative_prefix
    raw = html.unescape(match.group(2))
    parsed = urlparse(raw)
    if parsed.hostname != "cdn.discordapp.com":
        return match.group(0)
    pieces = parsed.path.strip("/").split("/")
    if len(pieces) < 4 or pieces[0] != "attachments" or not pieces[2].isdigit():
        return match.group(0)
    ext = Path(pieces[-1]).suffix.lower()
    if ext not in (".png", ".jpg", ".jpeg", ".gif", ".webp"):
        ext = ".png"
    target = IMAGE_DIR / (pieces[2] + ext)
    try:
        if not target.exists():
            request = Request(raw, headers={"User-Agent": "Mozilla/5.0 (compatible; ApertureArchive/1.0)"})
            with urlopen(request, timeout=22) as resp:
                data = resp.read(IMG_LIMIT + 1)
            if len(data) > IMG_LIMIT or len(data) < 400 or not is_image(data):
                raise RuntimeError("unexpected image data")
            target.write_bytes(data)
            downloaded += 1
        return match.group(1) + relative_prefix + target.name + match.group(3)
    except Exception as ex:
        failed += 1
        print(f"Unable to cache {pieces[2]}: {ex}")
        return match.group(0)

for file in sorted(ROOT.glob("*.html")) + sorted(BUILD_DIR.glob("*.html")):
    relative_prefix = "../assets/screenshots/" if file.parent == BUILD_DIR else "assets/screenshots/"
    current = file.read_text(encoding="utf-8")
    revised = RX.sub(archive, current)
    if revised != current:
        file.write_text(revised, encoding="utf-8")
        updated_pages += 1

print(f"Archived {downloaded} images. Updated {updated_pages} dossiers. Unavailable URLs: {failed}.")
