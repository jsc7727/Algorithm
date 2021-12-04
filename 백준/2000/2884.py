# https://www.acmicpc.net/problem/2884

a, b = map(int, input().split())
b = b - 45
if b < 0:
    a -= 1
    b = 60+b

if a < 0:
    a = 24+a
print(a, b)
