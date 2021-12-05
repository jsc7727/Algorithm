# https://www.acmicpc.net/problem/1389

# 5 5
# 1 3
# 1 4
# 4 5
# 4 3
# 3 2

import sys
input = sys.stdin.readline

n, m = map(int, input().strip().split())

arr = [[n+1]*(n+1) for _ in range(n+1)]

for _ in range(m):
    x, y = map(int, input().strip().split())
    arr[x][y] = 1
    arr[y][x] = 1

for i in range(1, n+1):
    # 거쳐가는 경로
    for j in range(1, n+1):
        # y 축
        for k in range(1, n+1):
            # x 축
            if arr[j][k] > arr[j][i]+arr[i][k]:
                arr[j][k] = arr[j][i]+arr[i][k]
# for i in arr:
#     print(i)
mn = float('inf')
idx = 0
for i, value in enumerate(arr[1:]):
    if mn > sum(value[1:]):
        mn = sum(value[1:])
        idx = i
print(idx+1)
