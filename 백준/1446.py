# https://www.acmicpc.net/problem/1446

# input


n, d = map(int, input().split())
l = [list(map(int, input().split())) for _ in range(n)]

dist = [i for i in range(d+1)]
for i in range(d+1):
    if i > 0 and (dist[i-1] + 1) < dist[i]:
        dist[i] = dist[i-1] + 1
    for a, b, c in l:
        if a == i and b <= d and dist[i]+c < dist[b]:
            dist[b] = dist[i]+c
print(dist[d])
