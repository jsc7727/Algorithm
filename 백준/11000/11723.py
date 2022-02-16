import sys
input = sys.stdin.readline

N = input()
arr = [False]*20
for i in range(int(N)):
    temp = input().strip().split(' ')
    # print(temp)
    if (temp[0] == 'all'):
        for k in range(20):
            arr[k] = True

        continue

    if (temp[0] == 'empty'):
        for k in range(20):
            arr[k] = False

        continue

    value = int(temp[1]) - 1
    if (temp[0] == 'add'):
        arr[value] = True
    if (temp[0] == 'remove'):
        arr[value] = False
    if (temp[0] == 'check'):
        print(1 if arr[value] else 0)
    if (temp[0] == 'toggle'):
        arr[value] = not arr[value]
