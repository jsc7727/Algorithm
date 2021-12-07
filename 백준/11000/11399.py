# https://www.acmicpc.net/problem/11399


# 5
# 3 1 4 3 2


import sys
input = sys.stdin.readline
c = int(input().strip())

arr = list(map(int, input().strip().split()))
arr.sort()

temp = 0
result = 0
for i in arr:
    temp += i
    result += temp
print(result)
