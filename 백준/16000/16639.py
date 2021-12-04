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

    result = eval("".join(temp))
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
