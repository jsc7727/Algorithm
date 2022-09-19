import sys
import heapq
input = sys.stdin.readline

N, E = map(int, input().split(" "))

graph = [[] for _ in range(N+1)]
visit = [False] * (N+1)


for i in range(E):
    a, b, c = map(int, input().split(" "))
    graph[a].append([b, c])
    graph[b].append([a, c])

# print(graph)
v1, v2 = map(int, input().split(" "))

answer = 0


def solution(start, end, count):
    dist = [int(1e9) for _ in range(N+1)]
    dist[start] = 0
    heap = []

    heapq.heappush(heap, [0, start])

    while(heap):
        val, current = heapq.heappop(heap)

        if val > dist[current]:
            continue

        for nextCur, nextCost in graph[current]:
            distance = nextCost + val
            if distance < dist[nextCur]:
                dist[nextCur] = distance
                heapq.heappush(heap, [distance, nextCur])
    if(dist[end] == int(1e9)):
        return -1
    count = dist[end]
    return count


flag = False
result = solution(1, v1, 0)
if result == -1:
    flag = True
if(not flag):
    answer += result
    result = solution(v1, v2, 0)

    if(result == -1):
        flag = True
if(not flag):
    answer += result
    result = solution(v2, N, 0)
    if(result == -1):
        flag = True
    else:
        answer += result
# print(answer)
flag2 = False
ans = 0
result = solution(1, v2, 0)
if(result == -1):
    flag2 = True
if(not flag2):
    ans += result
    result = solution(v2, v1, 0)
    if(result == -1):
        flag2 = True
if(not flag2):
    ans += result
    result = solution(v1, N, 0)
    if(result == -1):
        flag2 = True
    else:
        ans += result
# print(ans)
if(flag and flag2):
    print(-1)
else:
    print(min(answer, ans))