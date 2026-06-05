import urllib.request
import re
import sys

url = 'https://api.visitorbadge.io/api/visitors?path=shlokdhanokar.portfolio'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})

count = 0
while count < 250:
    try:
        svg = urllib.request.urlopen(req).read().decode('utf-8')
        matches = re.findall(r'<text[^>]*>(\d+)</text>', svg)
        if matches:
            count = int(matches[-1])
            sys.stdout.write(f'\rCount is now {count}')
            sys.stdout.flush()
        else:
            break
    except Exception as e:
        print(f"Error: {e}")
        break
print("\nDone!")
