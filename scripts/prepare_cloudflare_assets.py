from pathlib import Path
from PIL import Image

SOURCE = Path("/home/ubuntu/webdev-static-assets")
DESTINATION = Path("/home/ubuntu/riddhi-dental-clinic/client/public/clinic-assets")
DESTINATION.mkdir(parents=True, exist_ok=True)

ASSETS = {
    "riddhi-hero-sunlit-clinic.jpg": ("riddhi-hero-sunlit-clinic.webp", 1800),
    "riddhi-treatment-smile.jpg": ("riddhi-treatment-smile.webp", 1200),
    "riddhi-care-detail.jpg": ("riddhi-care-detail.webp", 1200),
}

for source_name, (destination_name, max_width) in ASSETS.items():
    with Image.open(SOURCE / source_name) as image:
        image = image.convert("RGB")
        if image.width > max_width:
            image.thumbnail((max_width, image.height))
        image.save(DESTINATION / destination_name, "WEBP", quality=84, method=6)

with Image.open(SOURCE / "riddhi-logo-mark.png") as logo:
    logo.thumbnail((512, 512))
    logo.save(DESTINATION / "riddhi-logo-mark.png", "PNG", optimize=True)

print(f"Prepared Cloudflare assets in {DESTINATION}")
