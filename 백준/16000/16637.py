# https://www.acmicpc.net/problem/16637

# 9
# 3+8*7-9*2

# 136

import sys
sys.setrecursionlimit(10 ** 6)
input = sys.stdin.readline

c = int(input().strip())
s = input().strip()


def subCalc(s: str) -> int:
    return eval(s)


def calc(s: str) -> any:
    temp = []
    for i in range(len(s)):
        temp += [s[i]]
        if s[i] == ")":
            temp = temp[:-5] + [str(subCalc("".join(temp[-5:])))]

    result = temp[0]
    for i in range(1, len(temp), 2):
        # print(i, "".join(str(result)+temp[i]+str(temp[i+1])))
        result = subCalc("".join(str(result)+temp[i]+str(temp[i+1])))
    return result


def dfs(s: str, i) -> None:
    global result

    if i >= len(s):
        # print(s)
        result = max(result, int(calc(s)))
        return

    dfs(s[:i-1] + "("+s[i-1:i+2]+")" + s[i+2:], i+6)
    dfs(s, i+2)


result = int(-1e9)

if c == 1:
    result = max(result, int(s))
else:
    dfs(s, 1)
print(result)
