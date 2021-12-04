# https://www.acmicpc.net/problem/2003

import sys
N, M = map(int, input().split())
arr = list(map(int, sys.stdin.readline().strip().split()))


p1 = 0
p2 = 0
result = 0
while True:
    if p2 == N+1:
        break
    print(p1, p2)

    if sum(arr[p1:p2]) > M:
        p1 += 1
    elif sum(arr[p1:p2]) < M:
        p2 += 1
    elif sum(arr[p1:p2]) == M:
        p1 += 1
        p2 += 1
        result += 1
print(result)
