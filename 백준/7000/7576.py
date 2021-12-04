# https://www.acmicpc.net/problem/7576


import sys
from collections import deque
m, n = map(int, sys.stdin.readline().strip().split())
arr = [list(map(int, sys.stdin.readline().strip().split())) for _ in range(n)]

# print(arr)

count = -1
lst = []
for i in range(n):
    for k in range(m):
        if arr[i][k] == 1:
            lst.append([i, k])
dq = deque([lst])
while dq:
    nl = []
    l = dq.popleft()
    if len(l) == 0:
        break

    count += 1
    for i, k in l:
        for x, y in [[0, 1], [1, 0], [0, -1], [-1, 0]]:
            xx, yy = i+x, k+y
            if 0 <= xx < n and 0 <= yy < m and arr[xx][yy] == 0:
                arr[xx][yy] = 1
                nl.append([xx, yy])
    dq.append(nl)

flag = True
for i in arr:
    if 0 in i:
        flag = False
        break

if flag:
    print(count)
else:
    print(-1)
