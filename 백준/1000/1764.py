# https://www.acmicpc.net/problem/1764

# 3 4
# ohhenrie
# charlie
# baesangwook
# obama
# baesangwook
# ohhenrie
# clinton

import sys
from collections import Counter
input = sys.stdin.readline
n, m = map(int, input().strip().split())
arr1 = [input().strip() for _ in range(n)]
dic = Counter(arr1)
# print(arr1, dic)
temp = []
for i in range(m):
    s = input().strip()
    if s in dic:
        temp.append(s)

print(len(temp))
temp.sort()
for i in temp:
    print(i)
