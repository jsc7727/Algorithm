import sys
count = int(sys.stdin.readline().strip())
arr = [sys.stdin.readline().strip() for _ in range(count)]
result = ""


def check(x, y, length):
    flag = arr[x][y]
    for i in range(x, x+length):
        for k in range(y, y+length):
            if flag != arr[i][k]:
                return False
    return True


def recursive(x=0, y=0, length=count):
    global result

    if length == 0:
        return

    if check(x, y, length):
        result += arr[x][y]

    else:
        result += "("
        for i in range(x, x+length, length//2):
            for k in range(y, y+length, length//2):
                recursive(i, k, length//2)
        result += ")"


recursive()
print(result)
