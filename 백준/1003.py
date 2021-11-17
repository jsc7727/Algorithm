# https://www.acmicpc.net/problem/1003

# 피보나치 함수

count = int(input())
l = [int(input()) for _ in range(count)]

temp = (1, 0)
for i in l:

    if (i == 0):
        print(*temp)
        continue
    else:
        t = [1, 0]
        for i in range(1, i+1):
            t = [t[1], sum(t)]
        print(*t)
