# https://www.acmicpc.net/problem/2206

# import time
# import os
# 주석풀면 움직이는게 보입니다??
# for i in range(len(arr2)):
#     print(arr1[i])
# print(x1, y1, count)
# time.sleep(0.3)
# os.system('cls')


import sys
from collections import deque
N, M = map(int, sys.stdin.readline().strip().split())
arr1 = [list(map(int, list(sys.stdin.readline().strip()))) for _ in range(N)]
arr2 = [[[-1, -1] for _ in range(M)] for _ in range(N)]

arr2[0][0][0] = 1
arrow = [[1, 0], [0, 1], [-1, 0], [0, -1]]
q = deque([(0, 0, 0)])
flag = True
while q:
    x1, y1, count = q.popleft()
    if x1 == N-1 and y1 == M-1:
        flag = False
        print(arr2[N-1][M-1][count])
        break
    for x2, y2 in arrow:
        x3, y3 = x1+x2, y1+y2
        if 0 <= x3 < N and 0 <= y3 < M:
            if arr1[x3][y3] == 1 and count == 0 and arr2[x3][y3][1] == -1:
                arr2[x3][y3][1] = arr2[x1][y1][0] + 1
                q.append((x3, y3, 1))

            elif arr1[x3][y3] == 0 and arr2[x3][y3][count] == -1:
                arr2[x3][y3][count] = arr2[x1][y1][count]+1
                q.append((x3, y3, count))
if flag:
    print(-1)
