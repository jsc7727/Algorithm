
import sys
input = sys.stdin.readline

[N, M] = map(int, input().split(' '))
arr = [[0]*(M+2)]
for i in range(1, N+1):
    s = 0
    temp = [0]
    inputList = list(map(int, input().split(' ')))
    for k in range(len(inputList)):
        s += inputList[k]
        temp.append(s+arr[i-1][k+1])
    arr.append(temp)


def getValue(x1, y1, x2, y2):
    northWest = 0
    north = 0
    west = 0
    # if x1 > 0 and y1 > 0:
    northWest = arr[x1 - 1][y1 - 1]
    # if x1 > 0:
    north = arr[x1 - 1][y2]
    # if y1 > 0:
    west = arr[x2][y1 - 1]
    return arr[x2][y2] - (north + west - northWest)


for i in range(M):
    [x1, y1, x2, y2] = map(int, input().split(' '))
    print(getValue(x1, y1, x2, y2))
