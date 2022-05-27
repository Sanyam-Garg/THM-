import exiftool
import os

files = os.listdir("/home/shanu/THM/AdvOfCyber/16-File-Confusion(Python-Scripting)/extracted-zips/1")
upper = len(files) - 1

for i in range (0, upper):
    files[i] = "/home/shanu/THM/AdvOfCyber/16-File-Confusion(Python-Scripting)/extracted-zips/1/" + files[i]

with exiftool.ExifTool() as et:
    metadata = et.get_tag_batch("XMP:Version", files)


print(metadata)
