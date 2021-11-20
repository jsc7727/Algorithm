# https://www.acmicpc.net/problem/2749


c = int(input())
temp = [0, 1]
check = 0
for i in range(2, c+1):
    temp[check] = sum(temp)
    temp[0] %= 1000000
    temp[1] %= 1000000
    if check == 0:
        check = 1
    else:
        check = 0
print(temp[0])
