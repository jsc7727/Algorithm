# https://www.acmicpc.net/problem/1051

# 3 5
# 42101
# 22100
# 22101

import sys
input = sys.stdin.readline
n, m = map(int, input().strip().split())
arr = [input().strip() for _ in range(n)]
# print(n, m)
size = 1
flag = False
for i in range(min(n, m), 1, -1):
    # print(i)
    for j in range(n-i+1):
        for k in range(m-i+1):
            # print(j, k, i)
            if arr[j][k] == arr[j][k+i-1] == arr[j+i-1][k] == arr[j+i-1][k+i-1]:
                size = i
                flag = True
                break

        if flag:
            break
    if flag:
        break

print(size**2)
