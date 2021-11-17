# 팰린드롬 만들기
# https://www.acmicpc.net/problem/1254


inputString = input()


def check(s: str) -> bool:
    if s == s[::-1]:
        return True
    else:
        return False


for i in range(len(inputString)):
    if check(inputString[i:]):
        print(len(inputString)+i)
        break
