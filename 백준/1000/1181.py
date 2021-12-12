# https://www.acmicpc.net/problem/1181

import sys
from collections import defaultdict
input = sys.stdin.readline

count = int(input().strip())
dic = defaultdict()
arr = list(set([input().strip() for _ in range(count)]))
arr.sort(key=lambda x: (len(x), x))
for i in arr:
    print(i)
