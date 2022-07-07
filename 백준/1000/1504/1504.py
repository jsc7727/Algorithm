import heapq
import sys

input = sys.stdin.readline
inf = float('inf')

N, E = map(int, input().strip().split())
arr = [[] for _ in range(N+1)]
for i in range(E):
    a, b, c = map(int, input().strip().split())
    arr[a].append([b, c])
    arr[b].append([a, c])

v1, v2 = map(int, input().split())


def dijkstra(vertex):
    checkList = [inf for _ in range(N+1)]
    checkList[vertex] = 0
    minHeap = [[0, vertex]]
    while(minHeap):
        heapDistance, heapVertex = heapq.heappop(minHeap)
        if checkList[heapVertex] > heapDistance:
            continue
        for [arrVertex, arrDistance] in arr[heapVertex]:
            totalDistance = arrDistance + heapDistance
            if checkList[arrVertex] > totalDistance:
                checkList[arrVertex] = totalDistance
                heapq.heappush(minHeap, [totalDistance, arrVertex])
    return checkList


res_start = dijkstra(1)
res_v1 = dijkstra(v1)
res_v2 = dijkstra(v2)
result = min(res_start[v1]+res_v1[v2]+res_v2[N],
             res_start[v2]+res_v2[v1]+res_v1[N])
print(result if result != inf else -1)
