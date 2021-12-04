# https://www.acmicpc.net/problem/1759

# acis
# acit
# aciw
# acst
# acsw
# actw
# aist
# aisw
# aitw
# astw
# cist
# cisw
# citw
# istw

from itertools import combinations

import sys
L, C = map(int, sys.stdin.readline().strip().split())
check = ['a', 'e', 'i', 'o', 'u']
iArr = list(sys.stdin.readline().strip().split())


arr = []
for k in sorted(combinations(iArr, L)):
    temp = "".join(sorted(k))
    a = 0
    b = 0
    for i in temp:
        if i in check:
            a += 1
        else:
            b += 1

    if a >= 1 and b >= 2:
        arr.append(temp)
for i in sorted(arr):
    print(i)
