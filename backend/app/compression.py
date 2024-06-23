from PIL import Image
import os

def compress_image(image_path, output_path, quality=85):
    image = Image.open(image_path)
    image.save(output_path, 'JPEG', quality=quality)
