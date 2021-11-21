# https://www.acmicpc.net/problem/2667

# 7
# 0110100
# 0110101
# 1110101
# 0000111
# 0100000
# 0111110
# 0111000

# 3
# 7
# 8
# 9


import sys
count = int(sys.stdin.readline().strip())
arr = [[int(i) for i in sys.stdin.readline().strip()] for _ in range(count)]
# print(arr)
result = []
temp = 0


def bfs(x, y):
    global temp, count

    if arr[x][y] == 0:
        return

    temp += 1
    arr[x][y] = 0
    search = [[0, 1], [1, 0], [-1, 0], [0, -1]]

    for xx, yy in search:
        xxx, yyy = xx+x, yy+y
        if 0 <= xxx < count and 0 <= yyy < count:
            bfs(xxx, yyy)


for i in range(count):
    for k in range(count):
        temp = 0
        bfs(i, k)
        if temp != 0:
            result.append(temp)


print(len(result))
for i in sorted(result):
    print(i)
