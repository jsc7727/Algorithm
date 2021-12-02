# https://www.acmicpc.net/problem/2531


# 8 30 4 30
# 7
# 9
# 7
# 30
# 2
# 7
# 9
# 25


import sys
input = sys.stdin.readline

n, d, k, c = map(int, input().strip().split())
arr = [int(input().strip()) for _ in range(n)]
countArr = [0]*(d+1)
count = 0
m = 0
for i in range(k):
    if countArr[arr[i]] == 0:
        count += 1
    countArr[arr[i]] += 1
else:
    m = count + (countArr[c] == 0)


for p1 in range(n):
    p2 = p1+k
    if countArr[arr[p1]] == 1:
        count -= 1
    countArr[arr[p1]] -= 1
    if countArr[arr[p2 % n]] == 0:
        count += 1
    countArr[arr[p2 % n]] += 1

    m = max(m, count + (countArr[c] == 0))
print(m)
