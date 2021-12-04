# https://www.acmicpc.net/problem/16948

# 7
# 6 6 0 1

# 4

import sys
from collections import deque
input = sys.stdin.readline

count = int(input().strip())
x1, y1, x2, y2 = map(int, input().strip().split())

arr = [[-1 for k in range(count)] for i in range(count)]
dq = deque([[x1, y1, 0]])

result = -1
while dq:
    x, y, value = dq.popleft()
    if x == x2 and y == y2:
        result = value
        break

    for xx, yy in [(-2, -1), (-2, 1), (0, -2), (0, 2), (2, -1), (2, 1)]:
        xxx, yyy = x+xx, y+yy
        if 0 <= xxx < count and 0 <= yyy < count and arr[xxx][yyy] == -1:
            arr[xxx][yyy] = 0
            dq.append([xxx, yyy, value+1])
print(result)
