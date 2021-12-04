# https://www.acmicpc.net/problem/11286
import heapq
import sys
input = sys.stdin.readline
c = int(input().strip())
q = []
for _ in range(c):
    n = int(input().strip())
    if n != 0:
        heapq.heappush(q, [abs(n), n])
    elif n == 0 and q:
        print(heapq.heappop(q)[1])
    else:
        print(0)
