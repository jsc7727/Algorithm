# https://www.acmicpc.net/problem/1010

# 다리 놓기

# input
# 3
# 2 2
# 1 5
# 13 29

# output
# 1
# 5
# 67863915


c = int(input())
l = []
for i in range(c):
    l.append(list(map(int, input().split())))


for i in l:
    a, b = i
    temp1 = 1
    temp2 = 1
    for i in range(a+1, b+1):
        temp1 *= i
    for i in range(2, b-a+1):
        temp2 *= i
    print(temp1 // temp2)
