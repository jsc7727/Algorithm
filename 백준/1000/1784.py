# https://www.acmicpc.net/problem/1784

import sys
input = sys.stdin.readline
s = input().strip()

temp = ""
while s != temp:
    temp = s
    for i in range(len(s) - len(s) % 2, 0, -2):
        flag = False
        for k in range(len(s)-i+1):
            # print(s[k:(k+(i//2))] == s[(k+(i//2)):k+i][::-1])
            if s[k:(k+(i//2))] == s[(k+(i//2)):k+i][::-1]:
                flag = True
                # print(s[k:(k+(i//2))])
                s = s[:k] + s[k:(k+(i//2))] + s[k+i:]
                break
        if flag:
            break

    # print(s)
print(temp, len(temp))
