# https://www.acmicpc.net/problem/1261

from collections import deque
m, n = map(int, input().split())

a = [input() for _ in range(n)]

dist = [[-1]*m for _ in range(n)]
dist[0][0] = 0

q = deque([[0, 0]])
while q:
    x, y = q.pop()
    if x == n-1 and y == m-1:
        break

    for xx, yy in [(-1, 0), (0, -1), (1, 0), (0, 1)]:
        x3, y3 = x+xx, y+yy
        if 0 <= x3 < n and 0 <= y3 < m:
            if dist[x3][y3] == -1:
                if a[x3][y3] == '0':
                    dist[x3][y3] = dist[x][y]
                    q.append([x3, y3])
                else:
                    dist[x3][y3] = dist[x][y]+1
                    q.appendleft([x3, y3])
print(dist[x][y])
