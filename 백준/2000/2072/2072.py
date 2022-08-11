import collections
import sys
input = sys.stdin.readline

N = int(input())

board = [[0 for _ in range(20)] for _ in range(20)]

visited = []


def isValid(x, y): return 0 <= x < 20 and 0 <= y < 20


def bfs(a, b, arrow, color):
    arrows = [arrow, [-i for i in arrow]]
    dq = collections.deque([[a, b]])
    count = 1
    while len(dq) > 0:
        x, y = dq.popleft()
        for xx, yy in arrows:
            xxx, yyy = x+xx, y+yy
            if isValid(xxx, yyy) and visited[xxx][yyy] == False and board[xxx][yyy] == color:
                visited[xxx][yyy] = True
                count += 1
                dq.append([xxx, yyy])
    return count


arr = [list(map(int, input().strip().split(' '))) for i in range(N)]
for i in range(N):
    x, y = arr[i]
    color = 1 if i % 2 == 0 else 2
    board[x][y] = color
    visited = [[False for _ in range(20)] for _ in range(20)]
    visited[x][y] = True

    for arrow in [[-1, -1], [-1, 0], [-1, 1], [0, 1]]:
        if bfs(x, y, arrow, color) == 5:
            print(i+1)
            exit()
else:
    print(-1)
