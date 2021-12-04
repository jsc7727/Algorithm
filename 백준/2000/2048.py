# https://www.acmicpc.net/problem/12100

n = int(input())
boardList = [[]]
answer = 0
for i in range(n):
    temp = list(map(int, input().split()))
    m = max(temp)
    if answer < m:
        answer = m
    boardList[0].append(temp)


def mergeList(l: list) -> list[int]:
    global answer
    temp = []
    result = []
    for i in l:
        if len(temp) > 0 and temp[-1] == i:
            if answer < (temp[-1] * 2):
                answer = (temp[-1] * 2)
            temp[-1] *= 2
            result += temp
            temp = []
        elif i != 0:
            temp.append(i)
    result += temp
    return result


def move(b, arrow: int):
    board = [x[:] for x in b]
    result = []

    if arrow == 0:  # 위
        for j in range(n):
            temp = []
            for i in range(n):
                temp.append(board[i][j])
            result = mergeList(temp)

            for i in range(n):
                if i < len(result):
                    board[i][j] = result[i]
                else:
                    board[i][j] = 0

    elif arrow == 1:  # 오른쪽
        for i in range(n):
            temp = []
            for j in range(n-1, -1, -1):
                temp.append(board[i][j])
            result = mergeList(temp)
            count = 0
            for j in range(n-1, -1, -1):
                if len(result) > count:
                    board[i][j] = result[count]
                    count += 1
                else:
                    board[i][j] = 0

    elif arrow == 2:  # 아래
        for j in range(n):
            temp = []
            for i in range(n-1, -1, -1):
                temp.append(board[i][j])
            result = mergeList(temp)
            count = 0
            for i in range(n-1, -1, -1):
                if len(result) > count:
                    board[i][j] = result[count]
                    count += 1
                else:
                    board[i][j] = 0

    elif arrow == 3:  # 왼쪽
        for i in range(n):
            temp = []
            for j in range(n):
                temp.append(board[i][j])
            result = mergeList(temp)

            for j in range(n):
                if j < len(result):
                    board[i][j] = result[j]
                else:
                    board[i][j] = 0
    return board


def iter(count):
    global boardList, answer

    if count == 5:
        return
    else:
        temp = []
        for board in boardList:
            # print(board)
            for i in range(4):
                temp.append(move(board, i))
        boardList = temp
        # print(count, "=======================================================")
        iter(count+1)


iter(0)
print(answer)
