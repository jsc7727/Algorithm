import sys
import collections
input = sys.stdin.readline
N, M = map(int, input().strip().split())
arr = collections.defaultdict(list)
for _ in range(M):
    a, b = map(int, input().strip().split())
    arr[b].append(a)

result = []
maxCount = 0


def bfs(v):
    count = 1
    visited = [False for i in range(N+1)]
    queue = collections.deque([v])
    while queue:
        x = queue.popleft()
        for i in arr[x]:
            if not visited[i]:
                visited[i] = True
                queue.append(i)
                count += 1
    return count


for i in range(1, N+1):
    count = bfs(i)
    if count > maxCount:
        maxCount = count
        result = [i]
    elif count == maxCount:
        result.append(i)

print(*result)
