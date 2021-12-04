from collections import deque
n, m = map(int, input().split())
a = [list(map(int, input())) for _ in range(n)]
dist = [[-1]*m for _ in range(n)]
dist[0][0] = 1
t = [[-1, 0], [0, -1], [1, 0], [0, 1]]
s = deque([[0, 0]])
while s:
    x, y = s.popleft()
    if x == n-1 and y == m-1:
        print(dist[x][y])
        break
    for xx, yy in t:
        x3, y3 = x+xx, y+yy
        if 0 <= x3 < n and 0 <= y3 < m and dist[x3][y3] == -1 and a[x3][y3] == 1:
            dist[x3][y3] = dist[x][y]+1
            s.append([x3, y3])
    dist[x][y] = 0
