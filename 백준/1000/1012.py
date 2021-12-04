# https://www.acmicpc.net/problem/1012


import sys
from collections import deque


def bfs(k, j):
    q = deque([[k, j]])
    while q:
        x, y = q.popleft()
        arr[x][y] = 0
        for xx, yy in [[1, 0], [0, 1], [-1, 0], [0, -1]]:
            xxx, yyy = xx+x, yy+y
            if 0 <= xxx < N and 0 <= yyy < M and arr[xxx][yyy] == 1:
                arr[xxx][yyy] = 0
                q.append([xxx, yyy])
    return 1


C = int(sys.stdin.readline().strip())
q = deque([])
for i in range(C):
    M, N, K = map(int, sys.stdin.readline().strip().split())
    # print(M, N, K)
    arr = [[0] * M for _ in range(N)]
    for k in range(K):
        m, n = map(int, sys.stdin.readline().strip().split())
        arr[n][m] = 1
    # print(arr)
    result = 0
    for k in range(N):
        for j in range(M):
            if arr[k][j] == 1:
                result += bfs(k, j)
    print(result)
