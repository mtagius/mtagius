import webbrowser
import os
import time

os.popen("start chrome")

time.sleep(1)

with open("tabs.txt", 'r') as file:  
    for line in file:
        line = line.replace("\"", "")
        line = line.strip()
        webbrowser.open(line)
        
#os.popen("localhost 80")