# https://www.acmicpc.net/problem/1655

from heapq import *
import sys

c = int(sys.stdin.readline())
t = [int(sys.stdin.readline().strip()) for _ in range(c)]

minQ = []
maxQ = []
result = []
for i in range(c):
    if len(maxQ) == len(minQ):
        heappush(maxQ, (-t[i], t[i]))
    else:
        heappush(minQ, t[i])
    if minQ and maxQ[0][1] > minQ[0]:
        maxQ0 = heappop(maxQ)[1]
        minQ0 = heappop(minQ)
        heappush(maxQ, (-minQ0, minQ0))
        heappush(minQ, maxQ0)
    print(maxQ[0][1])
