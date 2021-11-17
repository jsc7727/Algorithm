# https://www.acmicpc.net/problem/1260
# DFS와 BFS

# input
# 4 5 1
# 1 2
# 1 3
# 1 4
# 2 4
# 3 4

# output
# 1 2 4 3
# 1 2 3 4

from collections import deque

n, m, start = list(map(int, input().split()))
graph = [[0] * (n+1) for i in range(n+1)]

for i in range(m):
    m1, m2 = map(int, input().split())
    graph[m1][m2] = graph[m2][m1] = 1


def dfs(s, lst=[]):
    lst.append(s)
    print(s, end=' ')
    for i in range(len(graph[s])):
        if graph[s][i] == 1 and (i not in lst):
            dfs(i, lst)


def bfs(start):
    q = deque()
    answer = [start]
    q.append([start])
    while q:
        getQ = q.popleft()
        for i in range(len(graph[getQ[-1]])):
            if graph[getQ[-1]][i] == 1 and (i not in answer):
                answer.append(i)
                q.append(getQ+[i])
    print(*answer[:n])


lst = [start]
dfs(start)
print()
bfs(start)
