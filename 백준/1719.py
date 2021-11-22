# https://www.acmicpc.net/problem/1719

# 예제 입력 1
# 6 10
# 1 2 2
# 1 3 1
# 2 4 5
# 2 5 3
# 2 6 7
# 3 4 4
# 3 5 6
# 3 6 7
# 4 6 4
# 5 6 2

# 예제 출력 1
# - 2 3 3 2 2
# 1 - 1 4 5 5
# 1 1 - 4 5 6
# 3 2 3 - 6 6
# 2 2 3 6 - 6
# 5 5 3 4 5 -

import sys
n, m = map(int, sys.stdin.readline().strip().split())
arr = [list(map(int, sys.stdin.readline().strip().split())) for _ in range(m)]
arr2 = [[float('inf')]*(n) for _ in range(n)]
arr3 = [[0]*(n) for _ in range(n)]

for start, destination, value in arr:
    arr2[start-1][destination-1] = min(arr2[start-1][destination-1], value)
    arr2[destination-1][start-1] = min(arr2[destination-1][start-1], value)
    arr3[start-1][destination-1] = destination
    arr3[destination-1][start-1] = start

for i in range(n):
    for k in range(n):
        for j in range(n):
            if arr2[k][j] > arr2[k][i]+arr2[i][j]:
                arr2[k][j] = arr2[k][i]+arr2[i][j]
                arr3[k][j] = arr3[k][i]

for i in range(n):
    arr3[i][i] = '-'
for i in arr3:
    print(*i)
