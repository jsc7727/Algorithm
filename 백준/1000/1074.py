# https://www.acmicpc.net/problem/1074


import sys
N, r, c = map(int, sys.stdin.readline().split())
count = -1
flag = False


def recv(x=0, y=0, length=2**N):
    global count, flag
    if flag:
        return
    # print(x, y, x+length, y+length,
    #       (not(x <= r < x+length) and (y <= c < y+length)))

    if not((x <= r < x+length) and (y <= c < y+length)):
        count += length*length
        return

    if length == 1:
        count += 1
        if x == r and y == c:
            flag = True
        return

    for i in range(x, x+length, length//2):
        for k in range(y, y+length, length//2):
            recv(i, k, length//2)


recv()
print(count)
