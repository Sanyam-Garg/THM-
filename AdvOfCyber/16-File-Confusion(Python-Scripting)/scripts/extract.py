import os
import zipfile

zips = os.listdir("/home/shanu/THM/AdvOfCyber/16-File-Confusion(Python-Scripting)/downloaded-files")

for eachZip in zips:
    i = 1
    with zipfile.ZipFile("/home/shanu/THM/AdvOfCyber/16-File-Confusion(Python-Scripting)/downloaded-files/" + str(eachZip)) as zip_ref:
        zip_ref.extractall("/home/shanu/THM/AdvOfCyber/16-File-Confusion(Python-Scripting)/extracted-zips/" + str(i))
        i = i + 1