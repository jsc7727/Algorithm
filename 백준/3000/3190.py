# https://www.acmicpc.net/problem/3190

from collections import deque

size = int(input())
appleIter = int(input())
apples = []
lotate = deque()
snake = deque([[0, 0]])
for i in range(appleIter):
    apples.append(list(map(int, input().split())))
lotateIter = int(input())
for i in range(lotateIter):
    temp = input().split()
    lotate.append([int(temp[0]), temp[1]])

m = [[0 for k in range(size)] for i in range(size)]


for x, y in apples:
    m[x-1][y-1] = 1

m[0][0] = 2

# for i in m:
#     print(i)
# print()

# 아무것도 없음 = 0, 사과있음 = 1, 뱀 = 2
time = 0
head = 2  # 1 위, 2 오른쪽, 3 아래, 4 왼쪽
while True:
    if head == 1 and snake[0][1] > 0:
        x, y = snake[0]
        if m[y-1][x] == 0:
            m[y-1][x] = 2
            snake.appendleft([x, y-1])
            endx, endy = snake.pop()
            m[endy][endx] = 0
        elif m[y-1][x] == 1:
            m[y-1][x] = 2
            snake.appendleft([x, y-1])
        elif m[y-1][x] == 2:
            break

    elif head == 2 and snake[0][0] < size-1:
        x, y = snake[0]
        x += 1
        if m[y][x] == 0:
            m[y][x] = 2
            snake.appendleft([x, y])
            endx, endy = snake.pop()
            m[endy][endx] = 0
        elif m[y][x] == 1:
            m[y][x] = 2
            snake.appendleft([x, y])
        elif m[y][x] == 2:
            break

    elif head == 3 and snake[0][1] < size-1:
        x, y = snake[0]
        y += 1
        if m[y][x] == 0:
            m[y][x] = 2
            snake.appendleft([x, y])
            endx, endy = snake.pop()
            m[endy][endx] = 0
        elif m[y][x] == 1:
            m[y][x] = 2
            snake.appendleft([x, y])
        elif m[y][x] == 2:
            break

    elif head == 4 and snake[0][0] > 0:
        x, y = snake[0]
        x -= 1
        if m[y][x] == 0:
            m[y][x] = 2
            snake.appendleft([x, y])
            endx, endy = snake.pop()
            m[endy][endx] = 0
        elif m[y][x] == 1:
            m[y][x] = 2
            snake.appendleft([x, y])
        elif m[y][x] == 2:
            break
    else:
        break

    time += 1

    if len(lotate) > 0 and [time, 'L'] == lotate[0]:
        lotate.popleft()
        head -= 1
        if head == 0:
            head = 4
    elif len(lotate) > 0 and [time, 'D'] == lotate[0]:
        lotate.popleft()
        head += 1
        if head == 5:
            head = 1

    # for i in m:
    #     print(i)
    # print()

print(time+1)
