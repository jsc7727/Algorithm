# https://www.acmicpc.net/problem/1719

# https://www.youtube.com/watch?v=611B-9zk2o4

# 미완성

# 6 10
# 1 2 2
# 1 3 1
# 2 4 5
# 2 5 3
# 2 6 7
# 3 4 4
# 3 5 6
# 3 6 7
# 4 6 4
# 5 6 2
from collections import defaultdict

n, m = map(int, input().split())
g = defaultdict(lambda: [])

for i in range(m):
    a, b, c = map(int, input().split())
    print(a, b, c)
    g[a].append([b, c])

visited = [False] * (n+1)
print(g)

for i in range(n):
    for k in g[i]:
        print(k)

    print()
