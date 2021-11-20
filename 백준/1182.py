# https://www.acmicpc.net/problem/1182

# input
# 5 0
# -7 -3 -2 5 8

# output
# 1

from itertools import *
n, s = map(int, input().split())
l = list(map(int, input().split()))

result = 0
for i in range(1, n+1):
    for k in combinations(l, i):
        if sum(k) == s:
            result += 1

print(result)
