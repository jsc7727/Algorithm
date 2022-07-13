import sys
import heapq

input = sys.stdin.readline

N = int(input().strip())
hq = []
for i in range(N):
    heapq.heappush(hq, int(input().strip()))

result = 0
while len(hq) >= 2:
    temp1 = heapq.heappop(hq)
    temp2 = heapq.heappop(hq)
    temp3 = (temp1 + temp2)
    result += temp3
    heapq.heappush(hq, temp3)
print(result)
