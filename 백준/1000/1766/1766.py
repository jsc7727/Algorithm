import sys
import heapq
input = sys.stdin.readline

N, M = map(int, input().strip().split(' '))
edgeList = [0] * N
graph = [[] for i in range(N)]
for i in range(M):
    a, b = map(int, input().strip().split(' '))
    edgeList[b-1] += 1
    graph[a-1].append(b-1)

answer = []
hq = []
for i in range(N):
    if edgeList[i] == 0:
        heapq.heappush(hq, i)

while len(hq) > 0:
    v = heapq.heappop(hq)
    answer.append(v+1)
    for i in graph[v]:
        edgeList[i] -= 1
        if(edgeList[i] == 0):
            heapq.heappush(hq, i)
print(*answer)
