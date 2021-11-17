count = int(input())
n = 1000000
while count != 0 or n != 0:
    flag = True
    temp = ''
    for idx, i in enumerate(str(n)):
        # print(idx, i, n)
        if idx == 0:
            temp = i
        elif int(temp) > int(i):
            temp = i
        else:
            flag = False
            break
    if flag:
        count -= 1
    n -= 1

print(n)
