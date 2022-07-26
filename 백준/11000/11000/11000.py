import heapq
import sys

input = sys.stdin.readline
N = int(input())

arr = []

for i in range(N):
    [a, b] = map(int, input().split(' '))
    arr.append([a, b])

arr.sort()

hq = [arr[0][1]]
for i in range(1, N):
    if hq[0] > arr[i][0]:
        heapq.heappush(hq, arr[i][1])
    else:
        heapq.heappop(hq)
        heapq.heappush(hq, arr[i][1])

print(len(hq))
