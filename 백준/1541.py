# https://www.acmicpc.net/problem/1541


import sys
s = sys.stdin.readline().strip()
ts = "("
flag = False
word = ""
for i in range(len(s)):
    if s[i] == '-':
        ts += str(int(word))
        word = ""
        ts += ")-("
    elif s[i] == '+':
        ts += str(int(word))
        word = ""
        ts += '+'
    else:
        word += s[i]
else:
    ts += str(int(word))
    ts += ')'
print(eval(ts))
