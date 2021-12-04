import heapq
import sys
input = sys.stdin.readline
c = int(input().strip())
q = []
heapq.heapify(q)
for _ in range(c):
    n = int(input().strip())
    if n > 0:
        heapq.heappush(q, -n)
    elif n == 0 and q:
        print(-heapq.heappop(q))
    else:
        print(0)
