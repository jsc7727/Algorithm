
from collections import deque
[n, m] = map(int, input().split(' '))
arr = []
for i in range(n):
    arr.append(input())


def isValid(x, y):
    return 0 <= x < n and 0 <= y < m


def bfs(i, j):
    count = 0
    dq = deque([[i, j]])
    checkList = [[0]*m for _ in range(n)]
    checkList[i][j] = 1
    while dq:
        [x, y] = dq.popleft()
        count = max(count, checkList[x][y])
        for [xx, yy] in [[0, 1], [1, 0], [0, -1], [-1, 0]]:
            [xxx, yyy] = [x + xx, y + yy]
            if isValid(xxx, yyy) and arr[xxx][yyy] == 'L' and checkList[xxx][yyy] == 0:
                checkList[xxx][yyy] = checkList[x][y]+1
                dq.append([xxx, yyy])
    return count-1


def treasureIsland():
    answer = 0
    for i in range(n):
        for j in range(m):
            if arr[i][j] == 'L':
                count = bfs(i, j)
                if count > answer:
                    answer = count
    return answer


res = treasureIsland()
print(res)
