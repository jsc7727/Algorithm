# https://www.acmicpc.net/problem/2740


# 예제 입력

# 3 2
# 1 2
# 3 4
# 5 6
# 2 3
# -1 -2 0
# 0 0 3

# 예제 출력

# -1 -2 6
# -3 -6 12
# -5 -10 18

import sys
n, m = map(int, input().split())
arr1 = [list(map(int, sys.stdin.readline().strip().split())) for i in range(n)]

m, k = map(int, input().split())
arr2 = [list(map(int, sys.stdin.readline().strip().split())) for i in range(m)]


temp = [[0 for _ in range(k)] for i in range(n)]
for x in range(n):  # a1 열
    for y in range(k):  # a1 행
        for z in range(m):  # 증가
            temp[x][y] += arr1[x][z] * arr2[z][y]


for i in temp:
    print(*i)
