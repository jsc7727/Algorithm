import sys
count = int(sys.stdin.readline().strip())
arr = [[' ']*count for _ in range(count)]

arr[0][:3] = ['*', '*', '*']
arr[1][:3] = ['*', ' ', '*']
arr[2][:3] = ['*', '*', '*']


def recursive(x=0, y=0, length=count):
    temp = length//3
    for i in range(x, x+length, temp):
        for k in range(y, y+length, temp):
            if i == k == x+temp:
                continue
            elif temp != 1:
                recursive(i, k, temp)
            for j in range(temp):
                arr[i+j][k:k+temp] = arr[j][:temp]


recursive()
for i in arr:
    print("".join(i))
