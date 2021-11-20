import sys
count = int(input())
arr = [list(map(int, sys.stdin.readline().strip().split()))
       for i in range(count)]
result = 0


def check(x, y, temp):
    flag = arr[x][y]
    for i in range(x, x+temp):
        for k in range(y, y+temp):
            if flag != arr[i][k]:
                return False
    return True


dic = {-1: 0, 1: 0,  0: 0}


def bfs(x=0, y=0, temp=count):
    global result
    if temp == 0:
        return

    if check(x, y, temp):
        # print(arr[x][y], x, y, temp//3)
        dic[arr[x][y]] += 1
    else:
        for i in range(x, x+temp, temp//3):
            for k in range(y, y+temp, temp//3):
                bfs(i, k, temp//3)


bfs()
for i in range(3):
    print(dic[i-1])
