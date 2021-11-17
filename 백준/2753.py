# https://www.acmicpc.net/problem/2753

# 윤년

# 2000 => 1

# 1999 => 0

a = int(input())
if (a % 4 == 0 and a % 100 != 0) or a % 400 == 0:
    print(1)
else:
    print(0)
