

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

arr = [list(sys.stdin.readline().strip()) for _ in range(n)]

x, y = map(int, sys.stdin.readline().strip().split())
command = sys.stdin.readline().strip()


def bfs(x, y):
    global arr

    q = deque([[x, y]])
    value = arr[x][y]
    arr[x][y] = '.'
    while q:
        x1, y1 = q.popleft()
        for x2, y2 in [[0, -1], [-1, 0], [0, 1], [1, 0]]:
            x3, y3 = x1+x2, y1+y2
            if 0 <= x3 < n and 0 <= y3 < m and arr[x3][y3] == value and arr[x3][y3] != '.':
                arr[x3][y3] = '.'
                q.append([x3, y3])
    return


for i in range(len(command)):
    if command[i] == 'W':
        if arr[x-1][y-1] != '.':
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
            arr[x1][y1] = '.'
    arr[x-1][y-1] = '.'


for i in arr:
    for k in i:
        if k == '.':
            print('.', end='')
        else:
            print('#', end='')
    print()
