# https://www.acmicpc.net/problem/1806


import sys
N, S = map(int, input().split())
arr = list(map(int, sys.stdin.readline().strip().split()))

p1 = 0
p2 = 0
temp = arr[0]
m = 100001


while True:
    if S > temp:
        p2 += 1
        if p2 == N:
            break
        temp += arr[p2]

    else:
        temp -= arr[p1]
        m = min(m, p2-p1+1)
        p1 += 1


if m == 100001:
    print(0)
else:
    print(m)
