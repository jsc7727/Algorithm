# https://www.acmicpc.net/problem/15686
from itertools import combinations
import sys

input = sys.stdin.readline
n, m = map(int, input().strip().split())
arr = [list(map(int, input().strip().split())) for _ in range(n)]

def chickenLen(hx, hy, cx, cy):
    return abs(hx-cx)+abs(hy-cy)


chickenArr = []
homeArr = []
for i in range(n):
    for k in range(n):
        if arr[i][k] == 2:
            chickenArr.append([i, k])
        elif arr[i][k] == 1:
            homeArr.append([i, k])
result = float('inf')
for tempArr in list(combinations(chickenArr, m)):
    temp1 = 0
    for hx, hy in homeArr:
        temp2 = float('inf')
        for cx, cy in tempArr:
            temp2 = min(temp2, chickenLen(hx, hy, cx, cy))
        temp1 += temp2
    result = min(result, temp1)
print(result)
