# https://www.acmicpc.net/problem/13458


input()
examRooms = list(map(int, input().split()))
b, c = map(int, input().split())
result = 0
for i in examRooms:
    result += 1
    if (i - b) > 0:
        result += ((i-b)//c)
        if ((i-b) % c) > 0:
            result += 1

print(result)
