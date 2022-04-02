# https://www.acmicpc.net/problem/2630

import sys
count = int(sys.stdin.readline().strip())
arr = [sys.stdin.readline().strip().split() for _ in range(count)]
white = 0
blue = 0


def check(x, y, length):
    flag = arr[x][y]
    for i in range(x, x+length):
        for k in range(y, y+length):
            if flag != arr[i][k]:
                return False
    return True


def recursive(x=0, y=0, length=count):
    global blue, white

    if length == 0:
        return

    if check(x, y, length):
        if arr[x][y] == '1':
            blue += 1
        else:
            white += 1
    else:
        for i in range(x, x+length, length//2):
            for k in range(y, y+length, length//2):
                recursive(i, k, length//2)


recursive()
print(white)
print(blue)
