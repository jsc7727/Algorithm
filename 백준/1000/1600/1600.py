# https: // www.acmicpc.net/problem/1600
from collections import deque
import sys
input = sys.stdin.readline

C = int(input())
[M, N] = map(int, input().strip().split(' '))
arr = []
for _ in range(N):
    inputArr = list(map(int, input().strip().split(' ')))
    arr.append(inputArr)


def isValid(x, y):
    return 0 <= x and x < N and 0 <= y and y < M


arrows = [[-1, 0], [0, 1], [1, 0], [0, -1]]
horseArrows = [[-2, -1], [-2, 1], [-1, -2],
               [-1, 2], [1, -2], [1, 2], [2, -1], [2, 1]]


def bfs():
    q = deque()
    q.append([0, 0, C])
    count = [[[0] * (C + 1) for _ in range(M)] for _ in range(N)]
    while (q):
        [x1, y1, K] = q.popleft()
        print(x1, y1, K)
        if (x1 == N-1 and y1 == M-1):
            return count[x1][y1][K]
        if K > 0:
            for [x2, y2] in horseArrows:
                [x3, y3] = [x1 + x2, y1 + y2]
                if (isValid(x3, y3) and arr[x3][y3] == 0 and count[x3][y3][K-1] == 0):
                    q.append([x3, y3, K-1])
                    count[x3][y3][K-1] = count[x1][y1][K]+1

        for [x2, y2] in arrows:
            [x3, y3] = [x1 + x2, y1 + y2]
            if (isValid(x3, y3) and arr[x3][y3] == 0 and count[x3][y3][K] == 0):
                q.append([x3, y3, K])
                count[x3][y3][K] = count[x1][y1][K]+1

    return -1


print(bfs())
