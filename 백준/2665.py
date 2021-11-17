# https://www.acmicpc.net/problem/2665

# 미로만들기


# input

# 8
# 11100110
# 11010010
# 10011010
# 11101100
# 01000111
# 00110001
# 11011000
# 11000111

# output

# 2

# count = int(input())

# temp = []
# for i in range(count):
#     temp.append(input())

# print(temp)


# def bfs(board: list, res: list, now=[0, 0], count: int = 0) -> None:
#     print(res, now, count)
#     if res[0] < count:
#         return

#     elif res[0] > count and now == [len(board)-1, len(board)-1]:
#         res[0] = count
#         return

#     if now[0] < len(board)-1:
#         if board[now[0]][now[1]] == '0':
#             bfs(board, res, [now[0]+1, now[1]], count+1)
#         else:
#             bfs(board, res, [now[0]+1, now[1]], count)
#     if now[1] < len(board)-1:
#         if board[now[0]][now[1]] == '0':
#             bfs(board, res, [now[0], now[1]+1], count+1)
#         else:
#             bfs(board, res, [now[0], now[1]+1], count)


# res = [float('inf')]
# bfs(temp, res)
# print(res)

# =-----------------------------------------------=

# count = int(input())

# temp = []
# for i in range(count):
#     temp.append(list(map(int, input())))

# for i in range(count):
#     for k in range(count):
#         if i == 0 and k == 0:
#             continue
#         elif i == 0 and k > 0:
#             temp[i][k] += temp[i][k-1]
#         elif k == 0 and i > 0:
#             temp[i][k] += temp[i-1][k]
#         else:
#             temp[i][k] += max(temp[i-1][k], temp[i][k-1])

# print(count*2-temp[count-1][count-1]-1)


from collections import deque

n = int(input())
a = [list(input()) for _ in range(n)]
dist = [[-1]*n for _ in range(n)]
dist[0][0] = 0
t = [[-1, 0], [1, 0], [0, -1], [0, 1]]


def bfs():
    q = deque()
    q.append((0, 0))
    while q:
        x, y = q.popleft()
        if x == y == n-1:
            print(dist[x][y])
            return

        for x1, y1 in t:
            x3, y3 = x+x1, y+y1
            if (0 <= x3 < n and 0 <= y3 < n):
                if dist[x3][y3] == -1:
                    if a[x3][y3] == '1':
                        dist[x3][y3] = dist[x][y]
                        q.appendleft((x3, y3))
                    else:
                        dist[x3][y3] = dist[x][y]+1
                        q.append((x3, y3))


bfs()
