
from collections import deque
import sys
input = sys.stdin.readline


def lotate(arr, x, y, z):
    for i in range(1, z+1):
        topX, topY = x-i, y-i
        rightX, rightY = x-i, y+i
        bottomX, bottomY = x+i, y+i
        leftX, leftY = x+i, y-i

        temp = arr[topX][topY]
        arr[topX][topY] = arr[topX+1][topY]
        # top
        for k in range(1, i*2+1):
            temp2 = arr[topX][topY+k]
            arr[topX][topY+k] = temp
            temp = temp2

        # right
        for k in range(1, i*2+1):
            temp2 = arr[rightX+k][rightY]
            arr[rightX+k][rightY] = temp
            temp = temp2

        # bottom
        for k in range(1, i*2+1):
            temp2 = arr[bottomX][bottomY-k]
            arr[bottomX][bottomY-k] = temp
            temp = temp2

        # left
        for k in range(1, i*2+1):
            temp2 = arr[leftX-k][leftY]
            arr[leftX-k][leftY] = temp
            temp = temp2


N, M, K = list(map(int, input().strip().split()))
arr = []
for i in range(N):
    arr.append(list(map(int, input().strip().split())))

# print(arr)


def bfs(arr, lotateList):
    m = 50000
    dq = deque([[arr, [False]*len(lotateList)]])
    while dq:
        [dqArr, dqLotateList] = dq.popleft()

        if False not in dqLotateList:
            for i in dqArr:
                temp = sum(i)
                if m > temp:
                    m = temp
            continue

        for i in range(len(dqLotateList)):
            if dqLotateList[i] == False:
                tempArr = [row[:] for row in dqArr]
                tempDqLotateList = dqLotateList[:]
                x, y, z = lotateList[i]
                lotate(tempArr, x-1, y-1, z)
                tempDqLotateList[i] = True
                dq.append([tempArr, tempDqLotateList])
    return m


lotateList = []
for i in range(K):
    lotateList.append(list(map(int, input().strip().split())))

# for x, y, z in newArr:
#     lotate(arr, x-1, y-1, z)

print(bfs(arr, lotateList))
