# https://www.acmicpc.net/problem/2206


import sys
from collections import deque
import time
import os

N, M = map(int, sys.stdin.readline().strip().split())

arr1 = [sys.stdin.readline().strip() for i in range(N)]
# print(arr1)

arr2 = [[-1]*M for i in range(N)]
# print(arr2)
arr2[0][0] = 1
arrow = [[1, 0], [0, 1], [-1, 0], [0, -1]]
q = deque([(0, 0, 0)])
while q:
    x, y, count = q.popleft()

    # 주석풀면 움직이는게 보입니다??
    for i in range(len(arr2)):
        print(arr2[i])
    print(x, y, count)
    time.sleep(0.3)
    os.system('cls')

    if x == N-1 and y == M-1:
        continue
    # if arr2[x][y] > 1:
    #     continue

    for xx, yy in arrow:
        xxx, yyy = x+xx, y+yy
        if 0 <= xxx < N and 0 <= yyy < M:
            if arr2[xxx][yyy] < arr2[x][y] and count < 2:
                if arr1[xxx][yyy] == '0':
                    arr2[xxx][yyy] = arr2[x][y]+1
                    q.appendleft((xxx, yyy, count))
                elif arr1[xxx][yyy] == '1':
                    arr2[xxx][yyy] = arr2[x][y]+1
                    q.append((xxx, yyy, count+1))
print(arr2[N-1][M-1])

# for i in range(len(arr2)):
#     print(arr2[i])
