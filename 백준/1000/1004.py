# https://www.acmicpc.net/problem/1004

# 2
# -5 1 12 1
# 7
# 1 1 8
# -3 -1 1
# 2 2 2
# 5 5 1
# -4 5 1
# 12 1 1
# 12 1 2
# -5 1 5 1
# 1
# 0 0 2

c = int(input())

for _ in range(c):
    x1, y1, x2, y2 = map(int, input().split())
    result = 0
    cc = int(input())
    for _ in range(cc):
        x, y, r = map(int, input().split())
        r1 = abs(x - x1)**2 + abs(y-y1)**2
        r2 = abs(x - x2)**2 + abs(y-y2)**2

        check = 0
        if r**2 >= r1:
            # print("r1", x, y, r)
            result += 1
            check += 1
        if r**2 >= r2:
            # print("r2", x, y, r)
            result += 1
            check += 1
        if check == 2:
            result -= 2

    print(result)
