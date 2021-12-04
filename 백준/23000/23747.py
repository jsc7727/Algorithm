

# 4 5
# aaabc
# dcbbc
# dccaa
# ddaaa
# 3 4
# WLLLWUURRD

from collections import deque
import sys

n, m = map(int, sys.stdin.readline().strip().split())

arr = [sys.stdin.readline().strip() for _ in range(n)]
check = [['#']*m for _ in range(n)]
x, y = map(int, sys.stdin.readline().strip().split())
command = sys.stdin.readline().strip()


# 전형적인 bfs 부분이다.
def bfs(x, y):
    global arr
    q = deque([[x, y]])
    value = arr[x][y]
    check[x][y] = '.'
    while q:
        x1, y1 = q.popleft()
        for x2, y2 in [[0, -1], [-1, 0], [0, 1], [1, 0]]:
            x3, y3 = x1+x2, y1+y2
            if 0 <= x3 < n and 0 <= y3 < m and arr[x3][y3] == value and check[x3][y3] == '#':
                check[x3][y3] = '.'
                q.append([x3, y3])
    return


for i in range(len(command)):
    if command[i] == 'W':
        if check[x-1][y-1] == '#':
            bfs(x-1, y-1)
    elif command[i] == 'L':
        x, y = x, y-1
    elif command[i] == 'R':
        x, y = x, y+1
    elif command[i] == 'U':
        x, y = x-1, y
    elif command[i] == 'D':
        x, y = x+1, y
else:
    for xx, yy in [[0, -1], [-1, 0], [0, 1], [1, 0]]:
        x1, y1 = x+xx-1, y+yy-1
        if 0 <= x1 < n and 0 <= y1 < m:
            check[x1][y1] = '.'
    check[x-1][y-1] = '.'


# 이부분이 시간초과의 원인이였다.
# O(n) 돌아도 괜찮겠지 했는데
# 2중 for 문 써서 '.' or '#' 으로 체크했더니 시간초과가 났다.
for i in check:
    print(*i, sep='')
