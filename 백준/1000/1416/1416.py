

from bisect import bisect_left
import sys
input = sys.stdin.readline

N, M = map(int, input().strip().split(' '))
arr = list(map(lambda x: x*2, map(int, input().strip().split(' '))))
arr.sort()
idx = bisect_left(arr, 0)
arrMin = arr[:idx]
arrMax = arr[idx:][::-1]
result = 0
# print(N, M, arrMin, arrMax)
for i in range(0, len(arrMin), M):
    result += abs(arrMin[i])
for i in range(0, len(arrMax), M):
    result += abs(arrMax[i])

result -= (max(abs(arrMin[0] if arrMin else 0),
           abs(arrMax[0] if arrMax else 0))//2)
print(result)
