import sys

n, k = map(int, sys.stdin.readline().split())

stuffs = [list(map(int, sys.stdin.readline().split())) for _ in range(n)]

# print(stuffs)
dist = [[0] * (k+1) for _ in range(len(stuffs)+1)]
# stuffs [0] 무게
# stuffs [1] 가치

# n = 5
# k = 15
# stuffs = [(12, 4),
#           (1, 2),
#           (4, 10),
#           (1, 1),
#           (2, 2), ]

for i in range(len(stuffs)+1):
    for j in range(k+1):
        if i == 0 or j == 0:
            continue

        elif stuffs[i-1][0] <= j:
            dist[i][j] = max(
                dist[i-1][j],
                stuffs[i-1][1]+dist[i-1][j-stuffs[i-1][0]]
            )
        else:
            dist[i][j] = dist[i-1][j]
    for i in dist:
        print(i)
    print()

print(dist[-1][-1])
