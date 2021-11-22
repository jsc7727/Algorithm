# https://www.acmicpc.net/problem/23559
import sys
input = sys.stdin.readline
n, x = map(int, input().strip().split())
arr = [list(map(int, input().strip().split())) for _ in range(n)]
# print(n, x, arr)
f = (x - (n * 1000)) // 4000
arr.sort(key=lambda x: x[1] - x[0])
# print(f)
# print(arr)
result = 0
for a, b in arr:
    if a > b and f > 0:
        f -= 1
        result += a
    else:
        result += b
print(result)
