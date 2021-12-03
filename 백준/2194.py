# https://www.acmicpc.net/problem/2194

# 5 5 2 2 3
# 2 2
# 3 2
# 3 3
# 4 1
# 1 4

import sys
from collections import deque
input = sys.stdin.readline
n, m, a, b, k = map(int, input().strip().split())
arr = [[0]*m for _ in range(n)]
for i in range(k):
    x, y = map(int, input().strip().split())
    arr[x-1][y-1] = 1

sx, sy = map(int, input().strip().split())
sx, sy = sx-1, sy-1
ex, ey = map(int, input().strip().split())
ex, ey = ex-1, ey-1


def check(arrow, x3, y3):
    global arr
    if arrow == 'L':
        for i in range(a):
            if arr[x3+i][y3] == 1:
                return False

    if arrow == 'R':
        for i in range(a):
            if arr[x3+i][y3+(b-1)] == 1:
                return False

    if arrow == 'U':
        for i in range(b):
            if arr[x3][y3+i] == 1:
                return False

    if arrow == 'D':
        for i in range(b):
            if arr[x3+(a-1)][y3+i] == 1:
                return False

    return True


def bfs(x, y, count=0):
    global arr
    arr[x][y] = 1
    dq = deque([[x, y, count]])
    while dq:
        x1, y1, count = dq.popleft()
        print("asdf", x1, y1, count)
        for i in arr:
            print(i)
        print()
        if x1 == ex and y1 == ey:
            return count
        # print()
        for x2, y2, arrow in [[0, -1, 'L'], [0, 1, 'R'], [-1, 0, 'U'], [1, 0, 'D']]:
            x3, y3 = x1+x2, y1+y2
            if 0 <= x3 < n-(a-1) and 0 <= y3 < m-(b-1) and arr[x3][y3] == 0 and check(arrow, x3, y3):
                # print(check(arrow, x3, y3))
                arr[x3][y3] = 1
                dq.append([x3, y3, count+1])
    return -1


print(bfs(sx, sy))
