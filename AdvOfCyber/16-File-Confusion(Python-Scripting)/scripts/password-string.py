import os

files = os.listdir("/home/shanu/THM/AdvOfCyber/16-File-Confusion(Python-Scripting)/extracted-zips/1")
upper = len(files) - 1

for i in range (0, upper):
    files[i] = "/home/shanu/THM/AdvOfCyber/16-File-Confusion(Python-Scripting)/extracted-zips/1/" + files[i]

for eachFile in files:
    with open(eachFile, "r") as f:

        if "password" in f:
            print("password found in " + eachFile)   